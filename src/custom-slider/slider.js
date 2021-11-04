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
            let transitionDelay = interval;
            if (activeItem.type === 'video' && activeItem.fileLength > transitionDelay) {
                transitionDelay = activeItem.fileLength;
            }
            const intervalId = setInterval(() => {
                if (!isHovered) {
                    setActiveIndex(() => (activeIndex + 1) % slides.length);
                }
            }, transitionDelay)

            return () => {
                if (intervalId) {
                    clearInterval(intervalId);
                }
            }
        }
    }), [slides, autoPlay, interval];

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
                    {slides.map((slide, i) => {
                        let Wraper = "Div";
                        console.log('linkItems : ', linkItems)
                        if (linkItems) {
                            Wraper = "a"
                        }
                        return (
                            <Wraper className="slider-item" {...(linkItems && { href: `//${links[i]}`, target: 'blank' })}>
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
                                        tagName="button"
                                        className="cta-btn"
                                        placeholder={__('Add Text...')}
                                        onChange={value => setAttributes({ ctaBtnTexts: { ...links, [i]: value } })}
                                        value={ctaBtnTexts[i]}
                                    />
                                )}
                            </Wraper>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default Slider