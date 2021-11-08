/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Fragment } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

const Slider = ({
    slides,
    linkItems,
    links,
    ctaBtns,
    ctaBtnTexts,
    ctaBtnStyle,
    sliderSettings: { navArrows, dots }
}) => {

    return (
        <Fragment>
            {navArrows && (
                <div className="slider-nav-btns">
                    <button className="slider-nav-btn prev">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                            <path d="m31.7 239 136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
                        </svg>
                    </button>
                    <button className="slider-nav-btn next">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                            <path d="m224.3 273-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                        </svg>
                    </button>
                </div>)
            }
            {dots && (<div className="slider-dots">
                {slides.map((_, index) => (
                    <button className={classnames('slider-dot', { 'active': index === 0 })} data-index={index} />
                ))}
            </div>)
            }
            <div
                className="slider-wrapper"
            >
                <div className="slider" >
                    {slides.map((slide, i) => {
                        const Wraper = linkItems ? "a" : "div";
                        return (
                            <Wraper className={classnames("slider-item", { 'active': i === 0 })} {...(linkItems && { href: `//${links[i]}`, target: 'blank' })} data-type={slide.type} {...slide.type === 'video' && { 'data-videolength': slide.fileLength }}>
                                {
                                    slide.type === 'image' ?
                                        <img src={slide.url} alt={slide.alt | slide.id} ref={el => slidesRef.current[i] = el} />
                                        :
                                        <video autoPlay muted controls ref={el => slidesRef.current[i] = el} >
                                            <source src={slide.url} type="video/mp4" />
                                        </video>
                                }
                                {ctaBtns && (
                                    <RichText.Content
                                        style={ctaBtnStyle}
                                        tagName="button"
                                        className="cta-btn"
                                        placeholder={__('Add Text...')}
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

export default Slider;