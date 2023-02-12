import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    if (config && config.resolve) {
      config.resolve.plugins = config.resolve.plugins || [];
      config.resolve.plugins.push(
        new TsconfigPathsPlugin({
          configFile: path.resolve(
            __dirname,
            '../tsconfig.json'
          ),
        })
      );
    }
    return config;
  },
};
export default config;
