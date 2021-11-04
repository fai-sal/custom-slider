/**
 * internal dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	ToggleControl,
	RangeControl,
	TextControl
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import {
	InspectorControls,
	MediaPlaceholder,
	MediaUpload,
} from "@wordpress/block-editor";


/**
 * external dependencies
 */
import classnames from "classnames";
import Slider from './slider'


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
								label={__('Autoplay Interval')}
								min={500}
								max={4000}
								help={__('In milliseconds')}
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
							label={__("Show Buttons")}
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
							setAttributes={setAttributes} />
						{/* <MediaUpload
						multiple
						onSelect={(selectedImage) => {
							console.log(selectedImage);
							// setAttributes({ [attr]: selectedImage });
						}}
						allowedTypes={["image", "video"]}
						render={({ open }) => (
							<button
								className="qubely-button"
								aria-label={__("Edit")}
								onClick={open}
								role="button"
							>
								<span
									aria-label={__("Edit")}
									className="fas fa-pencil-alt fa-fw"
								/>
							</button>
						)}
					/> */}

					</div>
				)}
			</div>
		</Fragment>
	);
}
