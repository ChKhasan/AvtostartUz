<template lang="">
  <div class="layout-bar">
    <el-container style="height: 100vh">
      <el-aside width="300px" class="side-bar">
        <div class="fixed">
          <div class="sidebar-header" @click="$router.push('/')">
            <img src="../components/logo.6d12281.svg" alt="" />
          </div>
          <el-menu class="ul_bar" :default-openeds="['1', '3']">
            <el-menu-item id="default" index="0-1"
              ><span>
                <i class="el-icon-s-home"></i> Bosh sahifa</span
              ></el-menu-item
            >
            <el-menu-item index="0-2"
              ><i class="el-icon-menu"></i> Ta'lim turlari</el-menu-item
            >
            <el-menu-item index="0-3"
              ><i class="el-icon-collection"></i> Darsliklar</el-menu-item
            >
            <el-menu-item index="0-4"
              ><i class="el-icon-s-order"></i> Mavzular</el-menu-item
            >
            <el-menu-item index="0-5"
              ><i class="el-icon-s-platform"></i> Shablon Test</el-menu-item
            >
            <el-menu-item index="0-6"
              ><i class="el-icon-edit-outline"></i> Testlarni
              yangilash</el-menu-item
            >

            <el-submenu index="7">
              <template slot="title"
                ><i class="el-icon-s-grid"></i>Asosiy</template
              >
              <el-menu-item-group>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title"
                ><i class="el-icon-map-location"></i>Xududlar</template
              >
              <el-menu-item-group>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-setting"> </i>
                O'quvchilar
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-custom"> </i>
                <span>Foydalanuvchilar</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">Option 1</el-menu-item>
                <el-menu-item index="4-2">Option 2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-s-finance"></i>
                <span>To'lovlar</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">Option 1</el-menu-item>
                <el-menu-item index="5-2">Option 2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
          <div class="extra-menu">
            <a
              href="https://t.me/elyordosnazarov"
              target="_blank"
              class="item active"
              ><i class="el-icon-question"></i> <span>Yordam</span></a
            >
            <div class="item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
                  stroke="#2EC18C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M13.333 14.1667L17.4997 10L13.333 5.83337"
                  stroke="#2EC18C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M17.5 10H7.5"
                  stroke="#2EC18C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span @click="$router.push('/')">Tizimdan chiqish</span>
            </div>
          </div>
        </div>
      </el-aside>

      <el-container>
        <el-header
          class="sidebar-layout-header d-flex justify-content-between align-items-center"
          style="text-align: right"
        >
          <b> <strong>Avtostart</strong></b>
          <div class="d-flex justify-content-between align-items-center">
            <i
              class="el-icon-bell"
              style="margin-right: 15px; font-size: 20px"
            ></i>
            <el-dropdown>
              <i
                class="el-icon-user-solid"
                style="margin-right: 15px; font-size: 26px"
              ></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>Admin</span>
          </div>
        </el-header>

        <el-main class="layout-area">
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140">
            </el-table-column>
            <el-table-column prop="name" label="Name" width="120">
            </el-table-column>
            <el-table-column prop="address" label="Address"> </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
  mounted() {
    let defValue = document.getElementById("default");
    defValue.classList.add("is-active");
    document.querySelector("li").click(() => {
      defValue.classList.remove("is-active");
    });
  },
};
</script>
<style lang="css">
.sidebar-header {
  padding: 20px;
  background: white;
  position: sticky;
  top: -10px;
  z-index: 2;
}
.sidebar-header img {
  width: 70%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-menu-item.is-active {
  background: linear-gradient(
    244.81deg,
    #4ede9f 0.94%,
    #2cca9a 97.96%
  ) !important;
  color: #fff;
}
.el-menu-item {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  box-sizing: border-box;
}
.side-bar {
  padding: 10px !important;
  background: white !important;
  position: sticky;
  min-height: 100vh;
  border-right: 1px solid #e7e9ee;
  background-color: #fff;
  min-width: 300px;
  transition: 0.3s;
}
.el-menu {
  border-right: none !important;
}
.sidebar-layout-header {
  background: white;
  justify-content: space-between;
  max-height: 80px;
  border-bottom: 1px solid #dcdfe6;
  /* padding: 0.5rem 1rem; */
}
.el-menu-item {
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  cursor: pointer;
}
.el-submenu__title {
  height: 40px;
  line-height: 40px;
}
.layout-area {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
}
.ul_bar {
  overflow-y: auto;
  /* flex: auto; */
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  width: 280px;
  height: 100%;
}
.fixed {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
}
.extra-menu {
  margin-top: auto;
  padding-top: 20px;
  padding-bottom: 25px;
}
.extra-menu .item.active {
  border-radius: 10px;
  background: linear-gradient(244.81deg, #4ede9f 0.94%, #2cca9a 97.96%);
  color: #fff;
}

.extra-menu .item {
  display: flex;
  padding: 10px 20px;
  align-items: center;
  color: #4ede9f;
  cursor: pointer;
}
.extra-menu .item i,
.extra-menu .item svg {
  font-size: 22px;
  width: 24px;
  margin-right: 5px;
}
a {
  list-style: none;
  text-decoration: none !important;
}
</style>
