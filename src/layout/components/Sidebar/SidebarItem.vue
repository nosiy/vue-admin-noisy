<template>
  <div class="menu-wrapper">
    <template v-for="(item,index) in routes">
      <el-submenu
        :index="String(index)"
        v-if="!item.hidden && item.children && item.children.length > 1"
        :key="'submenu'+index"
      >
        <template slot="title">
          <!-- 菜单图标 -->
          <i class="el-icon-location"></i>
          <span slot="title">{{item.meta.title}}</span>
        </template>
        <template v-for="child in item.children">
          <sidebar-item
            class="nest-menu"
            v-if="!child.hidden&&child.children&&child.children.length>0"
            :parentPath="item.path"
            :routes="[child]"
            :key="child.path"
          ></sidebar-item>
          <router-link v-else :to="child.path" :key="child.path">
            <el-menu-item :index="child.path">
              <span>{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

      <router-link
        v-if="!item.hidden && item.children && item.children.length <=1"
        :to="item.path"
        :key="'select' + index"
      >
        <el-menu-item :index="'select' + index">
          <i class="el-icon-location"></i>
          <span>{{item.meta.title}}</span>
        </el-menu-item>
      </router-link>
      <!-- <router-link v-if="item.children&&item.children.length>0" :to="item.path" :key="item">
        <el-menu-item>
          <span>{{item.meta.title}}</span>
        </el-menu-item>
      </router-link>-->
    </template>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    routes: {
      type: Array,
      required: true
    }
  },
  data () {
    return {

    }
  },
  created () {
    // console.log(this.routes)
  },
  methods: {
    joinPathTitle (value) {
      console.log(value.children)
    },
    joinPath (path) {
      // console.log(path)
    }
  }
}

</script>

<style lang='scss'>
</style>