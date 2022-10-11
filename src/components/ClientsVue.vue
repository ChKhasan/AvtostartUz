<template lang="">
  <div id="clients" class="d-none d-lg-block">
    <div class="container-xxl py-5 ">
      <div class="row px-5">
        <div class="col-12 d-flex justify-content-center">
          <h1>Mijozlarning <span>Avtostart</span> haqida fikri</h1>
        </div>
      </div>
      <div class="row mt-5 px-5">
        <div class="col-6">
          <div class="client-item">
            <section>
              <img src="../assets/img/client.638a452.png" class="avatar" />
              <img
                src="../assets/img/quotation.67871d5.svg"
                alt=""
                class="quotation"
              />
            </section>
            <div class="right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                diam euismod vulputate neque, tortor cras amet purus. Ac,
                sollicitudin.
              </p>
              <h1>Islomiddin Mamasiddiqov</h1>
              <h5>O’qituvchi</h5>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="client-item">
            <section>
              <img src="../assets/img/client.638a452.png" class="avatar" />
              <img
                src="../assets/img/quotation.67871d5.svg"
                alt=""
                class="quotation"
              />
            </section>
            <div class="right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                diam euismod vulputate neque, tortor cras amet purus. Ac,
                sollicitudin.
              </p>
              <h1>Islomiddin Mamasiddiqov</h1>
              <h5>O’qituvchi</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ClientsVue'
};
</script>
<style >
#clients h1 {
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 130%;
  letter-spacing: 0.01em;
  color: #19212a;
  /* margin-bottom: 80px; */
}
#clients h1 span {
  color: #20b27e;
}
.client-item {
  display: flex;
  background: #fff;
  border: 1px solid #d5dbe1;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 40px;
  margin: 0 12px;
}
.client-item section {
  position: relative;
}
.client-item section .avatar {
  width: 120px;
  height: 120px;
  -o-object-fit: cover;
  object-fit: cover;
}
.client-item section .quotation {
  position: absolute;
  top: -60px;
  right: -36px;
}
.client-item .right {
  flex: 1;
  padding-left: 40px;
}
.client-item .right p {
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: rgba(25, 33, 42, 0.8);
  /* margin-bottom: 36px; */
}
.client-item .right h1 {
  /* margin-bottom: 6px; */
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.01em;
  color: #19212a;
}
</style>
