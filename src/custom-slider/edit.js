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
	Radio,
	RadioGroup,
	Button,
	ButtonGroup,
} from "@wordpress/components";


import { Fragment, useState } from "@wordpress/element";
import {
	InspectorControls,
	MediaPlaceholder,
	MediaUpload,
} from "@wordpress/block-editor";


/**
 * external dependencies
 */
import classnames from "classnames";

/**
 * internal
 */
import { colors } from './utils';
import Slider from './slider';


export default function Edit(props) {
	const {
		className,
		setAttributes,
		attributes: {
			sliderItems,
			autoPlay,
			autoPlayInterval,
			linkItems,
			navArrows,
			dots,
			links,
			ctaBtns,
			ctaBtnTexts,
			ctaBtnColor,
			ctaBtnBgColor,
			ctaBtnBorderRadius,
		},
	} = props;


	const getVideoLength = (fileLength) => {
		const [min, second] = fileLength.split(':');
		return (parseInt(min) * 60 + parseInt(second)) * 1000
	}

	/**
	 * Update Carousel items 
	 * on media selection
	 * @param {*} selectedMedias 
	 */
	const onSelectMedia = (selectedMedias) => {
		// console.log(selectedMedias)
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
		setAttributes({ sliderItems: filteredData })
	};


	const sliderSettings = {
		autoPlay,
		navArrows,
		dots,
		interval: autoPlayInterval
	}
	const classNames = classnames("custom-carousel", className);

	const [checked, setChecked] = useState('25');
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
								{/* <ButtonGroup>
									<Button isSmall variant="primary">{__('Left')}</Button>
									<Button isSmall variant="primary">{__('Center')}</Button>
									<Button isSmall variant="primary">{__('Right')}</Button>
								</ButtonGroup> */}
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
				</InspectorControls>
			)}
			<div className={classNames}>
				{sliderItems.length === 0 ? (
					<MediaPlaceholder
						multiple
						onSelect={(selectedItems) => onSelectMedia(selectedItems)}
						allowedTypes={["image", "video"]}
						labels={{
							title: "Media Slider",
							instructions:
								"Drag images or videos, upload new ones or select files from your library.",
						}}
					/>
				) : (
					<div className="gutenberg-custom-slider">
						<Slider
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
							setAttributes={setAttributes} />
					</div>
				)}
			</div>
		</Fragment>
	);
}
