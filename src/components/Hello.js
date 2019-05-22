import Mustache from 'mustache'

import Hello from './Hello.html'

export default (props) => {
  return Mustache.render(Hello, props)
}