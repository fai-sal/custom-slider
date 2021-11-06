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

        const updateSlider = (newIndex) => {
            if (newIndex < 0) {
                activeIndex = numofSlides - 1;
            } else if (newIndex >= numofSlides) {
                activeIndex = 0;
            } else {
                activeIndex = newIndex;
            }
            updateSliderPosition();
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
            });
        }
    });
})(jQuery);