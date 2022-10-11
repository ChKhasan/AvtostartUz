<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: "app",
  data() {
    return {};
  },

  methods: {
    increment() {
      console.log(this.$store);
    }
    
  }
};
</script>

<style>
@import url("//unpkg.com/element-ui@2.15.8/lib/theme-chalk/index.css");
</style>
