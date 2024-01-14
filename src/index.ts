import { tags as t } from '@lezer/highlight'
import type { CreateThemeOptions } from '@drl990114/codemirror-themes'
import type { MfTheme } from '@markflowy/theme'
import { registerTheme } from '@markflowy/runtime-api'
import css from './index.css'

const mfCodemirrorDark: CreateThemeOptions = {
  theme: 'dark',
  settings: {
    background: '#11191f',
    foreground: '#c9d1d9',
    caret: '#c9d1d9',
    selection: '#1c78aa',
    selectionMatch: '#1c78aa',
    lineHighlight: '#36334280',
  },
  styles: [
    { tag: [t.standard(t.tagName), t.tagName], color: '#7ee787' },
    { tag: [t.comment, t.bracket], color: '#8b949e' },
    { tag: [t.className, t.propertyName], color: '#d2a8ff' },
    { tag: [t.variableName, t.attributeName, t.number, t.operator], color: '#D19A66' },
    { tag: [t.keyword, t.typeName, t.typeOperator, t.typeName], color: '#ff7b72' },
    { tag: [t.string, t.meta, t.regexp], color: '#98C379' },
    { tag: [t.name, t.quote], color: '#7ee787' },
    { tag: [t.heading], color: '#E06C75', fontWeight: 'bold' },
    { tag: [t.emphasis], color: '#d2a8ff', fontStyle: 'italic' },
    { tag: [t.deleted], color: '#ffdcd7', backgroundColor: 'ffeef0' },
    { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#ffab70' },
    { tag: [t.url, t.escape, t.link], color: '#D19A66' },
    { tag: t.link, textDecoration: 'underline' },
    { tag: t.strikethrough, textDecoration: 'line-through' },
    { tag: t.invalid, color: '#f97583' },
    { tag: t.strong, color: '#98C379', fontWeight: 'bold' },
  ],
}


const common = {
  lineHeightBase: '1.6',

  titleBarHeight: '30px',

  fontH1: '28px',
  fontH2: '26px',
  fontH3: '24px',
  fontH4: '22px',
  fontH5: '20px',
  fontH6: '18px',
  fontBase: '15px',
  fontSm: '14px',
  fontXs: '12px',

  spaceXs: '4px',
  spaceSm: '8px',
  spaceBase: '10px',
  spaceL: '12px',
  spaceXl: '16px',

  smallBorderRadius: '4px',
  midBorderRadius: '8px',
  bigBorderRadius: '12px',

  black: '#74757D',
  white: '#E0E0E0',
  gray: '#C0C0C0',
  blue: '#0359D0',

  fontFamily: `'Open Sans', 'Clear Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
  codemirrorFontFamily: `'DejaVu Sans Mono', 'Source Code Pro', 'Droid Sans Mono', Consolas, monospace`,
}

const styledTheme = {
  ...common,

  primaryFontColor: '#c8d1d9',
  labelFontColor: 'rgba(255, 255, 255, 0.5)',
  accentColor: '#1c78aa',
  borderColor: '#363b41',
  bgColor: '#161b22',
  warnColor: '#dc2626',
  tipsBgColor: '#0e1419',
  successColor: '#00c853',
  boxShadowColor: 'rgba(255, 255, 255, 0.04)',

  // components
  buttonBgColor: '#21262c',
  tooltipBgColor: '#43414A',
  dialogBgColor: '#05010d',
  dialogBackdropColor: 'rgb(18, 18, 18, 0.7)',
  contextMenuBgColor: '#43414A',

  titleBarDefaultHoverColor: '#383838',

  scrollbarThumbColor: '#2C3C52',
  scrollbarTrackColor: '#0e1419',
}

const darkTheme: MfTheme = {
  name: 'MarkFlowy Dark-',
  mode: 'dark',
  styledContants: styledTheme,
  codemirorTheme: mfCodemirrorDark,
  globalStyleText: css
}

registerTheme(darkTheme)
