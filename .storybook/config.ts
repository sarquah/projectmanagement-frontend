import { configure, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming'

addParameters({
  options: {
    theme: themes.light,
  },
})
function loadStories() {
  const req = require.context('../src/stories', true, /\.story\.tsx$/)
  req.keys().forEach(req)
}

configure(loadStories, module)
