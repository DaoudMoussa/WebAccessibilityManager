import { StorybookConfig } from '@storybook/react/types';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next',
  ],
  // presets: [],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  webpackFinal: async (config, { configType }) => {
    console.log(config?.resolve?.alias);

    if (config?.resolve?.alias) {
      console.log('here');

      config.resolve.alias['@utils'] = path.resolve(__dirname, '../lib/utils');
      config.resolve.alias['@styles'] = path.resolve(__dirname, '../styles');
      config.resolve.alias['@components'] = path.resolve(
        __dirname,
        '../components'
      );
      config.resolve.alias['@hooks'] = path.resolve(__dirname, '../lib/hooks');
      config.resolve.alias['@pages'] = path.resolve(__dirname, '../pages');
    }
    console.log(config?.resolve?.alias);

    if (config?.module?.rules) {
      // get index of css rule
      const ruleCssIndex = config.module.rules.findIndex(
        (rule) => rule.test?.toString() === '/\\.css$/'
      );

      if (Array.isArray(config.module.rules[ruleCssIndex]?.use)) {
        // map over the 'use' array of the css rule and set the 'module' option to true
        (config.module.rules[ruleCssIndex].use as any[]).map((item) => {
          if (item.loader && item.loader.includes('/css-loader/')) {
            item.options.modules = {
              mode: 'local',
              localIdentName:
                configType === 'PRODUCTION'
                  ? '[local]__[hash:base64:5]'
                  : '[name]__[local]__[hash:base64:5]',
            };
          }

          return item;
        });
      }
    }

    return config;
  },
};

module.exports = config;
