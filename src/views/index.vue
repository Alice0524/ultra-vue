<template>
  <div class="layout">
          <router-view></router-view>   
  </div>
</template>
<script>
import API from "@/api";
import appmenuconfig from "@/utils/AppMenuConfig";
import Cookie from "js-cookie";
import ultrafun from "@/utils/fun";



export default {
  data() {
    return {
      appmenuconfig: appmenuconfig.menu_level_one,
      actionname: "home"
    };
  },

  mounted() {

     console.log($("#custom-side").width());
  },
  methods: {
    changeMenu(active) {
      console.log("active", active);
      this.activename = active;
      this.$router.push({ name: active });
    }
  }
};
</script>
<style lang='less' scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  .ivu-menu {
    .ivu-icon {
      font-size: 18px;
    }
  }
  .ivu-menu.ivu-menu-dark.ivu-menu-vertical{
    width: 200px!important;
  }
  .content-layout{
    flex: 1;
    .ivu-layout-content{
      flex: 1!important;
    }
  }

  .ivu-layout-header {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    padding: 0 15px;
  }
  .ivu-layout-sider {
    overflow: hidden;
    background: #19193d;
  }
  .logo-img {
    width: 200px;
    height: 60px;
   
  }
  .ivu-menu-dark {
    background: #19193d;
    width: 200px!important;
  }
  
   
  
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item {
    color: #fff;
  }
  .ivu-menu-dark.ivu-menu-vertical
    .ivu-menu-item-active:not(.ivu-menu-submenu) {
    background: #2962ba;
  }
}
</style>

