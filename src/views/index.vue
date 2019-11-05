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

  },
  methods: {
   
  }
};
</script>
<style lang='less' scoped>
.layout{
  height: 100%;
  width: 100%; 
  overflow: hidden;
}
</style>

