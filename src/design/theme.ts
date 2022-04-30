const THEME = {
  fontWeights: {
    lighter: 100,
    light: 200,
    normal: 400,
    bold: 700,
    bolder: 900,
  },
  size: {
    xs: '4px',
    s: '8px',
    m: '12px',
    l: '24px',
    xl: '48px',
  },
  padding: {
    row4: '4px',
    row8: '8px',
    row12: '12px',
    row24: '24px',
    row48: '48px',

    col4: '4px',
    col8: '8px',
    col12: '12px',
    col24: '24px',
    col48: '48px',
  },
  margin: {
    row4: '4px',
    row8: '8px',
    row12: '12px',
    row24: '24px',
    row48: '48px',

    col4: '4px',
    col8: '8px',
    col12: '12px',
    col24: '24px',
    col48: '48px',
  },
};

export type sizeType = 'xs' | 's' | 'm' | 'l' | 'xl';

export type colorType = 'primary' | 'primaryMessage'
  | 'secondary' | 'secondaryMessage'
  | 'error' | 'errorMessage'
  | 'info' | 'infoMessage'
  | 'success' | 'successMessage'
  | 'warning' | 'warningMessage'
  | string;

export default THEME;
