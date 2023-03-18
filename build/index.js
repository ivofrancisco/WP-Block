/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");




function Edit() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'purple-background'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: ['if-blocks/testimonial-item'],
    orientation: "vertical",
    template: [['if-blocks/testimonial-item'], ['if-blocks/testimonial-item']]
    // templateLock="all"
  }));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _testimonial_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonial-item */ "./src/testimonial-item/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/save.js");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('if-blocks/if-testimonials', {
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      width: "512.000000pt",
      height: "512.000000pt",
      viewBox: "0 0 512.000000 512.000000",
      preserveAspectRatio: "xMidYMid meet"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
      fill: "#000000",
      stroke: "none"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M300 4904 c-115 -31 -213 -112 -267 -223 l-28 -56 0 -1280 0 -1280 28 -58 c54 -110 171 -200 295 -226 29 -6 129 -11 221 -11 l169 0 112 -452 c77 -310 120 -464 136 -489 45 -72 149 -87 215 -32 17 14 206 239 421 500 l391 473 208 0 208 0 3 -347 3 -348 27 -50 c32 -62 103 -129 166 -158 46 -22 60 -22 606 -27 l560 -5 251 -305 c167 -202 263 -311 286 -322 67 -35 154 -13 194 48 11 17 49 146 88 306 l69 275 96 5 c78 4 109 10 160 33 71 32 133 93 165 163 22 47 22 48 22 872 0 791 -1 827 -19 875 -26 65 -103 147 -169 176 -52 24 -55 24 -484 27 l-433 3 0 747 c0 448 -4 775 -10 817 -14 94 -48 164 -115 234 -57 60 -131 103 -206 120 -29 7 -611 10 -1679 10 -1407 0 -1643 -2 -1690 -15z m3338 -310 c55 -38 52 24 52 -1244 0 -989 -2 -1176 -14 -1205 -29 -68 18 -65 -927 -65 -837 0 -853 0 -893 -20 -32 -16 -111 -106 -366 -415 l-325 -395 -92 367 c-55 218 -100 377 -111 392 -10 14 -31 34 -46 45 -26 20 -45 21 -293 26 l-265 5 -29 33 -29 32 0 1196 0 1196 34 34 34 34 1624 0 c1455 0 1626 -2 1646 -16z m1162 -2678 l0 -765 -154 -3 c-222 -4 -224 -7 -294 -282 l-48 -189 -95 114 c-52 63 -133 161 -181 219 -48 58 -97 112 -110 120 -20 13 -111 16 -613 20 l-590 5 -3 308 -2 307 443 0 c256 0 467 4 498 10 176 33 313 177 339 357 5 37 10 175 10 306 l0 237 400 0 400 0 0 -764z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M1910 4268 c-33 -22 -82 -112 -262 -479 -2 -4 -115 -23 -252 -43 -162 -24 -258 -42 -278 -54 -64 -38 -90 -130 -55 -198 8 -16 95 -107 192 -202 l175 -171 -40 -233 c-22 -128 -40 -248 -40 -266 0 -89 94 -163 182 -143 18 4 128 58 244 119 116 62 214 112 217 112 2 0 105 -52 227 -117 189 -99 229 -116 266 -115 62 0 104 28 133 85 l24 48 -42 242 c-23 133 -41 249 -41 258 0 9 83 97 184 195 157 153 185 184 191 217 14 75 -15 141 -77 173 -24 13 -452 83 -505 84 -7 0 -61 100 -121 223 -127 258 -143 279 -229 285 -48 3 -64 0 -93 -20z m235 -746 c29 -23 75 -34 213 -52 50 -7 92 -16 92 -20 0 -4 -40 -44 -89 -89 -131 -119 -137 -140 -101 -336 11 -60 20 -110 20 -112 0 -2 -56 26 -125 62 -85 44 -137 65 -161 65 -23 0 -76 -21 -159 -65 -69 -35 -125 -59 -125 -54 0 6 10 67 21 136 28 166 27 171 -101 298 l-100 99 139 22 c100 15 147 27 169 42 20 15 49 62 92 149 l62 128 64 -126 c34 -70 75 -136 89 -147z"
    })))
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function save() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/testimonial-item/edit.js":
/*!**************************************!*\
  !*** ./src/testimonial-item/edit.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);







function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    noticeOperations,
    noticeUI
  } = _ref;
  const {
    name,
    message,
    url,
    id,
    alt
  } = attributes;
  const [blobURL, setBlobURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const titleRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const prevURL = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.usePrevious)(url);
  const onChangeName = newName => {
    setAttributes({
      name: newName
    });
  };
  const onChangeMessage = newMessage => {
    setAttributes({
      message: newMessage
    });
  };
  const onSelectImage = image => {
    if (!image || !image.url) {
      setAttributes({
        url: undefined,
        id: undefined,
        alt: ''
      });
      return;
    }
    setAttributes({
      url: image.url,
      id: image.id,
      alt: image.alt
    });
  };
  const onChangeAltText = newAltText => {
    setAttributes({
      alt: newAltText
    });
  };
  const removeImage = () => {
    setAttributes({
      url: undefined,
      id: undefined,
      alt: ''
    });
  };
  const onUploadError = warning => {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(warning);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!id && (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(url)) {
      setAttributes({
        url: undefined,
        alt: ''
      });
    }
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(url)) {
      setBlobURL(url);
    } else {
      (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.revokeBlobURL)(blobURL);
      setBlobURL(undefined);
    }
  }, [url, blobURL]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (url && !prevURL) {
      titleRef.current.focus();
    }
  }, [url, prevURL]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image Settings', 'if-testimonials')
  }, url && !(0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(url) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alternative Text', 'if-testimonials'),
    value: alt,
    onChange: onChangeAltText,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alternative text describes your image to people who can't see it.", 'if-testimonials')
  }))), url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, {
    group: "inline"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaReplaceFlow, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace Image', 'if-testimonials'),
    onSelect: onSelectImage,
    onError: onUploadError,
    accept: "image/*",
    allowedTypes: ['image'],
    disableMediaButtons: url,
    mediaId: id,
    mediaURL: url
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    onClick: removeImage
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Image', 'if-testimonials'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "testimonial-media"
  }, url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wp-block-if-blocks-if-testimonials-img${(0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(url) ? ' is-loading' : ''}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    alt: alt
  }), (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(url) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
    labels: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Client\'s Photo', 'if-testimonials'),
      instructions: 'Upload testimonial item related photo.'
    },
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      width: "512.000000pt",
      height: "512.000000pt",
      viewBox: "0 0 512.000000 512.000000",
      preserveAspectRatio: "xMidYMid meet"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
      fill: "#000000",
      stroke: "none"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M2405 5114 c-272 -30 -441 -100 -586 -244 -193 -191 -269 -426 -285 -880 -12 -313 31 -540 144 -765 246 -494 727 -718 1183 -552 328 119 596 450 689 852 34 148 43 268 36 463 -16 456 -92 691 -285 882 -123 122 -261 190 -458 226 -86 15 -359 26 -438 18z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M1845 2490 c-482 -104 -733 -215 -914 -405 -124 -130 -200 -289 -247 -515 -35 -171 -52 -351 -65 -682 -12 -343 -18 -318 89 -420 271 -259 802 -418 1522 -458 992 -54 1829 121 2182 458 106 101 101 76 89 415 -11 287 -22 436 -42 567 -98 631 -384 877 -1212 1046 l-120 24 -39 -36 c-129 -116 -306 -175 -528 -175 -135 0 -219 15 -333 57 -73 28 -167 86 -206 128 -29 31 -14 31 -176 -4z"
    }))),
    onSelect: onSelectImage,
    onError: onUploadError,
    accept: "image/*",
    allowedTypes: ['image'],
    disableMediaButtons: url,
    notices: noticeUI
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "testimonial-info"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    ref: titleRef,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Client\'s Name', 'if-testimonials'),
    tagName: "h4",
    onChange: onChangeName,
    value: name,
    allowedFormats: []
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Testimonial', 'if-testimonials'),
    tagName: "p",
    onChange: onChangeMessage,
    value: message,
    allowedFormats: []
  }))));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withNotices)(Edit));

/***/ }),

/***/ "./src/testimonial-item/index.js":
/*!***************************************!*\
  !*** ./src/testimonial-item/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/testimonial-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/testimonial-item/save.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('if-blocks/testimonial-item', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('IF Testimonial Item', 'if-testimonials'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('A Testimonial Item', 'if-testimonials'),
  parent: ['if-blocks/if-testimonials'],
  supports: {
    reusable: false,
    html: false
  },
  attributes: {
    name: {
      type: 'string',
      source: 'html',
      selector: 'h4'
    },
    message: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    id: {
      type: 'number'
    },
    alt: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'alt',
      default: ''
    },
    url: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src'
    }
  },
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "512.000000pt",
    height: "512.000000pt",
    viewBox: "0 0 512.000000 512.000000",
    preserveAspectRatio: "xMidYMid meet"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
    fill: "#000000",
    stroke: "none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M412 5100 c-99 -26 -174 -71 -252 -149 -77 -79 -114 -142 -140 -247 -20 -75 -20 -116 -20 -1823 0 -1490 2 -1755 15 -1807 52 -223 229 -387 457 -424 38 -6 322 -10 723 -10 l660 0 290 -291 c160 -160 310 -304 334 -320 51 -33 96 -37 144 -13 18 9 169 153 337 320 l305 303 700 3 c645 3 704 5 755 22 148 49 266 145 332 272 72 137 68 7 68 1945 0 1709 0 1747 -20 1823 -26 103 -69 177 -149 256 -78 77 -142 113 -247 140 -76 20 -117 20 -2148 19 -2010 0 -2073 -1 -2144 -19z m4241 -296 c28 -10 65 -34 91 -60 83 -82 77 76 74 -1879 -3 -1675 -4 -1741 -22 -1775 -26 -49 -74 -98 -121 -123 -40 -22 -45 -22 -790 -27 -412 -3 -752 -7 -754 -8 -3 -1 -132 -129 -288 -284 l-283 -282 -283 282 c-156 155 -285 283 -288 284 -2 1 -341 5 -754 8 -745 5 -750 5 -790 27 -53 28 -99 78 -124 133 -20 45 -21 57 -21 1776 0 1944 -6 1788 75 1869 79 80 -112 73 2181 74 1856 1 2055 -1 2097 -15z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M2516 4310 c-16 -5 -40 -19 -54 -32 -14 -13 -108 -190 -209 -394 -178 -361 -184 -372 -216 -378 -17 -3 -192 -28 -387 -56 -195 -28 -373 -55 -394 -61 -51 -14 -91 -55 -107 -108 -23 -78 -7 -99 316 -413 160 -155 291 -289 293 -299 2 -9 -26 -189 -62 -400 -37 -210 -66 -398 -66 -418 0 -75 69 -141 148 -141 36 0 99 30 413 194 l370 195 369 -195 c314 -165 376 -194 412 -194 79 0 148 66 148 141 0 20 -29 208 -66 418 -36 211 -64 391 -62 400 2 10 134 144 293 299 304 296 333 332 321 396 -9 46 -41 93 -77 112 -20 10 -184 38 -433 75 -221 32 -404 59 -408 59 -4 0 -88 165 -188 367 -100 203 -193 380 -207 396 -15 15 -43 32 -62 37 -41 11 -46 11 -85 0z m175 -747 c120 -250 152 -303 189 -323 10 -5 143 -28 297 -50 153 -22 289 -43 302 -46 22 -5 1 -28 -197 -220 -176 -171 -223 -223 -232 -252 -8 -30 -1 -89 41 -331 27 -161 48 -296 45 -298 -3 -3 -123 57 -268 133 -226 119 -269 139 -308 139 -38 0 -84 -21 -308 -139 -145 -76 -265 -136 -268 -133 -3 2 18 137 45 298 42 242 49 301 41 331 -9 29 -56 81 -232 252 -196 191 -218 216 -197 220 13 3 137 21 274 41 138 20 265 38 284 42 66 11 90 47 226 327 71 146 132 266 135 266 3 0 62 -116 131 -257z"
  }))),
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/testimonial-item/save.js":
/*!**************************************!*\
  !*** ./src/testimonial-item/save.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function Save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    name,
    message,
    url,
    alt,
    id
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    className: id ? `wp-image-${id} testimonial-media` : null` testimonial-media`,
    alt: alt
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "testimonial-info"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h4",
    value: name
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: message
  })));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkif_testimonials"] = self["webpackChunkif_testimonials"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map