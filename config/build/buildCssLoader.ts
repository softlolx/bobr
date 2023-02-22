import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const buildCssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath: string) => !!resPath.includes('.module.'),
          localIdentName: isDev ? '[name]--[local]--[hash:base64:8]' : '[local]--[hash:base64:8]',
        },
      },
    },
    'sass-loader',
  ],
});

export default buildCssLoader;
