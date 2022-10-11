<template lang="">
  <div id="navbar">
    <div class="container-xxl py-4">
      <div class="row px-5 d-flex justify-content-between">
        <div class="col-3 d-flex align-items-center">
          <router-link to="/">
            <img src="./logo.6d12281.svg" alt="" />
          </router-link>
        </div>
        <div class="col-4 d-none d-lg-flex align-items-center">
          <ul class="d-flex justify-content-between align-items-center">
            <li class="anim">Menejer bilan bog'lanish</li>
            <li>FAQ</li>
            <li>Aloqa</li>
          </ul>
        </div>
        <div class="col-4 d-flex justify-content-end">
          <el-button
            type="success"
            class="login"
            plain
            @click="$router.push('/login')"
            >Tizimga kirish</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavbarApp",
};
</script>
<style>
#navbar {
  box-shadow: 0 1px 1px #dfe3e8;
  /* padding-bottom: 10px;
        padding-top: 10px; */
  /* background: red; */
  /* border-bottom: 1px solid #e5e5e5 */
}
#navbar ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  width: 100%;
  /* display: inline-block; */
  /* padding: 10px 5px;
    margin: 0 15px; */
  margin-bottom: 0 !important;
  color: #19212a;
  /* border-bottom: 19px solid transparent; */
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease 0s, left 0.3s ease 0s;
}
#navbar ul li:after {
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  /* left: 50%; */
  position: absolute;
  background: #20b27e;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
#navbar ul li:hover #navbar ul li:after {
  width: 100%;
}
.login {
  display: inline-block;
  width: 90%;
}

.login {
  color: #20b27e !important;
  background: #e9f7f2 !important;
  border-color: #a6e0cb !important;
  transition: 0.25s;
}
.login:hover {
  color: #fff !important;
  background-color: #20b27e !important;
  border-color: #20b27e !important;
}
</style>
