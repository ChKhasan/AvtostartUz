import HomePage from "../pages/HomePage.vue";
import LoginVue from '../pages/LoginVue.vue'
import LayoutSideBar from '../layouts/LayoutSideBar.vue'
import LayoutPage from '../layouts/LayoutPage.vue'
export default [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginVue,
  },
  {
    path: "/backoffice",
    name: "LayoutSideBar",
    component: LayoutSideBar,
   
    
  },
  {
    path: "/backoffice",
    name: "LayoutPage",
    component: LayoutPage,
  }
];
