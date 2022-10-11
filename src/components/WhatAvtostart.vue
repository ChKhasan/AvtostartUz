<template lang="">
  <div id="what-avto">
    <div class="container-xxl py-5">
      <div class="row  px-5">
        <div class="col-12 d-flex justify-content-center">
          <h1>Nima uchun <span>AUTOSTART</span> ?</h1>
        </div>
      </div>
      <div class="row px-5">
        <div class="col-xl-4 col-md-6 mt-4" v-for="item in items" v-bind:key="item.text">
          <div class="info-item" >
            <div class="top">
              <img src="../assets/img/1.240920b.png" />
            </div>
            <h2>{{ item.title }}</h2>
            <p>
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WhatAvtostart",
  data() {
    return {
      imgs: "../assets/img/1.240920b.png",
      items: [
        {
          img: "../assets/img/1.240920b.png",
          title: "Hisobotning barcha turlari",
          text: "To'liq hisobotni telefon yoki planshet orqali taqdim qilamiz"
        },
        {
          img: "../assets/img/1.240920b.png",
          title: "Xodimlarni o'qitish",
          text:
            "Biz o'z dasturimizda ishlash bo'yicha o'qitamiz va maslahatlar beramiz"
        },
        {
          img: "../assets/img/1.240920b.png",
          title: "24/7 xizmat ko'rsatish",
          text: "Dam olish va bayram kunlarisiz"
        },
        {
          img: "../assets/img/1.240920b.png",
          title: "Ma'lumotlar xavfsizligi",
          text: "Ma'lumotlar bulutli serverda saqlanadi"
        },
        {
          img: "../assets/img/1.240920b.png",
          title: "Cheksiz foydalanuvchilar",
          text: "Tizim foydalanuvchilarining soni chegaralanmagan"
        },
        {
          img: "../assets/img/1.240920b.png",
          title: "Sodiqlik dasturi",
          text:
            "Servisning har bir mijozi uchun bonuslar va chegirmalar sistemasi"
        }
      ]
    };
  }
};
</script>
<style >
#what-avto h1 {
  font-weight: 600;
}

#what-avto span {
  color: #20b27e;
}
#what-avto .info-item {
  background: #fff;
  border: 1px solid #d5dbe1;
  box-sizing: border-box;
  transition: all 0.25s ease-out;
  border-radius: 4px;
  padding: 35px 40px;
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
#what-avto .info-item .top {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
  background-color: #f4f4f4;
  transition: all 0.5s ease-out;
}
#what-avto .info-item h2 {
  max-width: 100%;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.01em;
  margin-bottom: 10px;
  margin-top: 25px;
  color: #19212a;
}
#what-avto .info-item p {
  max-width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 0;
  text-align: center;
  color: rgba(25, 33, 42, 0.8);
}
#what-avto .info-item:hover {
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.006);
}
#what-avto .info-item:hover .top {
  background: #20b27e;
}
</style>
