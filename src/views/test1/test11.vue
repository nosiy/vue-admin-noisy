<template>
  <div class="vip-home">
    <div class="select-time">
      <el-date-picker
        v-model="value1"
        type="daterange"
        value-format="yyyy-MM-dd"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
      <el-button size="mini" type="danger" @click="selectData('all')"
        >全部</el-button
      >
      <el-button size="mini" @click="selectData('new')">新注册</el-button>
      <el-button size="mini" type="primary" @click="selectData('default')"
        >查询</el-button
      >
    </div>
    <!-- <input type="text" v-model="inputValue"  ref="inputValue" /> -->
    <dataValue :datas="valueData"></dataValue>
  </div>
</template>

<script>
import dataValue from './vip/detail'
export default {
  components: {
    dataValue
  },
  data () {
    return {
      value1: '',
      valueData: [],
      inputValue:''
    }
  },
  computed: {
    // valueData () {
    //   return this.value1 || []
    // }
  },
  methods: {
    selectData (type) {
      switch (type) {
        case 'all':
          this.valueData = []
          break;
        case 'new':
          this.valueData = ['new']
          break;
        case 'default':
          this.valueData = this.value1
          break;
      }
      // console.log(this.$refs)
    }
  }
}

</script>

<style lang='scss'>
.vip-home {
  width: 100%;
  padding: 0 15px;
  height: auto;
  margin-top: 10px;
  .select-time {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .el-date-editor {
      margin-right: 15px;
    }
    .el-button--mini {
      padding: 6px 15px;
    }
  }
}
</style>