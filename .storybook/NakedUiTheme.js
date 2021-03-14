import { create } from '@storybook/theming';


export default create({
  base: 'light',

  colorPrimary: '#333',
  colorSecondary: '#333',

  // UI
  appBg: 'white',
  appContentBg: '#fff',
  appBorderColor: 'grey',
  appBorderRadius: 2,

  // Typography
  fontBase: 'Inter',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#333',
  barSelectedColor: '#000',
  barBg: '#fafafa',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Naked UI',
  brandUrl: 'https://naked-ui.org',
  brandImage: 'https://docs.naked-ui.org/img/naked-ui-logo.svg',
});
