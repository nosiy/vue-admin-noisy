<template>
  <div>
    <UploadImg />
    <el-button style="margin-left:50px" @click="logout()">退出登录</el-button>
    <!-- <EchartsGroup :chart-data="lineChartData" /> -->
  </div>
</template>

<script>
import echarts from 'echarts';
import UploadImg from '@/components/UploadImg';
// import EchartsGroup from './components/EchartsGroup';
// import { api } from '@/api/home';

// console.log({ api })
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'dashboard',
  components: { UploadImg },
  // components: { EchartsGroup },
  data () {
    return {
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push(`/login`)
    }
  }
}

</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
