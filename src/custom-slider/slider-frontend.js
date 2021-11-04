/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Fragment } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor'
import classnames from 'classnames';

const Slider = ({
    slides,
    linkItems,
    links,
    ctaBtns,
    ctaBtnTexts,
    sliderSettings: { autoPlay, navArrows, dots, interval }
}) => {

    return (
        <Fragment>
            {navArrows && (
                <div className="slider-nav-btns">
                    <button className="carousel-nav-btn prev">
                        {__('Prev')}
                    </button>
                    <button className="carousel-nav-btn next">
                        {__('Next')}
                    </button>
                </div>)
            }
            {dots && (<div className="slider-dots">
                {slides.map((_, index) => (
                    <button className={classnames('slider-dot')} />
                ))}
            </div>)
            }
            <div
                className="slider-wrapper"
            >
                <div className="slider" >
                    {slides.map((slide, i) => {
                        let Wraper = "Div";
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
                                    <RichText.Content
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