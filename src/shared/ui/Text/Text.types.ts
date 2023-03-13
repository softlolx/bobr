export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export interface TextProps {
  title?: string;
  text?: string;
  className?: string;
  theme?: TextTheme;
}
