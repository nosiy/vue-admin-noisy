<template>
  <div class="main">
    <div class="main-title">
      <div class="main-title-detail">今日<span>1</span>笔入款</div>
      <div class="main-title-detail"><span>1</span>位新会员</div>
    </div>
    {{ datas || "" }}
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Array,
      default: function () {
        return ''
      }
    }
  },
  data () {
    return {
      params: {
        name: '1'
      }
    }
  }
}
</script>

<style lang="scss">
.main {
  .main-title {
    width: 100%;
    height: auto;
    background: #fafafa;
    margin: 15px 0;
    padding: 10px;
    .main-title-detail {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #000;
      float: left;
      margin-right: 10px;
      span {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: 0 3px;
        line-height: 16px;
        text-align: center;
        border-radius: 50%;
        background: red;
      }
    }
  }
  .dataMain {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>