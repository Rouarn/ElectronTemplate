import type { GlobalThemeOverrides } from 'naive-ui'

/**
 * naive-ui 主题定制。
 * 颜色值与 styles/index.css 中的设计令牌保持一致，避免两套色彩标准。
 */
export const naiveThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#4f46e5',
    primaryColorHover: '#6366f1',
    primaryColorPressed: '#4338ca',
    primaryColorSuppl: '#6366f1',
    successColor: '#10b981',
    warningColor: '#f59e0b',
    errorColor: '#ef4444',
    infoColor: '#6366f1',
    borderRadius: '10px',
    borderRadiusSmall: '8px',
    fontSize: '14px',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Segoe UI', sans-serif",
  },
  Button: {
    borderRadiusMedium: '10px',
    fontWeight: '500',
  },
  Card: {
    borderRadius: '16px',
  },
  Input: {
    borderRadius: '10px',
  },
  Select: {
    peers: {
      InternalSelection: {
        borderRadius: '10px',
      },
    },
  },
  Tag: {
    borderRadius: '8px',
  },
  Code: {
    borderRadius: '12px',
  },
}
