import { menus } from './hooks';
/** 远程仓库的名称 */
const BaseUrl = '/DemoActionPage/';
const packages = require('../packages/hooks/package.json');
// console.log(1123123123213)
export default {
  publicPath:BaseUrl,
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  mode: 'site',
  title: 'encode react hooks',
  favicon:BaseUrl + '/avatar.png',
  logo: BaseUrl + '/logo.png',
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {
    encodeHooks: process.cwd() + '/packages/hooks/src/index.ts',
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  navs: [
    { title: '指南', path: '/guide' },
    { title: 'Hooks', path: '/hooks' },
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
      },
    ],
    '/hooks': menus,
  },
};
