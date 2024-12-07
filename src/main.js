import { createApp } from 'vue'
import App from './App.vue'

import { language, defaultLocale } from './i18n'
import { createI18n } from 'vue-i18n'

// Объединяем языковые сообщения
const messages = Object.assign({}, language)

const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: "ru",
    messages
})

createApp(App)
    .use(i18n)
    .mount('#app')