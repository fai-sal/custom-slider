(function ($) {
    $('.media-slider').each(function () {
        const currentSlider = $(this);
        let activeIndex = 0;
        const {
            numofSlides,
            autoPlay,
            interval,
        } = JSON.parse(currentSlider[0].dataset.settings);

        const slider = $('.slider-wrapper .slider', this);
        const navBtns = $('.slider-nav-btns', this).length;
        const dots = $('.slider-dots', this);

        const updateSliderPosition = () => {
            slider[0].style.transform = `translateX(${(activeIndex * -100)}%)`;
        }
        const updateActiveDot = () => {
            const activeDot = $('.slider-dot.active', dots);
            activeDot.removeClass('active');
            $('.slider-dot', dots)[activeIndex].classList.add("active");
        }

        const updateSlider = (newIndex) => {
            if (newIndex < 0) {
                activeIndex = numofSlides - 1;
            } else if (newIndex >= numofSlides) {
                activeIndex = 0;
            } else {
                activeIndex = newIndex;
            }

            const activeSlider = $('.slider-item.active', this);
            activeSlider.removeClass('active');
            $('.slider-item', this)[activeIndex].classList.add("active");

            updateSliderPosition();
            if (dots.length) {
                updateActiveDot();
            }
        }

        if (navBtns) {
            const nextBtn = $('.slider-nav-btn.next', this);
            const prevBtn = $('.slider-nav-btn.prev', this);
            prevBtn.click(function () {
                updateSlider(activeIndex - 1);
            });
            nextBtn.click(function () {
                updateSlider(activeIndex + 1);
            });
        }

        if (dots.length) {
            $('.slider-dot', dots).click((event) => {
                updateSlider(event.target.dataset.index);
                updateActiveDot(event.target);
            });
        }
        if (autoPlay) {
            let currentTimeout;
            const gotoNextSlide = () => {
                updateSlider(activeIndex + 1);
                const activeSlider = $('.slider-item.active', this);
                const { type, videolength } = activeSlider[0].dataset;
                clearTimeout(currentTimeout);
                currentTimeout = setTimeout(gotoNextSlide, type === 'video' ? videolength : interval);
                if (type === 'video') {
                    const video = $('video', activeSlider);
                    if (video[0].ended) {
                        video[0].play();
                    }
                }
            }
            currentTimeout = setTimeout(gotoNextSlide, interval);
        }
    });
})(jQuery);