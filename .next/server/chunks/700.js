exports.id = 700;
exports.ids = [700];
exports.modules = {

/***/ 47676:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 37228:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 26821));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 73380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 47814))

/***/ }),

/***/ 35303:
/***/ (() => {



/***/ }),

/***/ 26821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15783);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47335);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var public_images_Original_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82800);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const Sidebar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 142).then(__webpack_require__.bind(__webpack_require__, 50142)), {
    loadableGenerated: {
        modules: [
            "D:\\Projects\\health-pacific-partners\\github\\src\\components\\navbar\\index.tsx -> " + "./sidebar"
        ]
    }
});
function Navbar() {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "px-4 py-2 flex items-center justify-start shadow-md md:shadow-lg z-10 sticky top-0 bg-white",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Sidebar, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-7/8 sm:w-1/4 md:w-1/4 lg:w-1/8 ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: _constants__WEBPACK_IMPORTED_MODULE_1__/* .HOME_ROUTE */ .e,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: public_images_Original_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                        alt: "logo",
                        width: 150,
                        height: 20,
                        className: "w-full hover:opacity-90",
                        priority: true
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden w-1/2 sm:w-1/4 md:block md:visible md:w-4/5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center grid grid-flow-row px-1 md:gap-9 md:grid-flow-col-dense",
                    id: "navbar-items",
                    children: _constants__WEBPACK_IMPORTED_MODULE_1__/* .OTHERS_ROUTES */ .x.map((route, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: route.path,
                                className: "tracking-normal px-3 text-xs hover:font-bold hover:underline hover:shadow-gray-400 sm:text-sm md:text-sm lg:text-xl lg:font-light",
                                children: route.name
                            })
                        }, index))
                })
            })
        ]
    });
}


/***/ }),

/***/ 15783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ HOME_ROUTE),
/* harmony export */   x: () => (/* binding */ OTHERS_ROUTES)
/* harmony export */ });
const OTHERS_ROUTES = [
    {
        name: "ABOUT US",
        path: "/about"
    },
    {
        name: "SECTORS",
        path: "/sectors"
    },
    {
        name: "OUR ACTIVITIES",
        path: "/activities"
    },
    {
        name: "OUR TEAM",
        path: "/team"
    },
    {
        name: "CONTACT",
        path: "/contact"
    }
];
const HOME_ROUTE = "/";


/***/ }),

/***/ 72414:
/***/ ((module) => {

// Exports
module.exports = {
	"footerContainer": "footer_footerContainer__NfX1h",
	"footerLabels": "footer_footerLabels__RlGVW",
	"footerCopyright": "footer_footerCopyright__UUz_m",
	"footerLogo": "footer_footerLogo__FA1tY"
};


/***/ }),

/***/ 39082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Roboto","arguments":[{"weight":"500","subsets":["latin","vietnamese"]}],"variableName":"roboto"}
var target_path_src_app_layout_tsx_import_Roboto_arguments_weight_500_subsets_latin_vietnamese_variableName_roboto_ = __webpack_require__(28799);
var target_path_src_app_layout_tsx_import_Roboto_arguments_weight_500_subsets_latin_vietnamese_variableName_roboto_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Roboto_arguments_weight_500_subsets_latin_vietnamese_variableName_roboto_);
;// CONCATENATED MODULE: ./src/components/content/index.tsx

function Content({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: "min-h-[61.25vh] sm:min-h-[69.2vh] md:min-h-[81vh] lg:min-h-[82vh]",
        children: children
    });
}

;// CONCATENATED MODULE: ./src/constants/index.ts
const OTHERS_ROUTES = [
    {
        name: "ABOUT US",
        path: "/about"
    },
    {
        name: "SECTORS",
        path: "/sectors"
    },
    {
        name: "OUR ACTIVITIES",
        path: "/activities"
    },
    {
        name: "OUR TEAM",
        path: "/team"
    },
    {
        name: "CONTACT",
        path: "/contact"
    }
];
const HOME_ROUTE = "/";

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/images/Original-on-Transparent.png
/* harmony default export */ const Original_on_Transparent = ({"src":"/_next/static/media/Original-on-Transparent.01b0ae9b.png","height":1582,"width":5000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAWUlEQVR42mNYXlgtfSwjWEbGJ59D3ztX1MQnR8DQO0cMiCWAWJyhsmqWAAMQpAdnyqp45xoCFWgAJaShCsQY4hpXKmQ1LDOOKp0ly6Djx2vqXyAClGBkgAIANjkYiGysmsEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
// EXTERNAL MODULE: ./src/components/footer/footer.module.scss
var footer_module = __webpack_require__(72414);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
;// CONCATENATED MODULE: ./src/components/footer/index.tsx







function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: `${(footer_module_default()).footerContainer} mt-6 mb-0 relative grid p-3 justify-items-center`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(footer_module_default()).footerLabels} grid grid-flow-row text-center gap-1 sm:grid-flow-col sm:gap-5 md:gap-6 md:content-center lg:w-2/3`,
                children: OTHERS_ROUTES.map((route, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-xs justify-items-start md:text-sx md:justify-items-center lg:text-base",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: route.path,
                            children: route.name
                        })
                    }, index))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(footer_module_default()).footerCopyright} mt-2 text-sm`,
                children: "Copyright \xa9 2023 All Rights Reserved"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(footer_module_default()).footerLogo} hidden right-0 relative mt-3 items-center sm:mt-0 sm:ml-auto sm:mr-0 sm:block md:grid md:justify-items-center lg:w-5/6`,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: HOME_ROUTE,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: Original_on_Transparent,
                        alt: "logo",
                        width: 1920,
                        height: 1080,
                        className: "hover:opacity-50 h-auto max-w-full",
                        priority: true
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/components/navbar/index.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\Projects\health-pacific-partners\github\src\components\navbar\index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const navbar = (__default__);
// EXTERNAL MODULE: ./src/app/main.scss
var main = __webpack_require__(86324);
;// CONCATENATED MODULE: ./src/app/layout.tsx






const metadata = {
    viewport: {
        width: "device-width",
        initialScale: 1
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        className: (target_path_src_app_layout_tsx_import_Roboto_arguments_weight_500_subsets_latin_vietnamese_variableName_roboto_default()).className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "icon",
                    href: "/images/favicon.ico",
                    sizes: "any"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 88924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "Loading..."
    });
}


/***/ }),

/***/ 47814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Original-on-Transparent.01b0ae9b.png","height":1582,"width":5000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAWUlEQVR42mNYXlgtfSwjWEbGJ59D3ztX1MQnR8DQO0cMiCWAWJyhsmqWAAMQpAdnyqp45xoCFWgAJaShCsQY4hpXKmQ1LDOOKp0ly6Djx2vqXyAClGBkgAIANjkYiGysmsEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 82800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Original.1f0d629f.png","height":1169,"width":3549,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAQklEQVR42jXLSQ6AQAgFUe5/UqO2xjB8EEyLC2v1NkV3RAhXFdybBqh9JCDmUyq6rPs4TpamAU6G2MbFYpnZy/x7ASsFRYYHrZfCAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 86324:
/***/ (() => {



/***/ })

};
;