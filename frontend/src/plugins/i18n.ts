import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { DEFAULT_LOCALE } from '@/constants'

export const i18n = createI18n({
  locale: DEFAULT_LOCALE,
  messages
})
