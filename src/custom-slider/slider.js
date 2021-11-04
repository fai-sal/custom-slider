/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useEffect, useRef, Fragment } from '@wordpress/element';
import classnames from 'classnames';

const Slider = ({ slides, sliderSettings: { autoPlay, navArrows, dots } }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setHovered] = useState(false);
    const slidesRef = useRef([]);

    useEffect(() => {
        slidesRef.current = slidesRef.current.slice(0, slides.length);
    }, [slides]);

    /**
     * Set Active item of slider
     * @param {*} newIndex 
     */
    const updateSlider = (newIndex) => {
        if (newIndex < 0) {
            setActiveIndex(slides.length - 1)
        } else if (newIndex >= slides.length) {
            setActiveIndex(0)
        } else {
            setActiveIndex(newIndex)
        }
    }

    const style = {
        transform: `translateX(${(activeIndex * -100)}%)`,
    };
    const activeItem = slides[activeIndex];

    /**
     * Autoplay video for subsequent cases
     */
    useEffect(() => {
        if (activeItem.type === 'video') {
            slidesRef.current[activeIndex].play()
        }
    }, [activeIndex]);


    useEffect(() => {
        if (autoPlay) {

            let transitionTime = 1000;
            if (activeItem.type === 'video' && activeItem.fileLength > transitionTime) {
                transitionTime = activeItem.fileLength;
            }
            const interval = setInterval(() => {
                if (!isHovered) {
                    setActiveIndex(() => (activeIndex + 1) % slides.length);
                }
            }, transitionTime)

            return () => {
                if (interval) {
                    clearInterval(interval);
                }
            }
        }
    }), [slides, autoPlay];

    return (
        <Fragment>
            {navArrows && (
                <div className="slider-nav-btns">
                    <button onClick={() => updateSlider(activeIndex - 1)} className="carousel-nav-btn prev">
                        {__('Prev')}
                    </button>
                    <button onClick={() => updateSlider(activeIndex + 1)} className="carousel-nav-btn next">
                        {__('Next')}
                    </button>
                </div>)
            }
            {dots && (<div className="slider-dots">
                {slides.map((_, index) => (
                    <button onClick={() => updateSlider(index)} className={classnames('slider-dot', { 'active': index === activeIndex })} />
                ))}
            </div>)
            }
            <div
                className="slider-wrapper"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="slider" style={style}>
                    {slides.map((slide, i) => (
                        <div className="slider-item" >
                            {
                                slide.type === 'image' ?
                                    <img src={slide.url} alt={slide.alt | slide.id} ref={el => slidesRef.current[i] = el} />
                                    :
                                    <video autoPlay muted controls ref={el => slidesRef.current[i] = el} >
                                        <source src={slide.url} type="video/mp4" />
                                    </video>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Slider