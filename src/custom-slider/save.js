import classnames from "classnames";

export default function Save(props) {
	const {
		className,
		attributes: { autoTransition, navArrows, dots },
	} = props;

	const classNames = classnames("custom-carousel", className);
	return (
		<div className={classNames}>
			<p>Custom Slider content will go here</p>
		</div>
	);
}
