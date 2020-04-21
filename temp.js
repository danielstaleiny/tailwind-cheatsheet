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
    // colors,
    // spacing,
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
                    [`.${name[0] === '-' ? '-' + prefix : prefix}${
                        name == 'default'
                            ? ''
                            : prefix != ''
                            ? name[0] === '-'
                                ? name
                                : '-' + name
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

const trbl_ = gen(
    'inset',
    inset,
    (n, v) => `top: ${v};
right: ${v};
bottom: ${v};
left: ${v};`
)
const trblx_ = gen(
    'inset-x',
    inset,
    (n, v) => `right: ${v};
left: ${v};`
)
const trbly_ = gen(
    'inset-y',
    inset,
    (n, v) => `top: ${v};
bottom: ${v};`
)

const visibility_ = gen('', {
    visible: 'visibility: visible',
    invisible: 'visibility: hidden',
})

const zindex_ = gen('z', zIndex, (n, v) => `z-index: ${v}`)

// console.log(breakpoint_names)

// Layout
// console.log(breakpoint)
//

const Layout = {
    container: {
        value: container_,
        desc:
            'Sets the max-width to match the min-width of the current breakpoint.',
    },
    'box-sizing': {
        value: boxsizing_,
        desc:
            'Sets how the total width and height of an element is calculated.',
    },
    display: {
        value: display_,
        desc: 'Sets the display box type of an element.',
    },
    float: {
        value: float_,
        desc:
            "Sets an element's placement to a side of its container and allows content to wrap around it.",
    },
    clear: {
        value: clear_,
        desc:
            'Sets whether an element is moved below preceding floated elements.',
    },
    'object-fit': {
        value: objectfit_,
        desc:
            'Sets how the content of a replaced element (img or video tag) should be resized.',
    },
    'object-position': {
        value: objectposition_,
        desc: 'Sets the alignment of the selected replaced element.',
    },
    overflow: {
        value: overflow_,
        desc: "Sets how to handle content that's too big for its container.",
    },
    position: { value: position_, desc: "Sets an element's position." },
    'top,right,bottom,left': {
        value: [...trbl_, ...trblx_, ...trbly_],
        desc: 'Sets the placement of a positioned element.',
    },
    visibility: {
        value: visibility_,
        desc: 'Show or hide without affecting the layout of the document.',
    },
    'z-index': {
        value: zindex_,
        desc: 'Sets the z-order ("stack order") of a positioned element.',
    },
}

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
const Flexbox = {
    display: {
        value: displayflex_,
        desc: 'Sets element to be a flex container.',
    },
    'flex-direction': {
        value: flexdirection_,
        desc: 'Sets direction of flex items.',
    },
    'flex-wrap': { value: flexwrap_, desc: 'Creates how flex items wrap.' },
    'align-items': {
        value: alignitems_,
        desc: "Sets flex items position along a contrainer's cross axis.",
    },
    'align-content': {
        value: aligncontent_,
        desc:
            'Controls how lines are positioned in multi-line flex containers.',
    },
    'align-self': {
        value: alignself_,
        desc:
            "Controls how an individual flex item is positioned along container's cross axis.",
    },
    'justify-content': {
        value: justifycontent_,
        desc:
            "Controls how flex items are positioned along container's main axis.",
    },
    flex: { value: flex_, desc: 'Controls how flex items grow and shrink.' },
    'flex-grow': { value: flexgrow_, desc: 'Controls how flex items grow.' },
    'flex-shrink': {
        value: flexshrink_,
        desc: 'Controls how flex items shrink.',
    },
    order: { value: order_, desc: 'Controls how flex items are ordered.' },
}

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

const Grid = {
    'grid-tempate-columns': {
        value: gridtemplatecolumn_,
        desc: 'Defines columns for grid layout.',
    },
    'grid-column, start/end': {
        value: [...gridcolumn_, ...gridcolumnstart_, ...gridcolumnend_],
        desc: 'Sets a grid item size and location within the grid column.',
    },
    'grid-temptale-rows': {
        value: gridtemplate_,
        desc: 'Defines rows for grid layout.',
    },
    'grid-row, start/end': {
        value: [...gridrow_, ...gridrowstart_, ...gridrowend_],
        desc: 'Sets a grid item size and location within the grid row.',
    },
    gap: {
        value: gap_,
        desc: 'Sets the gaps (gutters) between rows and columns.',
    },
    'grid-auto-flow': {
        value: gridflow_,
        desc: 'Controls the auto placement of grid elements.',
    },
}

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
const Spacing = {
    padding: {
        value: [
            ...padding_,
            ...paddingx_,
            ...paddingy_,
            ...paddingr_,
            ...paddingl_,
            ...paddingt_,
            ...paddingb_,
        ],
        desc: 'Controls padding in 0.25rem increments.',
    },
    margin: {
        value: [
            ...margin_,
            ...marginx_,
            ...marginy_,
            ...marginr_,
            ...marginl_,
            ...margint_,
            ...marginb_,
            ...marginrminus_,
            ...marginlminus_,
            ...margintminus_,
            ...marginbminus_,
        ],
        desc: 'Controls margin (and negative margin) in 0.25rem increments.',
    },
}

// Sizing
const width_ = gen('w', width, (n, v) => `width: ${v}`)
const minwidth_ = gen('min-w', minWidth, (n, v) => `min-width: ${v}`)
const maxwidth_ = gen('max-w', maxWidth, (n, v) => `max-width: ${v}`)
const height_ = gen('h', height, (n, v) => `height: ${v}`)
const minheight_ = gen('min-h', minHeight, (n, v) => `min-height: ${v}`)
const maxheight_ = gen('max-h', maxHeight, (n, v) => `max-height: ${v}`)

const Sizing = {
    width: { value: width_, desc: 'Sets width of an element.' },
    'min-width': {
        value: minwidth_,
        desc: 'Sets the minimum width of an element.',
    },
    'max-width': {
        value: maxwidth_,
        desc: 'Sets the maxiumum width of an element.',
    },
    height: { value: height_, desc: 'Sets height of an element.' },
    'min-height': {
        value: minheight_,
        desc: 'Sets the minimum height of an element.',
    },
    'max-height': {
        value: maxheight_,
        desc: 'Sets the maxiumum height of an element.',
    },
}

// TYPOGRAPHY

const color_ = gen('text', textColor, (n, v) => `color: ${v}`)
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

const liststyletype_ = gen(
    'list',
    listStyleType,
    (n, v) => `list-style-type: ${v}`
)

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

const Typography = {
    color: { value: color_, desc: 'Sets the text color.' },
    'font-family': { value: fontfamily_, desc: 'Sets the font family.' },
    'font-size': { value: fontsize_, desc: 'Sets the font size.' },
    'font-smoothing': {
        value: fontsmoothing_,
        desc: 'Sets the smoothing for font',
    },
    'font-style': { value: fontstyle_, desc: 'Sets style of the font' },
    'font-weight': { value: fontweight_, desc: 'Sets the font weight.' },
    'letter-spacing': {
        value: letterspacing_,
        desc: 'Sets the spacing between letters.',
    },
    'line-height': { value: lineheight_, desc: 'Sets the line height.' },
    'list-style-type': {
        value: liststyletype_,
        desc: 'Sets the bullet style of a list.',
    },
    'list-style-position': {
        value: liststyleposition_,
        desc: "Sets the position of a list's bullets.",
    },
    '::placeholder color': {
        value: placeholdercolor_,
        desc:
            'Sets the placeholder color using the ::placeholder pseudo element.',
    },
    'text-align': { value: textalign_, desc: 'Sets the alignment of text.' },
    'text-decoration': {
        value: textdecoration_,
        desc: 'Sets the decoration of the text.',
    },
    'text-transform': {
        value: texttransformation_,
        desc: 'Sets the transform attributes of the text.',
    },
    'vertical-align': {
        value: verticalalign_,
        desc: 'Sets the vertical alignment of an inline or table-cell box.',
    },
    'white-space': {
        value: whitespace_,
        desc: 'Sets the whitespace of an element.',
    },
    'word-break': {
        value: wordbreak_,
        desc: 'Sets the word breaks of an element.',
    },
}

// Backgrounds

const backattachment_ = gen(
    'bg',
    { fixed: 'fixed', local: 'local', scroll: 'scroll' },
    (n, v) => `background-attachment: ${v}`
)

const backcolor_ = gen(
    'bg',
    backgroundColor,
    (n, v) => `background-color: ${v}`
)

const backposition_ = gen(
    'bg',
    backgroundPosition,
    (n, v) => `background-position: ${v}`
)

const backrepeat_ = gen(
    'bg',
    {
        repeat: 'repeat',
        'no-repeat': 'no-repeat',
        'repeat-x': 'repeat-x',
        'repeat-y': 'repeat-y',
        'repeat-round': 'repeat-round',
        'repeat-space': 'repeat-space',
    },
    (n, v) => `background-repeat: ${v}`
)

const backsize_ = gen('bg', backgroundSize, (n, v) => `background-size: ${v}`)

const Backgrounds = {
    'background-attachment': {
        value: backattachment_,
        desc: 'Sets behavior of background images when scrolling.',
    },
    'background-color': { value: backcolor_, desc: 'Sets background color.' },
    'background-position': {
        value: backposition_,
        desc: 'Sets position of a background image.',
    },
    'background-repeat': {
        value: backrepeat_,
        desc: 'Sets repetition of a background image.',
    },
    'background-size': {
        value: backsize_,
        desc: 'Sets background size of a background image.',
    },
}

// Borders
const bordercolor_ = gen('border', borderColor, (n, v) => `border-color: ${v}`)

const borderstyle_ = gen(
    'border',
    {
        solid: 'solid',
        dashed: 'dashed',
        dotted: 'dotted',
        double: 'double',
        none: 'none',
    },
    (n, v) => `border-style: ${v}`
)

const borderwidth_ = gen('border', borderWidth, (n, v) => `border-width: ${v}`)
const borderwidtht_ = gen(
    'border-t',
    borderWidth,
    (n, v) => `border-top-width: ${v}`
)
const borderwidthb_ = gen(
    'border-b',
    borderWidth,
    (n, v) => `border-bottom-width: ${v}`
)
const borderwidthl_ = gen(
    'border-l',
    borderWidth,
    (n, v) => `border-left-width: ${v}`
)
const borderwidthr_ = gen(
    'border-r',
    borderWidth,
    (n, v) => `border-right-width: ${v}`
)

const borderradius_ = gen(
    'rounded',
    borderRadius,
    (n, v) => `border-radius: ${v}`
)

const borderradiust_ = gen(
    'rounded-t',
    borderRadius,
    (n, v) => `border-top-radius: ${v}`
)

const borderradiusb_ = gen(
    'rounded-b',
    borderRadius,
    (n, v) => `border-bottom-radius: ${v}`
)

const borderradiusr_ = gen(
    'rounded-r',
    borderRadius,
    (n, v) => `border-right-radius: ${v}`
)

const borderradiusl_ = gen(
    'rounded-l',
    borderRadius,
    (n, v) => `border-left-radius: ${v}`
)

const borderradiustr_ = gen(
    'rounded-tr',
    borderRadius,
    (n, v) => `border-top-right-radius: ${v}`
)

const borderradiustl_ = gen(
    'rounded-tl',
    borderRadius,
    (n, v) => `border-top-left-radius: ${v}`
)

const borderradiusbr_ = gen(
    'rounded-br',
    borderRadius,
    (n, v) => `border-bottom-right-radius: ${v}`
)

const borderradiusbl_ = gen(
    'rounded-bl',
    borderRadius,
    (n, v) => `border-bottom-left-radius: ${v}`
)

const Borders = {
    'border-color': { value: bordercolor_, desc: 'Sets color for borders.' },
    'border-style': { value: borderstyle_, desc: 'Sets style for borders.' },
    'border-width': {
        value: [
            ...borderwidth_,
            ...borderwidtht_,
            ...borderwidthb_,
            ...borderwidthr_,
            ...borderwidthl_,
        ],
        desc: 'Sets width for borders in increments of 1px.',
    },
    'border-radius': {
        value: [
            ...borderradius_,
            ...borderradiust_,
            ...borderradiusb_,
            ...borderradiusr_,
            ...borderradiusl_,
            ...borderradiustr_,
            ...borderradiustl_,
            ...borderradiusbr_,
            ...borderradiusbl_,
        ],
        desc: 'Sets border radius.',
    },
}

// Tables

const bordercollapse_ = gen(
    'border',
    {
        collapse: 'collapse',
        separate: 'separate',
    },
    (n, v) => `border-collapse: ${v}`
)

const tablelayout_ = gen(
    'table',
    {
        auto: 'auto',
        fixed: 'fixed',
    },
    (n, v) => `table-layout: ${v}`
)

// Tables
const Tables = {
    'border-collapse': {
        value: bordercollapse_,
        desc: 'Collapse or separate table borders.',
    },
    'table-layout': {
        value: tablelayout_,
        desc:
            'Defines the algorithm used to lay out table cells, rows, and columns.',
    },
}

// Transitions

const transitionproperty_ = gen(
    'transition',
    transitionProperty,
    (n, v) => `transition-property: ${v}`
)

const transitionduration_ = gen(
    'duration',
    transitionDuration,
    (n, v) => `transition-duration: ${v}`
)

const transitiontimingfunction_ = gen(
    'ease',
    transitionTimingFunction,
    (n, v) => `transition-timing-function: ${v}`
)

const Transitions = {
    'transition-property': {
        value: transitionproperty_,
        desc: 'Sets the CSS properties affected by transition animations.',
    },
    'transition-duration': {
        value: transitionduration_,
        desc:
            'Sets the length of time for a transition animations to complete.',
    },
    'transition-timing-function': {
        value: transitiontimingfunction_,
        desc: 'Sets the easing function of transition animations.',
    },
}

const scale_ = gen(
    'scale',
    scale,
    (n, v) => `--transform-scale-x: ${v};
--transform-scale-y: ${v}`
)

const scalex_ = gen('scale-x', scale, (n, v) => `--transform-scale-x: ${v}`)

const scaley_ = gen('scale-y', scale, (n, v) => `--transform-scale-y: ${v}`)

const rotate_ = gen('rotate', rotate, (n, v) => `--transform-rotate: ${v}`)

const translatex_ = gen(
    'translate-x',
    translate,
    (n, v) => `--transform-translate-x: ${v}`
)
const translatey_ = gen(
    'translate-y',
    translate,
    (n, v) => `--transform-translate-y: ${v}`
)

const skewx_ = gen('skew-x', skew, (n, v) => `--transform-skew-x: ${v}`)

const skewy_ = gen('skew-y', skew, (n, v) => `--transform-skew-y: ${v}`)

const transformorigin_ = gen(
    'origin',
    transformOrigin,
    (n, v) => `transform-origin: ${v}`
)

const Transforms = {
    scale: {
        value: [...scale_, ...scalex_, ...scaley_],
        desc: 'Scales an element that has transform applied.',
    },
    rotate: {
        value: rotate_,
        desc: 'Rotates an element that has transform applied.',
    },
    translate: {
        value: [...translatex_, ...translatey_],
        desc: 'Translates an element that has transform applied.',
    },
    skew: {
        value: [...skewx_, ...skewy_],
        desc: 'Skews an element that has transform applied.',
    },
    'transform-origin': {
        value: transformorigin_,
        desc:
            "Sets the origin of an element's transforms. Think of the origin as pushing a thumbtack into the element at the specified position.",
    },
}

// Interactivity

const appearance_ = gen(
    'appearance',
    { none: 'none' },
    (n, v) => `appearance: ${v}`
)

const cursor_ = gen('cursor', cursor, (n, v) => `cursor: ${v}`)

const outline_ = gen('outline', { none: '0' }, (n, v) => `outline: ${v}`)

const pointerevents_ = gen(
    'pointer-events',
    { none: 'none', auto: 'auto' },
    (n, v) => `pointer-events: ${v}`
)

const resize_ = gen(
    'resize',
    { none: 'none', default: 'both', y: 'vertical', x: 'horizontal' },
    (n, v) => `resize: ${v}`
)

const userselect_ = gen(
    'select',
    { none: 'none', text: 'text', all: 'all', auto: 'auto' },
    (n, v) => `user-select: ${v}`
)

const accessability_ = gen('', {
    'sr-only': `position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
whiteSpace: nowrap;
borderWidth: 0;`,
    'not-sr-only': `position: static;
width: auto;
height: auto;
padding: 0;
margin: 0;
overflow: visible;
clip: auto;
whiteSpace: normal;`,
})

const Interactivity = {
    appearance: {
        value: appearance_,
        desc: "Disables native styling based on the operating system's theme.",
    },
    cursor: {
        value: cursor_,
        desc: 'Changes the cursor when hovering over an element.',
    },
    outline: { value: outline_, desc: 'Changes outline of an element.' },
    'pointer-events': {
        value: pointerevents_,
        desc: 'Specifies whether an element is the target of mouse events.',
    },
    resize: {
        value: resize_,
        desc: 'Sets whether an element is resizable, along with direction.',
    },
    'user-select': {
        value: userselect_,
        desc: 'Controls whether the user can select text.',
    },
    accessibility: {
        value: accessability_,
        desc:
            'Controls whether an element is visually hidden but still accessible to screen readers.',
    },
}

// Miscellaneous

const boxshadow_ = gen('shadow', boxShadow, (n, v) => `box-shadow: ${v}`)

const opacity_ = gen('opacity', opacity, (n, v) => `opacity: ${v}`)

const fill_ = gen('fill', fill, (n, v) => `fill: ${v}`)

const stroke_ = gen('stroke', stroke, (n, v) => `stroke: ${v}`)

const strokewidth_ = gen('stroke', strokeWidth, (n, v) => `stroke-width: ${v}`)

const Miscellaneous = {
    'box-shadow': { value: boxshadow_, desc: 'Sets shadow of an element.' },
    opacity: { value: opacity_, desc: 'Sets opacity of an element.' },
    fill: { value: fill_, desc: 'Set SVG fill style.' },
    stroke: { value: stroke_, desc: 'Set SVG stroke style.' },
    'stroke-width': { value: strokewidth_, desc: 'Set SVG stroke width.' },
}

return {
    Miscellaneous,
    Interactivity,
    Transforms,
    Transitions,
    Tables,
    Borders,
    Backgrounds,
    Typography,
    Sizing,
    Spacing,
    Grid,
    Flexbox,
    Layout,
}

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
