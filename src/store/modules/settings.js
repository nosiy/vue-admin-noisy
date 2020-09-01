import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'
const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings
// 辅助函数为[...mapState]
const settings = {
  state: {
    theme: variables.theme,
    showSettings: showSettings,
    tagsView: tagsView,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo
  }, //组件仍然保有局部状态
  mutations: {
    CHANGE_SETTING: (state, { key, value }) => {
      // eslint-disable-next-line no-prototype-builtins
      if (state.hasOwnProperty(key)) {
        // hasOwnProperty()方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
        state[key] = value
      }
    }
  }, //调用 store.commit 方法
  actions: {
    changeSetting ({ commit }, data) {
      commit('CHANGE_SETTING', data)
    }
  }, //分发 Action , store.dispatch()
}

export default settings