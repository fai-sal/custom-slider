/**
 * BLOCK: custom-slider
 *
 * Registering a basic block with Gutenberg.
 */

//  Import CSS.
import "./editor.scss";
import "./style.scss";

import Edit from "./edit";
import Save from "./save";

import metadata from "./block.json";

import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

const { name, attributes, description } = metadata;
/**
 * Registering  Block.
 */
registerBlockType(name, {
	title: __("Media Slider"),
	description,
	icon: "slides",
	category: "common",
	keywords: [__("Media slider")],
	edit: Edit,
	save: Save,
	attributes,
});
