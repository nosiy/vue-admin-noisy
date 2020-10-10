<template>
  <div class="select">
    <el-dropdown placement="top-end" trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        {{$t('Language')}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(item,index) in lang"
          :command="item.type"
          :key="index"
        >{{item.value}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'LangSelect',
  data () {
    return {
      lang: [
        { 'type': 'zh', 'value': '中文' },
        { 'type': 'en', 'value': 'English' }
      ]
    }
  },
  methods: {
    handleCommand (command) {
      // this.$i18n.locale = type
      console.log(command)
      this.$i18n.locale = String(command)
      // let locale = this.$i18n.locale
      // locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
      // this.$message('click on item ' + command);
    }
  }
}
</script>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  width: 130px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu--mini .el-dropdown-menu__item {
  padding: 0 20px;
}
</style>