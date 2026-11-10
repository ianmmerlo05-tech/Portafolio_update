import purgecss from '@fullhuman/postcss-purgecss'

export default {
  plugins: [purgecss({
    content: ['./index.html', './src/**/*.{js,html}'],
    safelist: { standard: [/^is-/] },
  })],
}
