import HtmlWebpackPlugin from 'html-webpack-plugin'

const config = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin()
  ]
}

export default config
