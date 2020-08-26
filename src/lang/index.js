import en from './en' // 英文
import zh from './zh' // 中文
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const language = {
  en,
  zh
}

export const i18n = new VueI18n({
  locale: 'zh', // set locale
  fallbackLocale: 'zh',
  messages: language // set locale messages
})
