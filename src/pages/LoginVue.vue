<template lang="">
  <div id="login">

    <div class="background-abs">
<img src="../assets/img/back_map.82f4b1a.png" alt="">
<img src="../assets/img/dots0.81dd2ea.png" alt="">
<img src="../assets/img/dots1.9192c15.png" alt="">
</div>
    <div class="container-xxl py-4">
      <div class="row px-5 d-flex justify-content-between">
        <div class="col-3 d-flex align-items-center">
          <router-link to="/">
            <img src="../components/logo.6d12281.svg" alt="" />
          </router-link>
        </div>
        <div class="col-4 d-none d-lg-flex align-items-center"></div>
        <div class="col-4 d-flex justify-content-end"></div>
      </div>
<EnterTheSystemVue/>
    </div>
  </div>
</template>
<script>
    import EnterTheSystemVue from '@/components/EnterTheSystem.vue';
export default {
  name: "LoginPage",
  components: {
    EnterTheSystemVue
  }
};
</script>
<style>
#login {
 background: transparent !important;
  margin-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 100px;
}
.background-abs{
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.01);
    z-index: -1;
}
.background-abs img:nth-child(1)  {
    position: absolute;
    top: 200px;
    width: min(80%,800px);
}
.background-abs img:nth-child(2)  {
    position: absolute;
    right: 0;
    width: 6%;
    top: 10%;
}
.background-abs img:nth-child(3)  {
    position: absolute;
    left: 0;
    width: 5%;
    bottom: 10%;
}
</style>
