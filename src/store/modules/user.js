import { login } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken,
    name: '',
    avatar: '',
    introduction: '',
    roles: [] // 任务
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    Login ({ commit }, userInfo) {
      const { username, password } = userInfo
      const params = {
        username: username.trim(), //去除首尾字符串
        password: password
      }
      // this.$router.push({ 'path': '/' })
      // return new Promise((resolve, reject) => {
      //   login(params).then(({ res, err }) => {
      //     if (res) {
      //       commit('SET_TOKEN', res.token) //store保存token
      //       setToken(res.token) //保存最新token，cookie
      //       resolve()
      //     } else {
      //       reject(err)
      //     }
      //   })
      // })
    }
  }
}

export default user