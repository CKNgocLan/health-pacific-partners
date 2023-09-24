"use strict";
exports.id = 142;
exports.ids = [142];
exports.modules = {

/***/ 50142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15783);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47335);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_images_Original_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82800);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const MenuIcon = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(207), __webpack_require__.e(55)]).then(__webpack_require__.bind(__webpack_require__, 85055)), {
    loadableGenerated: {
        modules: [
            "D:\\Projects\\health-pacific-partners\\github\\src\\components\\navbar\\sidebar.tsx -> " + "@mui/icons-material/Menu"
        ]
    }
});
const SwipeableDrawer = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(207), __webpack_require__.e(479)]).then(__webpack_require__.bind(__webpack_require__, 65479)), {
    loadableGenerated: {
        modules: [
            "D:\\Projects\\health-pacific-partners\\github\\src\\components\\navbar\\sidebar.tsx -> " + "@mui/material/SwipeableDrawer"
        ]
    }
});
const Link = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 11440, 23)), {
    loadableGenerated: {
        modules: [
            "D:\\Projects\\health-pacific-partners\\github\\src\\components\\navbar\\sidebar.tsx -> " + "next/link"
        ]
    }
});
const Image = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 52451, 23)), {
    loadableGenerated: {
        modules: [
            "D:\\Projects\\health-pacific-partners\\github\\src\\components\\navbar\\sidebar.tsx -> " + "next/image"
        ]
    }
});
function Sidebar() {
    const [isToggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
        left: false
    });
    const toggleDrawer = (anchor, open)=>(event)=>{
            if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
                return;
            }
            setToggle({
                ...isToggle,
                [anchor]: open
            });
        };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-1/8 flex justify-start items-center md:hidden",
                onClick: toggleDrawer("left", true),
                onKeyDown: toggleDrawer("left", true),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuIcon, {
                    fontSize: "large"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SwipeableDrawer, {
                sx: {
                    width: 300
                },
                anchor: "left",
                open: isToggle["left"],
                onClose: toggleDrawer("left", false),
                onOpen: toggleDrawer("left", true),
                disableBackdropTransition: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "bg-white",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "p-4",
                            onClick: toggleDrawer("left", false),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Link, {
                                href: _constants__WEBPACK_IMPORTED_MODULE_1__/* .HOME_ROUTE */ .e,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
                                    src: public_images_Original_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                    alt: "logo",
                                    width: 300,
                                    height: 24,
                                    className: "hover:opacity-90",
                                    priority: true
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "pb-4 px-8",
                            onClick: toggleDrawer("left", false),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Link, {
                                href: _constants__WEBPACK_IMPORTED_MODULE_1__/* .HOME_ROUTE */ .e,
                                children: "HOME"
                            })
                        }),
                        _constants__WEBPACK_IMPORTED_MODULE_1__/* .OTHERS_ROUTES */ .x.map((route, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "py-4 px-8",
                                onClick: toggleDrawer("left", false),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Link, {
                                    href: route.path,
                                    children: route.name
                                })
                            }, index))
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;