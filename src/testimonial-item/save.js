import {useBlockProps, RichText} from '@wordpress/block-editor';

export default function Save({attributes}) {
	const {name, message, url, alt, id} = attributes;
	return (
		<div { ...useBlockProps.save() }>
			{ url && <img src={ url } className={ id ? `wp-image-${id} testimonial-media` : null` testimonial-media` }
				alt={ alt } /> }
			<div className="testimonial-info">
				<RichText.Content tagName="h4" value={ name } />
				<RichText.Content tagName="p" value={ message } />
			</div>
		</div>
	);
}
