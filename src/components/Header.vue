<template>
  <div class="HeaderContainer">
    <div class="title">Shiika</div>
    <div class="HeaderButton">
      <router-link to="/login">ログイン</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.HeaderContainer {
  display: flex;
  height: 60px;
  align-items: center;
  background-color: #eceff4;
}

.title {
  font-size: 40px;
  font-family: 'Acme', sans-serif;
  margin-top: 5px;
  margin-left: 30px;
}

.HeaderButton {
  margin-left: auto;
  margin-right: 20px;
}
</style>
