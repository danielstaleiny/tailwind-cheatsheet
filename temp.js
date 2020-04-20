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
    // container, this modifies defaults, it doesn't create classes
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

const gen = (prefix, data, fn = (n, v) => v) =>
    Object.entries(data)
        .map(([name, value]) => {
            if (typeof value === 'object') {
                return Object.entries(value).map(([name2, value2]) => {
                    return {
                        [`.${prefix}${
                            name2 == 'default'
                                ? `-${name}`
                                : prefix != ''
                                ? '-' + name + '-' + name2
                                : name
                        }`]: fn(name, value2),
                    }
                })
            } else {
                return {
                    [`.${prefix}${
                        name == 'default'
                            ? ''
                            : prefix != ''
                            ? '-' + name
                            : name
                    }`]: fn(name, value),
                }
            }
        })
        .reduce((acc, val) => acc.concat(val), [])

const container_ = gen('', {
    container: `None 	width: 100%;
sm (640px) 	max-width: 640px;
md (768px) 	max-width: 768px;
lg (1024px) 	max-width: 1024px;
xl (1280px) 	max-width: 1280px;`,
})

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

const clear_ = gen('clear', {
    left: 'clear: left',
    right: 'clear: right',
    both: 'clear: both',
})

const objectfit_ = gen('object', {
    contain: 'object-fit: contain',
    cover: 'object-fit: cover',
    fill: 'object-fit: fill',
    none: 'object-fit: none',
    'scale-down': 'object-fit: scale-down',
})

const objectposition_ = gen(
    'object',
    objectPosition,
    (n, v) => `object-position: ${v}`
)

const overflow_ = gen('overflow', {
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

const zindex_ = gen('z', zIndex, (n, v) => `z-index: ${v}`)

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

// return {
//     container: container_,
//     'box-sizing': boxsizing_,
//     display: display_,
//     float: float_,
//     clear: clear_,
//     'object-fit': objectfit_,
//     'object-position': objectposition_,
//     overflow: overflow_,
//     position: position_,
//     'top,right,bottom,left': trbl_,
//     visibility: visibility_,
//     'z-index': zindex_,
// }

// Flexbox

const displayflex_ = gen('', {
    flex: 'display: flex',
    'inline-flex': 'display: inline-flex',
})

const flexdirection_ = gen('flex', {
    row: 'flex-direction: row',
    'row-reverse': 'flex-direction: row-reverse',
    col: 'flex-direction: column',
    'col-reverse': 'flex-direction: column-reverse',
})

const flexwrap_ = gen('flex', {
    'no-wrap': 'flex-wrap: nowrap',
    wrap: 'flex-wrap: wrap',
    'wrap-reverse': 'flex-wrap: wrap-reverse',
})

const alignitems_ = gen('items', {
    stretch: 'align-items: stretch',
    start: 'align-items: flex-start',
    center: 'align-items: center',
    end: 'align-items: flex-end',
    baseline: 'align-items: baseline',
})

const aligncontent_ = gen('content', {
    start: 'align-content: flex-start',
    center: 'align-content: center',
    end: 'align-content: flex-end',
    between: 'align-content: space-between',
    around: 'align-content: space-around',
})

const alignself_ = gen('self', {
    auto: 'align-self: auto',
    start: 'align-self: flex-start',
    center: 'align-self: center',
    end: 'align-self: flex-end',
    stretch: 'align-self: stretch',
})

const justifycontent_ = gen('justify', {
    start: 'justify-content: flex-start',
    center: 'justify-content: center',
    end: 'justify-content: flex-end',
    between: 'justify-content: stretch',
    around: 'justify-content: stretch',
})

const flex_ = gen('flex', flex, (n, v) => `flex: ${v}`)

const flexgrow_ = gen('flex-grow', flexGrow, (n, v) => `flex-grow: ${v}`)

const flexshrink_ = gen(
    'flex-shrink',
    flexShrink,
    (n, v) => `flex-shrink: ${v}`
)

const order_ = gen('order', order, (n, v) => `order: ${v}`)

// Flexbox
// console.log(displayflex_)
// console.log(flexdirection_)
// console.log(flexwrap_)
// console.log(alignitems_)
// console.log(aligncontent_)
// console.log(alignself_)
// console.log(justifycontent_)
// console.log(flex_)
// console.log(flexgrow_)
// console.log(flexshrink_)
// console.log(order_)

// return {
//     display: displayflex_,
//     'flex-direction': flexdirection_,
//     'flex-wrap': flexwrap_,
//     'align-items': alignitems_,
//     'align-content': aligncontent_,
//     'align-self': alignself_,
//     'justify-content': justifycontent_,
//     flex: flex_,
//     'flex-grow': flexgrow_,
//     'flex-shrink': flexshrink_,
//     order: order_,
// }

// Grid
const gridtemplatecolumn_ = gen(
    'grid-cols',
    gridTemplateColumns,
    (n, v) => `grid-template-columns: ${v}`
)

const gridcolumn_ = gen('col', gridColumn, (n, v) => `grid-column: ${v}`)

const gridcolumnstart_ = gen(
    'col-start',
    gridColumnStart,
    (n, v) => `grid-column-start: ${v}`
)
const gridcolumnend_ = gen(
    'col-end',
    gridColumnEnd,
    (n, v) => `grid-column-end: ${v}`
)

const gridtemplate_ = gen(
    'grid-rows',
    gridTemplateRows,
    (n, v) => `grid-template-rows: ${v}`
)

const gridrow_ = gen('row', gridRow, (n, v) => `grid-row: ${v}`)

const gridrowstart_ = gen(
    'row-start',
    gridRowStart,
    (n, v) => `grid-row-start: ${v}`
)
const gridrowend_ = gen('row-end', gridRowEnd, (n, v) => `grid-row-end: ${v}`)

const gap_ = gen('gap', gap, (n, v) => `gap: ${v}`)

const gridflow_ = gen('grid-flow', {
    row: 'grid-auto-flow: row',
    col: 'grid-auto-flow: column',
    'row-dense': 'grid-auto-flow: row dense',
    'col-dense': 'grid-auto-flow: column dens',
})

// Grid
//
// console.log(gridtemplatecolumn_)
// console.log(gridcolumn_)
// console.log(gridcolumnstart_)
// console.log(gridcolumnend_)
// console.log(gridtemplate_)
// console.log(gridrow_)
// console.log(gap_)
// console.log(gridflow_)

// return {
//     'grid-tempate-columns': gridtemplatecolumn_,
//     'grid-column, start/end': {
//         ...gridcolumn_,
//         ...gridcolumnstart_,
//         ...gridcolumnend_,
//     },
//     'grid-temptale-rows': gridtemplate_,
//     'grid-row, start/end': { ...gridrow_, ...gridrowstart_, ...gridrowend_ },
//     gap: gap_,
//     'grid-auto-flow': gridflow_,
// }

//Spacing

const padding_ = gen('p', padding, (n, v) => `padding: ${v}`)
const paddingx_ = gen(
    'px',
    padding,
    (n, v) => `padding-right: ${v};
padding-left: ${v};`
)
const paddingy_ = gen(
    'py',
    padding,
    (n, v) => `padding-top: ${v};
padding-bottom: ${v};`
)
const paddingr_ = gen('pr', padding, (n, v) => `padding-right: ${v}`)
const paddingl_ = gen('pl', padding, (n, v) => `padding-left: ${v}`)
const paddingt_ = gen('pt', padding, (n, v) => `padding-top: ${v}`)
const paddingb_ = gen('pb', padding, (n, v) => `padding-bottom: ${v}`)

const margin_ = gen('m', margin, (n, v) => `margin: ${v}`)
const marginx_ = gen(
    'mx',
    margin,
    (n, v) => `margin-right: ${v};
margin-left: ${v};`
)
const marginy_ = gen(
    'my',
    margin,
    (n, v) => `padding-top: ${v};
margin-bottom: ${v};`
)
const marginr_ = gen('mr', margin, (n, v) => `margin-right: ${v}`)
const marginl_ = gen('ml', margin, (n, v) => `margin-left: ${v}`)
const margint_ = gen('mt', margin, (n, v) => `margin-top: ${v}`)
const marginb_ = gen('mb', margin, (n, v) => `margin-bottom: ${v}`)
const marginrminus_ = gen('-mr', margin, (n, v) => `margin-right: -${v}`)
const marginlminus_ = gen('-ml', margin, (n, v) => `margin-left: -${v}`)
const margintminus_ = gen('-mt', margin, (n, v) => `margin-top: -${v}`)
const marginbminus_ = gen('-mb', margin, (n, v) => `margin-bottom: -${v}`)

// Spacing
// return {
//     padding: {
//         ...padding_,
//         ...paddingx_,
//         ...paddingy_,
//         ...paddingr_,
//         ...paddingl_,
//         ...paddingt_,
//         ...paddingb_,
//     },
//     margin: {
//         ...margin_,
//         ...marginx_,
//         ...marginy_,
//         ...marginr_,
//         ...marginl_,
//         ...margint_,
//         ...marginb_,
//         ...marginrminus_,
//         ...marginlminus_,
//         ...margintminus_,
//         ...marginbminus_,
//     },
// }

// Sizing
const width_ = gen('w', width, (n, v) => `width: ${v}`)
const minwidth_ = gen('min-w', minWidth, (n, v) => `min-width: ${v}`)
const maxwidth_ = gen('max-w', maxWidth, (n, v) => `max-width: ${v}`)
const height_ = gen('h', height, (n, v) => `height: ${v}`)
const minheight_ = gen('min-h', minHeight, (n, v) => `min-height: ${v}`)
const maxheight_ = gen('max-h', maxHeight, (n, v) => `max-height: ${v}`)

// return {
//     width: width_,
//     'min-width': minwidth_,
//     'max-width': maxwidth_,
//     height: height_,
//     'min-height': minheight_,
//     'max-height': maxheight_,
// }

// TYPOGRAPHY

const color_ = gen('text', colors, (n, v) => `color: ${v}`)
const fontfamily_ = Object.entries(fontFamily).map(([name, value]) => {
    return {
        [`font-${name}`]: `font-family: ${value.join(', ')}`,
    }
})
const fontsize_ = gen('text', fontSize, (n, v) => `font-size: ${v}`)

const fontsmoothing_ = gen('', {
    antialiased: `-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;`,
    'subpixel-antialiased': `-webkit-font-smoothing: auto;
-moz-osx-font-smoothing: auto;`,
})

const fontstyle_ = gen('', {
    italic: 'font-style: italic',
    'not-italic': 'font-style: normal',
})

const fontweight_ = gen('font', fontWeight, (n, v) => `font-weight: ${v}`)

const letterspacing_ = gen(
    'tracking',
    letterSpacing,
    (n, v) => `letter-spacing: ${v}`
)

const lineheight_ = gen('leading', lineHeight, (n, v) => `line-height: ${v}`)

const liststyletype_ = gen('list', {
    none: 'list-style-type: none',
    disc: 'list-style-type: disc',
    decimal: 'list-style-type: decimal',
})

const liststyleposition_ = gen('list', {
    inside: 'list-style-position: inside',
    outside: 'list-style-position: outside',
})

const placeholdercolor_ = gen(
    'placeholder',
    placeholderColor,
    (n, v) => `color: ${v}`
)

const textalign_ = gen(
    'text',
    { left: 'left', center: 'center', right: 'right', justify: 'jutify' },
    (n, v) => `text-align: ${v}`
)

const textdecoration_ = gen(
    '',
    {
        underline: 'underline',
        'line-through': 'line-through',
        'no-underline': 'none',
    },
    (n, v) => `text-decoration: ${v}`
)

const texttransformation_ = gen(
    '',
    {
        uppercase: 'uppercase',
        lowercase: 'lowercase',
        capitalize: 'capitalize',
        'normal-case': 'none',
    },
    (n, v) => `text-transform: ${v}`
)

const verticalalign_ = gen(
    'align',
    {
        baseline: 'baseline',
        top: 'top',
        middle: 'middle',
        bottom: 'bottom',
        'text-top': 'text-top',
        'text-bottom': 'text-bottom',
    },
    (n, v) => `vertical-align: ${v}`
)

const whitespace_ = gen(
    'whitespace',
    {
        normal: 'normal',
        'no-wrap': 'no-wrap',
        pre: 'pre',
        'pre-line': 'pre-line',
        'pre-wrap': 'pre-wrap',
    },
    (n, v) => `white-space: ${v}`
)

const wordbreak_ = gen('', {
    'break-normal': `overflow-wrap: normal;
word-break: normal;`,
    'break-words': 'overflow-wrap: break-word;',
    'break-all': 'word-break: break-all;',
    truncate: `overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;`,
})

// fontWeight,

return {
    color: color_,
    'font-family': fontfamily_,
    'font-size': fontsize_,
    'font-smoothing': fontsmoothing_,
    'font-style': fontstyle_,
    'font-weight': fontweight_,
    'letter-spacing': letterspacing_,
    'line-height': lineheight_,
    'list-style-type': liststyletype_,
    'list-style-position': liststyleposition_,
    '::placeholder color': placeholdercolor_,
    'text-align': textalign_,
    'text-decoration': textdecoration_,
    'text-transform': texttransformation_,
    'vertical-align': verticalalign_,
    'white-space': whitespace_,
    'word-break': wordbreak_,
}

// console.log(color_)

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
