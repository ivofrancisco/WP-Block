import {__} from '@wordpress/i18n';
import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps({
			className: 'purple-background'
		}) } >
			<InnerBlocks
				allowedBlocks={ ['if-blocks/testimonial-item'] }
				orientation="vertical"
				template={ [
					['if-blocks/testimonial-item'],
					['if-blocks/testimonial-item'],
				] }
				// templateLock="all"
			/>
		</div>
	);
}
