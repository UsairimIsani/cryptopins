<template>
  <div>
      <TopBar></TopBar>
      <SideBar></SideBar>
  </div>
</template>
<script>
import TopBar from "./TopBar.vue";
import SideBar from "./SideBar.vue";
export default {
  components: {
    TopBar,
    SideBar
  }
};
</script>
