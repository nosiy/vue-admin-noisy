const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  avatar: state => state.user.avatar,
  sidebar: state => state.app.sidebar,
  permission_routes: state => state.permission.routes,
}
export default getters
