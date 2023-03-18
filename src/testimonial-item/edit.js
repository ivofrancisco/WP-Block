import {useState, useEffect, useRef} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls
} from '@wordpress/block-editor';
import {isBlobURL, revokeBlobURL} from '@wordpress/blob';
import {Spinner, withNotices, ToolbarButton, PanelBody, TextareaControl} from '@wordpress/components';
import {usePrevious} from "@wordpress/compose";

function Edit({attributes, setAttributes, noticeOperations, noticeUI}) {
	const {name, message, url, id, alt} = attributes;
	const [blobURL, setBlobURL] = useState();
	const titleRef = useRef({});
	const prevURL = usePrevious(url);

	const onChangeName = (newName) => {
		setAttributes({name: newName});
	}
	const onChangeMessage = (newMessage) => {
		setAttributes({message: newMessage});
	}

	const onSelectImage = (image) => {
		if (!image || !image.url) {
			setAttributes({url: undefined, id: undefined, alt: ''});
			return;
		}
		setAttributes({url: image.url, id: image.id, alt: image.alt})
	}

	const onChangeAltText = (newAltText) => {
		setAttributes({alt: newAltText})
	}

	const removeImage = () => {
		setAttributes({url: undefined, id: undefined, alt: ''})
	}
	const onUploadError = (warning) => {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice(warning);
	}

	useEffect(() => {
		if (!id && isBlobURL(url)) {
			setAttributes({url: undefined, alt: ''})
		}
	}, [])

	useEffect(() => {
		if (isBlobURL(url)) {
			setBlobURL(url);
		} else {
			revokeBlobURL(blobURL);
			setBlobURL(undefined);
		}
	}, [url, blobURL])

	useEffect(() => {
		if (url && !prevURL) {
			titleRef.current.focus();
		}
	}, [url, prevURL])


	return (
		<>
			<InspectorControls>
				<PanelBody title={ __('Image Settings', 'if-testimonials') }>
					{ url && !isBlobURL(url) &&
						<TextareaControl
							label={ __('Alternative Text', 'if-testimonials') }
							value={ alt }
							onChange={ onChangeAltText } help={ __(
							"Alternative text describes your image to people who can't see it.",
							'if-testimonials'
						) } />
					}
				</PanelBody>
			</InspectorControls>
			{ url &&
				<BlockControls group='inline'>
					<MediaReplaceFlow
						name={ __('Replace Image', 'if-testimonials') }
						onSelect={ onSelectImage }
						onError={ onUploadError }
						accept="image/*"
						allowedTypes={ ['image'] }
						disableMediaButtons={ url }
						mediaId={ id }
						mediaURL={ url }
					/>
					<ToolbarButton onClick={ removeImage }>{ __('Remove Image', 'if-testimonials') }</ToolbarButton>
				</BlockControls>
			}
			<div { ...useBlockProps() }>
				<div className="testimonial-media">
					{ url && (
						<div
							className={ `wp-block-if-blocks-if-testimonials-img${
								isBlobURL(url) ? ' is-loading' : ''
							}` }
						>
							<img src={ url } alt={ alt } />
							{ isBlobURL(url) && <Spinner /> }
						</div>
					) }
					<MediaPlaceholder
						labels={ {
							title: __('Client\'s Photo', 'if-testimonials'),
							instructions: 'Upload testimonial item related photo.'
						} }
						icon={ <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
							width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
							preserveAspectRatio="xMidYMid meet">

							<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
								fill="#000000" stroke="none">
								<path d="M2405 5114 c-272 -30 -441 -100 -586 -244 -193 -191 -269 -426 -285
							-880 -12 -313 31 -540 144 -765 246 -494 727 -718 1183 -552 328 119 596 450
							689 852 34 148 43 268 36 463 -16 456 -92 691 -285 882 -123 122 -261 190
							-458 226 -86 15 -359 26 -438 18z" />
								<path d="M1845 2490 c-482 -104 -733 -215 -914 -405 -124 -130 -200 -289 -247
							-515 -35 -171 -52 -351 -65 -682 -12 -343 -18 -318 89 -420 271 -259 802 -418
							1522 -458 992 -54 1829 121 2182 458 106 101 101 76 89 415 -11 287 -22 436
							-42 567 -98 631 -384 877 -1212 1046 l-120 24 -39 -36 c-129 -116 -306 -175
							-528 -175 -135 0 -219 15 -333 57 -73 28 -167 86 -206 128 -29 31 -14 31 -176
							-4z" />
							</g>
						</svg>
						}
						onSelect={ onSelectImage }
						onError={ onUploadError }
						accept="image/*"
						allowedTypes={ ['image'] }
						disableMediaButtons={ url }
						notices={ noticeUI }
					/>
				</div>
				<div className="testimonial-info">
					<RichText
						ref={ titleRef }
						placeholder={ __('Client\'s Name', 'if-testimonials') }
						tagName="h4"
						onChange={ onChangeName }
						value={ name }
						allowedFormats={ [] }
					/>
					<RichText
						placeholder={ __('Testimonial', 'if-testimonials') }
						tagName="p"
						onChange={ onChangeMessage }
						value={ message }
						allowedFormats={ [] }
					/>
				</div>
			</div>
		</>
	);
}

export default withNotices(Edit)
