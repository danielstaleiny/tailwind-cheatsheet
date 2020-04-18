const resolve = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./pages/assets/css/tailwind.config.js')
const config = resolve(tailwindConfig)

// console.log(config.prefix)
// console.log(config.important)
// console.log(config.separator)
// console.log(config.corePlugins)
// console.log(config.plugins)

const {
    screens,
    colors,
    spacing,
    backgroundColor,
    backgroundPosition,
    backgroundSize,
    borderColor,
    borderRadius,
    borderWidth,
    boxShadow,
    container,
    cursor,
    fill,
    flex,
    flexGrow,
    flexShrink,
    fontFamily,
    fontSize,
    fontWeight,
    height,
    inset,
    letterSpacing,
    lineHeight,
    listStyleType,
    margin,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    objectPosition,
    opacity,
    order,
    padding,
    stroke,
    textColor,
    width,
    zIndex,
    placeholderColor,
    strokeWidth,
    gap,
    gridTemplateColumns,
    gridColumn,
    gridColumnStart,
    gridColumnEnd,
    gridTemplateRows,
    gridRow,
    gridRowStart,
    gridRowEnd,
    transformOrigin,
    scale,
    rotate,
    translate,
    skew,
    transitionProperty,
    transitionTimingFunction,
    transitionDuration,
} = config.theme

// Layout
const breakpoint_names = Object.keys(screens)
const breakpoint = Object.entries(screens).map(([name, value]) => {
    return {
        [`${name}`]:
            value && value.raw
                ? value.raw
                : `@media (min-width: ${value}) { ... }`,
    }
})

const gen = (prefix, data) =>
    Object.entries(data).map(([name, value]) => {
        return { [`.${prefix}${name}`]: value }
    })

const container_ = gen('container-', container)

const boxsizing_ = gen('', {
    'box-border': 'box-sizing: border-box',
    'box-content': 'box-sizing: content-box',
})

const display_ = gen('', {
    hidden: 'display: none',
    block: 'display: block',
    'inline-block': 'display: inline-block',
    flex: 'display: flex',
    'inline-flex': 'display: inline-flex',
    inline: 'display: inline',
    table: 'display: table',
    'table-cell': 'display: table-cell',
    'table-caption': 'display: table-caption',
    'table-column': 'display: table-column',
    'table-column-group': 'display: table-column-group',
    'table-footer-group': 'display: table-footer-group',
})

const float_ = gen('', {
    'float-right': 'float: right',
    'float-left': 'float: left',
    'float-none': 'float: none',
    clearfix: `&::after {
  content: "";
  display: table;
  clear: both;
}`,
})

const clear_ = gen('clear-', {
    left: 'clear: left',
    right: 'clear: right',
    both: 'clear: both',
})

const objectfit_ = gen('object-', {
    contain: 'object-fit: contain',
    cover: 'object-fit: cover',
    fill: 'object-fit: fill',
    none: 'object-fit: none',
    'scale-down': 'object-fit: scale-down',
})

const objectposition_ = gen('object-', objectPosition)

const overflow_ = gen('overflow-', {
    auto: 'overflow: auto',
    'x-auto': 'overflow-x: auto',
    'y-auto': 'overflow-y: auto',
    hidden: 'overflow: hidden',
    'x-hidden': 'overflow-x: hidden',
    'y-hidden': 'overflow-y: hidden',
    visible: 'overflow: visible',
    'x-visible': 'overflow-x: visible',
    'y-visible': 'overflow-y: visible',
    scroll: 'overflow: scroll',
    'x-scroll': 'overflow-x: scroll',
    'y-scroll': 'overflow-y: scroll',
})

const position_ = gen('', {
    static: 'position: static',
    fixed: 'position: fixed',
    absolute: 'position: absolute',
    relative: 'position: relative',
    sticky: 'position: sticky',
})

const trbl_ = gen('', {
    'inset-0': `
	top: 0;
right: 0;
bottom: 0;
left: 0;`,
    'inset-y-0': `top: 0;
bottom: 0;`,
    'inset-x-0': `right: 0;
left: 0;`,
    'top-0': 'top: 0',
    'right-0': 'right: 0',
    'bottom-0': 'bottom: 0',
    'left-0': 'left: 0',
    'inset-auto': `top: auto;
right: auto;
bottom: auto;
left: auto;`,
    'inset-y-auto': `top: auto;
bottom: auto;`,
    'inset-x-auto': `right: auto;
left: auto;`,
    'top-auto': 'top: auto',
    'right-auto': 'right: auto',
    'bottom-auto': 'bottom: auto',
    'left-auto': 'left: auto',
})

const visibility_ = gen('', {
    visible: 'visibility: visible',
    invisible: 'visibility: hidden',
})

const zindex_ = gen('z-', zIndex)

// console.log(breakpoint_names)

// Layout
// console.log(breakpoint)
//
// console.log(container_)
// console.log(boxsizing_)
// console.log(display_)
// console.log(float_)
// console.log(clear_)
// console.log(objectfit_)
// console.log(objectposition_)
// console.log(overflow_)
// console.log(position_)
// console.log(trbl_)
// console.log(visibility_)
// console.log(zindex_)

return {
    container: container_,
    'box-sizing': boxsizing_,
    display: display_,
    float: float_,
    clear: clear_,
    'object-fit': objectfit_,
    'object-position': objectposition_,
    overflow: overflow_,
    position: position_,
    'top,right,bottom,left': trbl_,
    visibility: visibility_,
    'z-index': zindex_,
}

// Flexbox
//
// console.log(zindex_)

// .font-{name}
// const font = gen('font', fontSize)
// const font2 = gen('font', fontWeight)
//     // textColor,
// const text = gen('text', textColor)
// console.log(font, font2)

// .text-{size}
// .font-{weight}
// .leading-{size}
// .tracking-{size}
// .text-{color}
// .bg-{color}
// .bg-{size}
// .border{-side?}{-width?}
// .border-{color}
// .rounded{-side?}{-size?}
// .w-{size}
// .h-{size}
// .min-w-{size}
// .min-h-{size}
// .max-w-{size}
// .max-h-{size}
// .p{side?}-{size}
// .m{side?}-{size}
// .-m{side?}-{size}
// .shadow-{size?}
// .z-{index}
// .opacity-{name}
// .fill-{name}
// .stroke-{name}

// console.log(Object.keys(themes))
const variants = config.variants

// Object.entries(themes)
//     .filter((val, index) => (index > 1 ? false : true))
//     .map(([name, theme]) => {
//         if (typeof theme === 'object') {
//             Object.entries(theme).map(([variable, value]) => {
//                 if (typeof value === 'object') {
//                     Object.entries(value).map(([parameter, paramvalue]) => {
//                         console.log(
//                             `TODO ${name}-${variable}-${parameter}: ${paramvalue}`
//                         )
//                     })
//                 } else console.log(`TODO ${name}-${variable}: ${value}`)
//             })
//         }
//         return
//     })
