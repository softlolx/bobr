import webpack from 'webpack';
import { BuildOptions } from './types/config';
import buildCssLoader from './buildCssLoader';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const styleLoaders = buildCssLoader(options.isDev);

  const babelLoader = {
    test: /\.m?(ts|tsx|js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/env', '@babel/preset-react'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValues: true,
            },
          ],
        ],
      },
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
