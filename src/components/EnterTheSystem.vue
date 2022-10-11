<template lang="html">
  <div class="row px-5 login-page">
    <div class="col-5">
      <div class="login_title">
        <h1>Tizimga kirish</h1>
        <div class="login_form">
          <form class="el-form demo-ruleForm el-form--label-top">
            <div class="el-form-item el-form-item--feedback">
              <div class="el-form-item__content">
                <div class="el-input">
                  <input
                    type="text"
                    autocomplete="off"
                    placeholder="Ismingiz"
                    class="el-input__inner login-input"
                    v-on:input="name = $event.target.value"
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
                  class="w-full el-input__inner login-input"
                  v-on:input="number = $event.target.value"
                />
              </div>
            </div>
            <div class="el-form-item el-form-item--feedback">
              <div class="el-form-item__content d-flex row">
                <div class="col-4">
                  <button
                    type="button"
                    class="el-button w-full el-button--primary login-btn"
                    @click="authClick"
                  >
                    <span> Kirish </span>
                  </button>
                </div>
                <div class="col-8 d-flex align-items-center">
                  <a style="color: #000" href="#">Parolni unutdingizmi?</a>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <button
                    type="button"
                    class="el-button w-full el-button--primary logup-btn"
                    @click="open"
                  >
                    <span> Ro'yxatdan o'tish </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-7">
      <div class="row">
        <div
          class="col-12"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <img src="../assets/img/spark.f7ecb0e.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: "",
      name: "",
    };
  },
  methods: {
    authClick() {
      if (this.number.length > 0 && this.name.length > 0) {
        console.log("suc");
        this.$router.push("/backoffice");
        this.$vToastify.success({
          body: "Are there hot singles in your area?",
          position: "top-center",
        });
      } else {
        console.log("err");
        this.$vToastify.error({
          body: "Ismingiz va telefon nomeringizni kiriting",
          position: "top-center",
        });
      }
    },
    open() {
      this.$prompt("Telefon raqam", "Oddiy fuqaro sifatida ro'yxatdan o'tish", {
        confirmButtonText: "Saqlash",
        cancelButtonText: "Bekor qilish",
        customClass: "modal_enter",

        inputErrorMessage: "Invalid Email",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "Your email is:" + value,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Input canceled",
          });
        });
    },
  },
};
</script>
<style>
.login_title h1 {
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 40px;
  color: #333;
}
.login-page {
  margin-top: 100px !important;
}
.login-input {
  position: relative;
  z-index: 3;
  border: 0.5px solid #bdbdbd;
  box-sizing: border-box;
  padding-left: 25px;
  border-radius: 17px;
  background: #fff;
  font-size: 14px;
  width: 100%;
  height: 55px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #111;
}
.login-input:focus {
  border: 1px solid #2ba579;
}
.login-btn {
  background: #2ba579;
  border-radius: 15px;
  border: none;
  color: #fff;
  box-shadow: 0 2px 4px rgb(16 77 41 / 25%);
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  line-height: 19px;
  padding: 15px 0;
  width: 155px;
}
a {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  color: black;
  font-size: 17px;
}
.logup-btn {
  background: transparent !important;
  border-radius: 15px !important;
  border: 1px solid grey !important;
  color: #2ba579 !important;
  width: 100% !important;
  background: transparent !important;
  border-radius: 15px !important;
  border: 1px solid grey !important;
  color: #2ba579 !important;
  padding: 15px 0;
  width: 155px;
  font-weight: 700;
}

.el-icon-close:hover {
  content: "\e6db";
  color: #2ba579 !important;
}
</style>
