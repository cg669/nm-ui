import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'


addDecorator((story, context) => withInfo()(story)(context))
addDecorator(withKnobs)
setOptions({
    name: 'NM UI',
    url: '',
})
const req = require.context('../stories', true, /\.tsx?$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);