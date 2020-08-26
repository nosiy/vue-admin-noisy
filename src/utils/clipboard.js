// import Vue from 'vue'
import { Message } from 'element-ui'
import Clipboard from 'clipboard'

/**
 * 这里可用两种写法
 * 1，引用element ui的写法
 * 2，通过继承方式
 */
function clipboardSuccess () {
  Message({
    message: 'Copy successfully',
    type: 'success',
    duration: 1500
  })
  // Vue.prototype.$message({
  //   message: 'Copy successfully',
  //   type: 'success',
  //   duration: 1500
  // })
}
function clipboardError () {
  Message({
    message: 'Copy failed',
    type: 'error'
  })
}

export default function handleClipboard (text, event) {
  const clipboard = new Clipboard(event.target, {
    text: function () {
      return text
    }
  })
  clipboard.on('success', e => {
    clipboardSuccess()
    // 释放内存
    clipboard.destroy()
  })
  clipboard.on('error', e => {
    clipboardError()
    clipboard.destroy()
  })
  // 监听回调第一次失效
  clipboard.onClick(event) // 解决！！
}
