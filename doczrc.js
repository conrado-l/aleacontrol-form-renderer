import { css } from 'docz-plugin-css'

export default {
  title: 'Dynamic Forms - Aleacontrol',
  port: '4000',
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: false
    }),
    css({
      preprocessor: 'postcss'
    })
  ]
}
