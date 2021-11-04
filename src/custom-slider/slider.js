/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useEffect, useRef, Fragment } from '@wordpress/element';
import SliderItem from './sliderItem';
import classnames from 'classnames';

const Slider = ({ slides, sliderSettings: { autoPlay, navArrows, dots } }) => {
    const [activeItem, setActiveItem] = useState(false);
    const [isHovered, setHovered] = useState(false);

    /**
     * Set Active item of slider
     * @param {*} newIndex 
     */
    const updateSlider = (newIndex) => {
        if (newIndex < 0) {
            setActiveItem(slides.length - 1)
        } else if (newIndex >= slides.length) {
            setActiveItem(0)
        } else {
            setActiveItem(newIndex)
        }
    }

    const style = {
        transform: `translateX(${(activeItem * -100)}%)`,
    };

    useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(() => {
                if (!isHovered) {
                    setActiveItem(() => (activeItem + 1) % slides.length);
                }
            }, 1000)
            return () => {
                if (interval) {
                    clearInterval(interval);
                }
            }
        }
    }), [autoPlay];

    return (
        <Fragment>
            {navArrows && (
                <div className="slider-nav-btns">
                    <button onClick={() => updateSlider(activeItem - 1)} className="carousel-nav-btn prev">
                        {__('Prev')}
                    </button>
                    <button onClick={() => updateSlider(activeItem + 1)} className="carousel-nav-btn next">
                        {__('Next')}
                    </button>
                </div>)
            }
            {dots && (<div className="slider-dots">
                {slides.map((_, index) => (
                    <button onClick={() => updateSlider(index)} className={classnames('slider-dot', { 'active': index === activeItem })} />
                ))}
            </div>)
            }
            <div className="slider-wrapper"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <div className="slider" style={style}>
                    {slides.map((slide) => <SliderItem key={slide} slide={slide} />)}
                </div>
            </div>
        </Fragment>
    )
}

export default Slider