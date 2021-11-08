/**
 * wordpress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	ToggleControl,
	RangeControl,
	TextControl,
	ColorPalette,
	BaseControl,
} from "@wordpress/components";

import {
	Fragment,
	useState
} from "@wordpress/element";

import {
	InspectorControls,
	MediaPlaceholder,
} from "@wordpress/block-editor";


/**
 * external dependencies
 */
import classnames from "classnames";

/**
 * internal
 */
import { colors, getVideoLength } from './utils';
import Slider from './slider';

export default function Edit(props) {
	const {
		isSelected,
		className,
		setAttributes,
		attributes: {
			sliderItems,
			autoPlay,
			autoPlayInterval,
			linkItems,
			navArrows,
			arrowPosition,
			dots,
			dotPosition,
			links,
			ctaBtns,
			ctaBtnTexts,
			ctaBtnColor,
			ctaBtnBgColor,
			ctaBtnBorderRadius,
		},
	} = props;

	const [isEditing, setEdit] = useState(false);

	/**
	 * Update Carousel items 
	 * on media selection
	 * @param {*} selectedMedias 
	 */
	const onSelectMedia = (selectedMedias, isAppender) => {
		const filteredData = selectedMedias.map(
			({ id, type, alt, url, sizes, fileLength }) => ({
				id,
				type,
				alt,
				url,
				sizes,
				...(type === 'video' && {
					fileLength: getVideoLength(fileLength)
				})
			})
		);
		setAttributes({ sliderItems: isAppender ? sliderItems.concat(filteredData) : filteredData })
	};


	const renderMediaPlaceholder = (isAppender = false) => {
		return (
			<MediaPlaceholder
				multiple
				accept="image/*,video/*"
				onSelect={(selectedItems) => onSelectMedia(selectedItems, isAppender)}
				allowedTypes={["image", "video"]}
				labels={{
					title: isAppender ? false : "Media Slider",
					instructions: isAppender ? false : "Drag images or videos, upload new ones or select files from your library.",
				}}
				isAppender={isAppender}
				className={isAppender ? "media-slider-appender" : "media-slider-mediaplaceholder"}
			/>);
	}

	const sliderSettings = {
		autoPlay,
		navArrows,
		dots,
		interval: autoPlayInterval
	}

	const classNames = classnames("media-slider", className);

	return (
		<Fragment>
			{sliderItems.length > 0 && (
				<InspectorControls key="inspector">
					<PanelBody title={__("Carousel Settings")} initialOpen={true}>
						<ToggleControl
							checked={autoPlay}
							label={__("Auto Play")}
							onChange={(value) => setAttributes({ autoPlay: value })}
						/>
						{
							autoPlay &&
							<RangeControl
								label={__('Autoplay Interval (ms)')}
								min={500}
								max={4000}
								onChange={(value) => setAttributes({ autoPlayInterval: value })}
								step={100}
								value={autoPlayInterval}
							/>
						}
						<ToggleControl
							checked={navArrows}
							label={__("Navigation Arrows")}
							onChange={(value) => setAttributes({ navArrows: value })}
						/>
						<ToggleControl
							checked={dots}
							label={__("Dots")}
							onChange={(value) => setAttributes({ dots: value })}
						/>
						<ToggleControl
							checked={linkItems}
							label={__("Link Items")}
							onChange={(value) => setAttributes({ linkItems: value })}
						/>
						<ToggleControl
							checked={ctaBtns}
							label={__("Show CTA Buttons")}
							onChange={(value) => setAttributes({ ctaBtns: value })}
						/>

					</PanelBody>
					{
						linkItems && (
							<PanelBody title={__('Links')} initialOpen={false}>
								{
									sliderItems.map((_, index) => (
										<TextControl
											key={index}
											label={__(`Link of Item-${index + 1}`)}
											value={links[index]}
											onChange={(value) => setAttributes({ links: { ...links, [index]: value } })}
										/>
									))
								}
							</PanelBody>
						)
					}
					{
						ctaBtns && (
							<PanelBody title={__('Button Style')} initialOpen={false}>
								<RangeControl
									label={__('Border Radius')}
									min={1}
									max={50}
									step={1}
									allowReset
									value={ctaBtnBorderRadius}
									onChange={(value) => setAttributes({ ctaBtnBorderRadius: value })}
								/>
								<BaseControl.VisualLabel className="color-picker-label"> {__('Text Color')} </BaseControl.VisualLabel>
								<ColorPalette
									colors={colors}
									value={ctaBtnColor}
									onChange={(color) => { setAttributes({ ctaBtnColor: color }) }}
								/>

								<BaseControl.VisualLabel className="color-picker-label"> {__('Background Color')} </BaseControl.VisualLabel>
								<ColorPalette
									colors={colors}
									value={ctaBtnBgColor}
									onChange={(color) => { setAttributes({ ctaBtnBgColor: color }) }}
								/>
							</PanelBody>
						)
					}
					{
						navArrows && (
							<PanelBody title={__('Arrows')} initialOpen={false}>
								<RangeControl
									label={__('Position')}
									min={1}
									max={100}
									step={1}
									value={arrowPosition}
									onChange={(value) => setAttributes({ arrowPosition: value })}
								/>
							</PanelBody>
						)
					}
					{
						dots && (
							<PanelBody title={__('Dots')} initialOpen={false}>
								<RangeControl
									label={__('Position')}
									min={1}
									max={50}
									step={1}
									value={dotPosition}
									onChange={(value) => setAttributes({ dotPosition: value })}
								/>
							</PanelBody>
						)
					}
				</InspectorControls>
			)}
			<div className={classNames}>
				{sliderItems.length === 0 ?
					renderMediaPlaceholder()
					: (
						<Fragment>
							<div className="gutenberg-custom-slider">
								<Slider
									isSelected
									isEditing={isEditing}
									setEdit={setEdit}
									slides={sliderItems}
									sliderSettings={sliderSettings}
									linkItems={linkItems}
									links={links}
									ctaBtns={ctaBtns}
									ctaBtnTexts={ctaBtnTexts}
									ctaBtnStyle={{
										borderRadius: ctaBtnBorderRadius,
										backgroundColor: ctaBtnBgColor,
										padding: '5px 20px',
										color: ctaBtnColor,
									}}
									arrowStyle={{
										bottom: `${arrowPosition}%`
									}}
									dotsStyle={{
										bottom: `${dotPosition}%`
									}}
									setAttributes={setAttributes} />
							</div>
							{isSelected && sliderItems.length && !isEditing && renderMediaPlaceholder(true)}
						</Fragment>
					)}
			</div>
		</Fragment>
	);
}
