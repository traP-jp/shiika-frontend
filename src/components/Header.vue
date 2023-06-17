<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<template>
  <div class="HeaderContainer">
    <div class="title">Shiika</div>

    <div class="parent_of_register_and_login_button">
	   <a href = "" class="btn register_and_login_button">仮</a>

    </div>

  </div>
</template>

<style scoped>
.HeaderContainer {
  display: flex;
  text-align: left;
  border-bottom: solid 2px #375e97;
  height: 60px;
  justify-content: left;
  align-items: center;
  position: relative;
  padding: 0px 16px 0;
}

.title {
  color: #375e97;
  font-size: 40px;
  font-family: Georgia, 'Times New Roman', Times, sans-serif;
  margin-top: 0px;
}

.TestContainer {
  position: absolute;
  right: 10px;
}

.parent_of_register_and_login_button {
	
  color: #375e97;
  font-size: 20px;
  margin-left :auto
}

.register_and_login_button, 
a.register_and_login_button  {
  
  color: #fff;
  padding: 10px 20px;
  background-color: #375e97;
  border-radius: 0.3rem;
  text-decoration: none;
}

.register_and_login_button:hover, 
a.register_and_login_button:hover  {
  color: #375e97;
  border-radius: 0.3rem;
  background:  #fff;
}


</style>