import { __ } from "@wordpress/i18n";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";

import classnames from "classnames";

export default function Edit(props) {
	const {
		className,
		setAttributes,
		attributes: { autoTransition, navArrows, dots },
	} = props;

	const classNames = classnames("custom-carousel", className);

	return (
		<Fragment>
			<InspectorControls key="inspector">
				<PanelBody title={__("Carousel Settings")} initialOpen={true}>
					<ToggleControl
						checked={autoTransition}
						label={__("Auto Transition")}
						onChange={(value) => setAttributes({ autoTransition: value })}
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
			<div className={classNames}>
				<p>Custom Slider content will go here!</p>
			</div>
		</Fragment>
	);
}
