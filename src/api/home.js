import request from '@/utils/request'

export function home (data) {
    return request({
        url: '/vue-element-admin/user/home',
        method: 'post',
        data
    })
}