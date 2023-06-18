<template>
  <div>
    <label for="username" class="text_user">ユーザー名</label>
    <input type="text" id="username" name="username" class="box_user"/>
  </div>

  <div class="password_box">
    <label for="pass" class="text_pass">パスワード (8文字以上)</label>
    <input type="password" id="pass" name="password" minlength="8" required class="box_pass"/>
  </div>

  <a href="" input type="submit" class="btn btn-border-shadow btn-border-shadow--color">Sign in</a>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  setup() {},
})
</script>

<style scoped>
label {
  display: block;
  font: 0.9rem helvetica, 'Fira Sans', sans-serif;
}

input[type='submit'],
label {
  margin-top: 1rem;
}

.text_user{
  position:absolute;
  top:20%;
  left: 50%;
  transform:translate(-50%,0%);
  font-family: "UDデジタル教科書体", "游教科書体";
  color: #000;
  font-size: 15px;
  text-align: center;
}
.text_pass{
  position:absolute;
  top:40%;
  left: 50%;
  transform:translate(-50%,0%);
  font-family: "UDデジタル教科書体", "游教科書体";
  color: #000;
  font-size: 15px;
  text-align: center;
}

.box_user{
  position:absolute;
  top:20%;
  left: 50%;
  transform:translate(-50%,-0%);
  width: 300px;
  height: 40px;
  margin-top: 50px;
  font-family: "UDデジタル教科書体", "游教科書体";
  opacity: .3;
  color: #fff;
  text-align: center;
  opacity: 1.0;
  border-radius: 10px; 
  font-size: 16px;
  outline: none;
  border: none;
  background-color: rgba(174, 44, 45, 0.7);

}
.box_user:focus {
  background-color: rgba(174, 44, 45, 1.0);
}

.box_pass{
  position:absolute;
  top:40%;
  left: 50%;
  transform:translate(-50%,-0%);
  width: 300px;
  height: 40px;
  margin-top: 50px;
  font-family: "UDデジタル教科書体", "游教科書体";
  opacity: .3;
  color: #fff;
  text-align: center;
  opacity: 1.0;
  border-radius: 10px; 
  font-size: 16px;
  outline: none;
  border: none;
  background-color: rgba(174, 44, 45, 0.7);

}
.box_pass:focus {
  background-color: rgba(174, 44, 45, 1.0);
}

*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 62.5%;
}

/* 背景用*/
body {
  padding: 30px;
}

.btn,
a.btn,
button.btn {
  position:absolute;
  top:65%;
  left: 50%;
  transform:translate(-45%,-0%);
  width: 35px;
  height: 20px;

  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #fff;
  border-radius: 0.5rem;
  font-family: "UDデジタル教科書体", "游教科書体";
  font-size: 13px;
}

a.btn-border-shadow {
  padding: calc(1.5rem - 12px) 3rem 1.5rem;
  background: #fff;
}

a.btn-border-shadow:before {
  position: absolute;
  top: -8px;
  left: -8px;
  width: 100%;
  height: 100%;

  content: "";
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;

  border: 3.5px solid #000;
  border-radius: 0.5rem;
}

a.btn-border-shadow:hover {
  padding: calc(1.5rem - 6px) 3rem;
}

a.btn-border-shadow:hover:before {
  top: 0;
  left: 0;
}

a.btn-border-shadow--color {
  border-radius: 0;
  background: #AE2B2D;
}

a.btn-border-shadow--color:before {
  border-radius: 0;
}

</style>
