import { configure } from '@storybook/html'

function loadStories() {
    const req = require.context('../lib/shortcodes', true, /\.story\.js$/)
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
