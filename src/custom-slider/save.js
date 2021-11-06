import classnames from "classnames";
import Slider from './slider-frontend';

export default function Save(props) {
	const {
		className,
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

	const sliderSettings = {
		autoPlay,
		navArrows,
		dots,
		numofSlides: sliderItems.length,
		interval: autoPlayInterval
	}
	const classNames = classnames("media-slider", className);
	return (
		<div className={classNames} data-settings={JSON.stringify(sliderSettings)}>
			{sliderItems.length === 0 ? (
				<div> Upload Media </div>
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
						}} />
				</div>
			)}

		</div>
	);
}
