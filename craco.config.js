const path = require('path')

module.exports = {
  compilerOptions: {
    baseUrl: './src',
    jsx: 'preserve',
    paths: { '@/*': ['./src/*'], '@/modules/*': ['./src/modules/*'] },
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
}
