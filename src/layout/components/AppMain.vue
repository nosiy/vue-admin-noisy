<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- <keep-alive :include="cachedViews">
      <router-view :key="key" />-->
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews () {
      return 1
      // return this.$store.state.tagsView.cachedViews
    },
    key () {
      return this.$route.path
    }
  }
}

</script>

<style lang='scss'>
</style>
