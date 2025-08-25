import { type AppConfig } from 'ee-core/config'

const config: () => AppConfig = () => {
  return {
    // { mode: 'left' | 'top' | 'right' | 'bottom' | 'none' }
    openDevTools: false,
    jobs: {
      messageLog: false,
    },
  }
}

export default config
