<template>
  <router-view></router-view>
</template>
<style lang="scss">
.full-height {
  height: 100%;
}
.flex {
  display: flex;
}
.full-width {
  width: 100%;
}
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
  width: 5px;
}
</style>
