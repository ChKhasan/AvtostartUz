<template lang="">
    <div id="header">
        <div class="container-xxl">
      <div class="row px-5 d-flex justify-content-between">
        <div class="col-2">
          <el-select v-model="value">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="col-6 d-flex justify-content-end align-items-center">
          <a href="">Ariza holatini tekshirish</a>

          <a class="tel d-lg-block d-none " href="tel:+998712242030"
            >+998 (71) 224-20-30</a
          >
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    name: "HeaderApp",
  data() {
    return {
      options: [
        {
          value: "O'zbekcha",
          label: "O'zbekcha"
        },
        {
          value: "Русский",
          label: "Русский"
        }
      ],
      value: "O'zbekcha"
    };
  }
}
</script>
<style >
    * {
  font-family: "Roboto", sans-serif;
}
#header {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  border-bottom: 1px solid #e5e5e5;
}
#header a {
  font-size: 14px;
  color: #637381;
  text-decoration: none;
}
#header .tel {
  color: rgba(11, 14, 17, 0.8);
  font-weight: 600;
  margin-left: 1.5rem;
}
   #header {
    width: 100%
   }
</style>