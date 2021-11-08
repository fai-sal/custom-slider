/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useEffect, useRef, Fragment } from '@wordpress/element';
import { Tooltip, Button, Spinner, ButtonGroup } from '@wordpress/components';
import { RichText, MediaPlaceholder } from '@wordpress/block-editor';
import { getVideoLength } from './utils';
import classnames from 'classnames';

const Slider = ({
    slides,
    linkItems,
    links,
    ctaBtns,
    ctaBtnTexts,
    ctaBtnStyle,
    setAttributes,
    isSelected,
    isEditing,
    setEdit,
    dotsStyle,
    arrowStyle,
    sliderSettings: { autoPlay, navArrows, dots, interval }
}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const timeoutId = useRef(null);
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
            setActiveIndex(slides.length - 1);
        } else if (newIndex >= slides.length) {
            setActiveIndex(0);
        } else {
            setActiveIndex(newIndex);
        }
        if (autoPlay && timeoutId.current) {
            clearCurrentTimeout();
            timeoutId.current = setTimeout(triggerAutoPlay, slides[newIndex].type === 'video' ? slides[newIndex].fileLength : interval);
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
        if (activeItem && activeItem.type === 'video' && slidesRef.current[activeIndex]) {
            slidesRef.current[activeIndex].play();
        }
    }, [activeIndex]);

    useEffect(() => {
        if (isEditing) {
            clearCurrentTimeout();
        } else if (autoPlay) {
            timeoutId.current = setTimeout(triggerAutoPlay, slides[activeIndex].type === 'video' ? slides[activeIndex].fileLength : interval);
        }
    }, [isEditing]);

    const clearCurrentTimeout = () => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
        }
    }

    const triggerAutoPlay = () => {
        setActiveIndex((currentActiveIndex) => {
            const nextActiveIndex = (currentActiveIndex + 1) % slides.length;
            clearCurrentTimeout();
            timeoutId.current = setTimeout(triggerAutoPlay, slides[nextActiveIndex].type === 'video' ? slides[nextActiveIndex].fileLength : interval);
            return nextActiveIndex;
        });
    }

    useEffect(() => {
        if (autoPlay) {
            clearCurrentTimeout();
            timeoutId.current = setTimeout(triggerAutoPlay, slides[activeIndex].type === 'video' ? slides[activeIndex].fileLength : interval);
        } else {
            clearCurrentTimeout();
        }
        return () => {
            clearCurrentTimeout();
        }
    }, [slides, autoPlay, interval]);

    const onSelectMedia = ({ id, type, alt, url, sizes, fileLength }, index) => {
        setAttributes({
            sliderItems: slides.map((slide, i) => i === index ? {
                id, type, alt, url, sizes, ...(type === 'video' && {
                    fileLength: getVideoLength(fileLength)
                })
            } : slide)
        });
        setEdit(false);
    }

    /**
     * Remove Slider Item & Update active index
     * @param {*} index 
     */
    const onRemove = (index) => {
        setAttributes({ sliderItems: slides.filter((_, i) => i !== index) });
        if (activeIndex === index) {
            updateSlider(index === 0 ? index + 1 : index - 1);
        }
    }

    return (
        <Fragment>
            {
                !isEditing && (
                    <Fragment>
                        {navArrows && (
                            <div className="slider-nav-btns" style={arrowStyle}>
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
                        {dots && (<div className="slider-dots" style={dotsStyle}>
                            {slides.map((_, index) => (
                                <button onClick={() => updateSlider(index)} className={classnames('slider-dot', { 'active': index === activeIndex })} />
                            ))}
                        </div>)
                        }
                    </Fragment>
                )
            }

            <div className="slider-wrapper">
                <div className="slider" style={style}>
                    {slides.map((slide, i) => {
                        const Wraper = linkItems ? "a" : "div";
                        return (
                            // <Wraper className="slider-item" {...(linkItems && { href: links[i] ? `//${links[i]}` : '#', target: 'blank' })}>
                            <div className="slider-item">
                                {isEditing ? (
                                    <Fragment>
                                        <MediaPlaceholder
                                            value={{ id: slide, src: slide.url }}
                                            accept="image/*,video/*"
                                            onSelect={(selectedItem) => onSelectMedia(selectedItem, i)}
                                            allowedTypes={["image", "video"]}
                                            labels={{
                                                title: "Media Slider",
                                                instructions:
                                                    "Drag image or video, upload new ones or select file from your library.",
                                            }}
                                        />
                                        <Button
                                            className="cancel_media_upload"
                                            icon="no"
                                            onClick={() => setEdit(false)}
                                            label={__('Cancel')}
                                            disabled={!isSelected}
                                        />
                                    </Fragment>
                                )
                                    :
                                    <Fragment>
                                        {slide.type === 'image' ?
                                            <img src={slide.url} alt={slide.alt | slide.id} ref={el => slidesRef.current[i] = el} />
                                            :
                                            <video autoPlay muted controls ref={el => slidesRef.current[i] = el} >
                                                <source src={slide.url} type="video/mp4" />
                                            </video>}
                                    </Fragment>
                                }


                                {
                                    !isEditing && (
                                        <Fragment>
                                            {ctaBtns && !isEditing && (
                                                <RichText
                                                    className="cta-btn"
                                                    style={ctaBtnStyle}
                                                    placeholder={__('Add text…')}
                                                    onChange={value => setAttributes({ ctaBtnTexts: { ...ctaBtnTexts, [i]: value } })}
                                                    value={ctaBtnTexts[i]}
                                                />
                                            )}
                                            <ButtonGroup className="slider-item-action-btns">
                                                <Button
                                                    icon="edit"
                                                    onClick={() => setEdit(true)}
                                                    label={__('Replace image')}
                                                    disabled={!isSelected}
                                                />
                                                <Button
                                                    icon="no"
                                                    onClick={() => onRemove(i)}
                                                    label={__('Remove image')}
                                                    disabled={!isSelected}
                                                />
                                            </ButtonGroup>
                                        </Fragment>
                                    )
                                }
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