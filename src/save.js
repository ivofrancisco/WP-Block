import {__} from '@wordpress/i18n';
import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';

export default function save() {
	return (
		<div
			{ ...useBlockProps.save() }
		>
			<InnerBlocks.Content />
		</div>
	);
}
