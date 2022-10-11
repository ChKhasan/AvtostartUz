<template lang="">
  <div id="wrapper">
    <div class="container-xxl mx-auto pt-3">
      <div class="row px-5">
        <div class="col-lg-8 position-relative">
          <img
            class="banner"
            src="../assets/img/banner_background.e65dcb4.png"
            alt=""
          />
          <div class="text-box">
            <h2>
              Avtomaktablar uchun avtomatlashgan axborot tizimi
            </h2>
            <p>
              O'quv jarayoniga o'zlashtirishni oshirishga yo'naltirilgan
              o'qitish monitoringini olib borish va rejalashtirishning
              avtomatlashtirilgan axborot tizimi
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-call">
            <h3>Bepul maslahatga buyurtma bering</h3>
            <p>
              Biz mamnuniyat bilan qanday qilib avtomaktablar tizimini
              avtomatlashtirish, dasturning afzalliklari va o'qitish
              samaradorligiga ta`siri haqida taqdimot qilib beramiz!!!
            </p>
            <form class="el-form demo-ruleForm el-form--label-top">
              <div class="el-form-item el-form-item--feedback">
                <div class="el-form-item__content">
                  <div class="el-input">
                    <input
                      type="text"
                      autocomplete="off"
                      placeholder="Ismingiz"
                      class="el-input__inner mask-input"
                    />
                  </div>
                </div>
              </div>
              <div class="el-form-item el-form-item--feedback">
                <div class="el-form-item__content">
                  <input
                    type="text"
                    placeholder="+998 __ ___-__-__"
                    autocomplete="off"
                    class="w-full el-input__inner mask-input"
                  />
                </div>
              </div>
              <div class="el-form-item el-form-item--feedback">
                <div class="el-form-item__content">
                  <button
                    type="button"
                    class="el-button w-full el-button--primary"
                  >
                    <span>
                      Qo'ng'roqqa buyurtma berish
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style >
.banner {
  position: absolute;
  width: 100%;
}
.text-box {
  width: 100%;
  height: 100%;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
}
.text-box h2 {
  font-weight: 700;
  font-size: 44px;
  line-height: 120%;
  max-width: 500px;
  margin-bottom: 15px;
  color: #19212a;
}
.form-call {
  width: 90%;
  padding: 30px;
  background: #fff;
  border: 1px solid #d5dbe1;
  box-sizing: border-box;
  border-radius: 4px;
  float: right;
}
.form-call h3 {
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  margin-bottom: 12px;
  color: #19212a;
  text-align: center;
}
.form-call p {
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  margin-bottom: 20px;
  color: rgba(25, 33, 42, 0.8);
}
.mask-input:focus {
  border: 1px solid #20b27e !important;
}
.el-button--primary {
  color: #fff !important;
  width: 100% !important;
  background-color: #20b27e !important;
  border-color: #20b27e !important;
}
.el-button--primary:hover {
  color: #fff !important;
  width: 100%;
  background-color: #a6e0cb !important;
  border-color: #a6e0cb !important;
}
</style>
