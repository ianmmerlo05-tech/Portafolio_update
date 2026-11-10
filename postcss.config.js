import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss'

export default {
  plugins: [purgeCSSPlugin({
    content: ['./index.html', './src/**/*.{js,html}'],
    safelist: { standard: [/^is-/] },
  })],
}
