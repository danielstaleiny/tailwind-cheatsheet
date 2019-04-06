// let defaultConfig = require('tailwindcss/defaultConfig')() // turn on if you want to merge your custome with the defaults.

let colors = {
    transparent: 'transparent',

    black: '#000',
    blackish: '#22292f',
    'grey-darkest': '#3d4852',
    'grey-darker': '#0a3039',
    'grey-dark': '#8795a1',
    grey: '#707070',
    'grey-light': '#dae1e7',
    'grey-lighter': '#f1f5f8',
    'grey-lightest': '#f8fafc',
    white: '#ffffff',

    'red-darkest': '#3b0d0c',
    'red-darker': '#621b18',
    'red-dark': '#cc1f1a',
    red: '#e3342f',
    'red-light': '#ef5753',
    'red-lighter': '#f9acaa',
    'red-lightest': '#fcebea',

    'orange-darkest': '#462a16',
    'orange-darker': '#613b1f',
    'orange-dark': '#de751f',
    orange: '#f6993f',
    'orange-light': '#faad63',
    'orange-lighter': '#fcd9b6',
    'orange-lightest': '#fff5eb',

    'yellow-darkest': '#453411',
    'yellow-darker': '#684f1d',
    'yellow-dark': '#f2d024',
    yellow: '#ffed4a',
    'yellow-light': '#fff382',
    'yellow-lighter': '#fff9c2',
    'yellow-lightest': '#fcfbeb',

    'green-darkest': '#0f2f21',
    'green-darker': '#1a4731',
    'green-dark': '#1f9d55',
    green: '#38c172',
    'green-light': '#51d88a',
    'green-lighter': '#a2f5bf',
    'green-lightest': '#e3fcec',

    'teal-darkest': '#0d3331',
    'teal-darker': '#20504f',
    'teal-dark': '#38a89d',
    teal: '#4dc0b5',
    'teal-light': '#64d5ca',
    'teal-lighter': '#a0f0ed',
    'teal-lightest': '#e8fffe',

    'blue-darkest': '#12283a',
    'blue-darker': '#1c3d5a',
    'blue-dark': '#2779bd',
    blue: '#3490dc',
    'blue-light': '#6cb2eb',
    'blue-lighter': '#bcdefa',
    'blue-lightest': '#eff8ff',

    'indigo-darkest': '#191e38',
    'indigo-darker': '#2f365f',
    'indigo-dark': '#5661b3',
    indigo: '#6574cd',
    'indigo-light': '#7886d7',
    'indigo-lighter': '#b2b7ff',
    'indigo-lightest': '#e6e8ff',

    'purple-darkest': '#21183c',
    'purple-darker': '#382b5f',
    'purple-dark': '#794acf',
    purple: '#9561e2',
    'purple-light': '#a779e9',
    'purple-lighter': '#d6bbfc',
    'purple-lightest': '#f3ebff',

    'pink-darkest': '#451225',
    'pink-darker': '#6f213f',
    'pink-dark': '#eb5286',
    pink: '#f66d9b',
    'pink-light': '#fa7ea8',
    'pink-lighter': '#ffbbca',
    'pink-lightest': '#ffebef'
}

module.exports = {
    // .error { color: config('colors.red') } // example of color ref usage.
    colors: colors,

    // .{screen}:{utility}
    screens: {
        m: '50em', // 800px tablet or medium size
        l: '73em', // 1168px desktop or large size
        w: {
            raw:
                '(min-aspect-ratio: 13/9), (hover: hover) and (orientation: landscape)'
        } //orientation: landscape or wide screen
    },

    // .font-{name}
    fonts: {
        sans: [
            'system-ui',
            'BlinkMacSystemFont',
            '-apple-system',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif'
        ],
        serif: [
            'Constantia',
            'Lucida Bright',
            'Lucidabright',
            'Lucida Serif',
            'Lucida',
            'DejaVu Serif',
            'Bitstream Vera Serif',
            'Liberation Serif',
            'Georgia',
            'serif'
        ],
        mono: [
            'Menlo',
            'Monaco',
            'Consolas',
            'Liberation Mono',
            'Courier New',
            'monospace'
        ]
    },

    // .text-{size}
    textSizes: {
        xs: '.75rem', // 12px
        sm: '.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        h4: '1.5rem', // 24px
        h3: '1.875rem', // 30px
        h2: '2.25rem', // 36px
        h1: '3rem', // 48px
        'xs-px': '12px', // 12px
        'sm-px': '14px', // 14px
        'base-px': '16px', // 16px
        'lg-px': '18px', // 18px
        'xl-px': '20px', // 20px
        'h4-px': '24px', // 24px
        'h3-px': '30px', // 30px
        'h2-px': '36px', // 36px
        'h1-px': '48px' // 48px
    },

    // .font-{weight}
    fontWeights: {
        // hairline: 100,
        // thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
        // extrabold: 800,
        // black: 900
    },

    // .leading-{size}
    leading: {
        none: 1,
        normal: 1.5,
        '1': '1.5rem',
        '2': '2.25rem',
        '3': '3rem'
    },

    // .tracking-{size}
    tracking: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em'
    },

    // .text-{color}
    textColors: colors,

    // .bg-{color}
    backgroundColors: colors,

    // .bg-{size}
    backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain'
    },

    // .border{-side?}{-width?}
    borderWidths: {
        default: '1px',
        '0': '0',
        '2': '2px'
        // '4': '4px',
        // '8': '8px'
    },

    // .border-{color}
    borderColors: global.Object.assign({ default: colors['blackish'] }, colors),

    // .rounded{-side?}{-size?}
    borderRadius: {
        none: '0',
        sm: '.125rem',
        default: '.25rem',
        lg: '.5rem',
        full: '9999px'
    },

    // .w-{size}
    width: {
        auto: 'auto',
        // px: '1px',
        '025': '0.25rem',
        '05': '0.5rem',
        '075': '0.75rem',
        '1': '1rem',
        '125': '1.25rem',
        '15': '1.5rem',
        '2': '2rem',
        '25': '2.5rem',
        '3': '3rem',
        '4': '4rem',
        '6': '6rem',
        '8': '8rem',
        '120': '12rem',
        '160': '16rem',
        '1/2': '50%',
        '1/3': '33.33333%',
        '2/3': '66.66667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.66667%',
        '5/6': '83.33333%',
        full: '100%',
        screen: '100vw'
    },

    // .h-{size}
    height: {
        auto: 'auto',
        // px: '1px',
        '025': '0.25rem',
        '05': '0.5rem',
        '075': '0.75rem',
        '1': '1rem',
        '125': '1.25rem',
        '15': '1.5rem',
        '2': '2rem',
        '25': '2.5rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '8': '8rem',
        full: '100%',
        screen: '100vh',
        width: '100vw',
        vmin: '100vmin'
    },

    // .min-w-{size}
    minWidth: {
        '0': '0',
        full: '100%'
    },

    // .min-h-{size}
    minHeight: {
        '0': '0',
        full: '100%',
        screen: '100vh'
    },

    // .max-w-{size}
    maxWidth: {
        xs: '20rem',
        sm: '30rem',
        md: '40rem',
        lg: '50rem',
        xl: '60rem',
        '2xl': '70rem',
        '3xl': '80rem',
        '4xl': '90rem',
        '5xl': '100rem',
        full: '100%'
    },

    // .max-h-{size}
    maxHeight: {
        full: '100%',
        screen: '100vh'
    },

    // .p{side?}-{size}
    padding: {
        px: '1px',
        '0': '0',
        '1/4': '0.375rem',
        '1/2': '0.75rem',
        '3/4': '0.125rem',
        '1': '1.5rem',
        '5/4': '1.875rem',
        '3/2': '2.25rem',
        '2': '3rem',
        '5/2': '3.75rem',
        '3': '4.5rem',
        '4': '6rem',
        '5': '7.5rem',
        '6': '9rem',
        '8': '12rem',
        '10': '15rem',
        '1/2-em': '0.5em',
        '3/4-em': '0.75em',
        '1-em': '1em',
        '5/4-em': '1.25em',
        '3/2-em': '1.5em',
        '2-em': '2em',
        '5/2-em': '2.5em',
        '3-em': '3em',
        '4-em': '4em',
        '5-em': '5em',
        '6-em': '6em',
        '8-em': '8em'
    },

    //  .m{side?}-{size}
    margin: {
        auto: 'auto',
        px: '1px',
        '0': '0',
        '1/4': '0.375rem',
        '1/2': '0.75rem',
        '3/4': '0.125rem',
        '1': '1.5rem',
        '5/4': '1.875rem',
        '3/2': '2.25rem',
        '2': '3rem',
        '5/2': '3.75rem',
        '3': '4.5rem',
        '4': '6rem',
        '5': '7.5rem',
        '6': '9rem',
        '8': '12rem',
        '10': '15rem'
    },

    // .-m{side?}-{size}
    // negativeMargin: {
    // px: '1px',
    // '0': '0',
    // '1': '0.25rem',
    // '2': '0.5rem',
    // '3': '0.75rem',
    // '4': '1rem',
    // '5': '1.25rem',
    // '6': '1.5rem',
    // '8': '2rem',
    // '10': '2.5rem',
    // '12': '3rem',
    // '16': '4rem',
    // '20': '5rem',
    // '24': '6rem',
    // '32': '8rem'
    // },

    // .shadow-{size?}
    shadows: {
        default: '0 2px 4px 0 rgba(0,0,0,0.10)',
        md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
        lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
        outline: '0 0 0 3px rgba(52,144,220,0.5)',
        none: 'none'
    },

    // .z-{index}
    zIndex: {
        auto: 'auto',
        '-1': -1,
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50
    },

    // .opacity-{name}
    opacity: {
        '0': '0',
        '25': '.25',
        '50': '.5',
        '75': '.75',
        '100': '1'
    },

    // .fill-{name}
    svgFill: {
        current: 'currentColor'
    },

    // .stroke-{name}
    svgStroke: {
        current: 'currentColor'
    },

    //  Currently supported variants:
    //    - responsive
    //    - hover
    //    - focus
    //    - focus-within
    //    - active
    //    - group-hover
    //
    // To disable a module completely, use `false` instead of an array.
    modules: {
        appearance: [],
        backgroundAttachment: [],
        backgroundColors: ['hover', 'focus'],
        backgroundPosition: [],
        backgroundRepeat: [],
        backgroundSize: [],
        borderCollapse: [],
        borderColors: ['hover', 'focus'],
        borderRadius: [],
        borderStyle: [],
        borderWidths: [],
        cursor: [],
        display: ['responsive'],
        flexbox: ['responsive'],
        float: false,
        fonts: [],
        fontWeights: [],
        height: [],
        leading: [],
        lists: [],
        margin: ['responsive'],
        maxHeight: [],
        maxWidth: [],
        minHeight: [],
        minWidth: [],
        negativeMargin: false,
        objectFit: [],
        objectPosition: [],
        opacity: ['responsive', 'group-hover'],
        outline: [],
        overflow: [],
        padding: ['responsive'],
        pointerEvents: [],
        position: ['responsive'],
        resize: [],
        shadows: ['hover', 'focus'],
        svgFill: [],
        svgStroke: [],
        tableLayout: [],
        textAlign: [],
        textColors: ['hover', 'focus'],
        textSizes: ['responsive'],
        textStyle: ['hover', 'focus'],
        tracking: [],
        userSelect: [],
        verticalAlign: [],
        visibility: ['responsive'],
        whitespace: [],
        width: [],
        zIndex: []
    },

    plugins: [
        require('tailwindcss/plugins/container')({
            center: true,
            padding: '1rem'
        })
    ],

    // advanced options
    options: {
        prefix: '',
        important: false,
        separator: ':'
    }
}
