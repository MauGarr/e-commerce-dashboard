import { createI18n } from 'vue-i18n'
import type { AppModule } from '~/types'
import es from '../../locales/es.yml'

const messages = { es }

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  messages,
})

export const install: AppModule = (app) => {
  app.use(i18n)
}

export default i18n
