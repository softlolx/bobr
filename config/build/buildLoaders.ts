import webpack from 'webpack';

export const buildLoaders = (): webpack.RuleSetRule[] => {
  const styleLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  const typeScriptLoaders = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typeScriptLoaders, styleLoaders];
};
