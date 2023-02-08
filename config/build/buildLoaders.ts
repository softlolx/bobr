import { BuildOptions } from './types/config';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const styleLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => !!resPath.includes('.module.'),
            localIdentName: options.isDev
              ? '[name]--[local]--[hash:base64:8]'
              : '[local]--[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const babelLoader = {
    test: /\.m?(ts|tsx|js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: { presets: ['@babel/env', '@babel/preset-react'] },
    },
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const typeScriptLoaders = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, babelLoader, typeScriptLoaders, styleLoaders];
};
