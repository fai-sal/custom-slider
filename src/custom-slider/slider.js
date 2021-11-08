/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useEffect, useRef, Fragment } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor'
import classnames from 'classnames';

const Slider = ({
    slides,
    linkItems,
    links,
    ctaBtns,
    ctaBtnTexts,
    ctaBtnStyle,
    setAttributes,
    sliderSettings: { autoPlay, navArrows, dots, interval }
}) => {

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
            let currentTimeout;
            const gotoNextSlide = () => {
                setActiveIndex((currentActiveIndex) => {
                    const nextActiveIndex = (currentActiveIndex + 1) % slides.length;
                    clearTimeout(currentTimeout);
                    currentTimeout = setTimeout(gotoNextSlide, slides[nextActiveIndex].type === 'video' ? slides[nextActiveIndex].fileLength : interval);
                    return nextActiveIndex;
                });
            }
            currentTimeout = setTimeout(gotoNextSlide, interval);
            return () => {
                if (currentTimeout) {
                    clearTimeout(currentTimeout);
                }
            }
        }
    }, [slides, autoPlay, interval]);

    return (
        <Fragment>
            {navArrows && (
                <div className="slider-nav-btns">
                    <button onClick={() => updateSlider(activeIndex - 1)} className="slider-nav-btn prev">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                            <path d="m31.7 239 136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
                        </svg>
                    </button>
                    <button onClick={() => updateSlider(activeIndex + 1)} className="slider-nav-btn next">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                            <path d="m224.3 273-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                        </svg>
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
            // onMouseEnter={() => setHovered(true)}
            // onMouseLeave={() => setHovered(false)}
            >
                <div className="slider" style={style}>
                    {slides.map((slide, i) => {
                        const Wraper = linkItems ? "a" : "div";
                        return (
                            // <Wraper className="slider-item" {...(linkItems && { href: links[i] ? `//${links[i]}` : '#', target: 'blank' })}>
                            <div className="slider-item">
                                {
                                    slide.type === 'image' ?
                                        <img src={slide.url} alt={slide.alt | slide.id} ref={el => slidesRef.current[i] = el} />
                                        :
                                        <video autoPlay muted controls ref={el => slidesRef.current[i] = el} >
                                            <source src={slide.url} type="video/mp4" />
                                        </video>
                                }
                                {ctaBtns && (
                                    <RichText
                                        className="cta-btn"
                                        style={ctaBtnStyle}
                                        placeholder={__('Add text…')}
                                        onChange={value => setAttributes({ ctaBtnTexts: { ...ctaBtnTexts, [i]: value } })}
                                        value={ctaBtnTexts[i]}
                                    />
                                )}
                            </div>
                            // </Wraper>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default Slider