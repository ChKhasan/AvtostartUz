<template lang="">
  <div id="home">
    <HeaderApp />
    <NavbarApp />
    <WrapperVue />
    <WhatAvtostart />
    <AvtoStart />
    <AvtoSchool />
    <ClientsVue />
    <FooterVue />
  </div>
</template>
<script>
import HeaderApp from "../components/HeaderApp.vue";
import NavbarApp from "../components/NavbarApp.vue";
import AvtoSchool from "../components/AvtoSchool.vue";
import AvtoStart from "../components/AvtoStart.vue";
import ClientsVue from "@/components/ClientsVue.vue";
import FooterVue from "../components/FooterVue.vue";
import WhatAvtostart from "../components/WhatAvtostart.vue";
import WrapperVue from "../components/WrapperVue.vue";
export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {
    HeaderApp,
    NavbarApp,
    AvtoSchool,
    AvtoStart,
    ClientsVue,
    FooterVue,
    WhatAvtostart,
    WrapperVue,
  },
  methods: {
    increment() {},
  },
  mounted() {},
};
</script>

<style>
@import url("//unpkg.com/element-ui@2.15.8/lib/theme-chalk/index.css");
#home {
  background: rgba(0, 0, 0, 0.02);
}
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.001);
}
::-webkit-scrollbar-thumb {
  background: #20b27e;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover ::-webkit-scrollbar {
  width: 10px;
}
</style>
