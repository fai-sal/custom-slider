/**
 * internal dependencies
 */
import { __ } from "@wordpress/i18n";
import { PanelBody, ToggleControl } from "@wordpress/components";
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
		attributes: { sliderItems, autoPlay, navArrows, dots },
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
		autoPlay, navArrows, dots
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
					</PanelBody>
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
						<Slider slides={sliderItems} sliderSettings={sliderSettings} />
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
