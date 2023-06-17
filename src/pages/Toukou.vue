<script lang="ts">
import { defineComponent, ref, } from 'vue'

export default defineComponent({
  components: {},
  setup() {
    const syoku = ref('')
    const niku = ref('')
    const sanku = ref('')
    return {
      syoku, niku, sanku
    }
  },
})
</script>


<template>
<div class="yohaku">
  <div class="square">

</div>
  <input class="textbox1" v-model="syoku" type="text" autocomplete="off" placeholder="初句" ><p class="charactor1">{{syoku}}</p>
  <input class="textbox2" v-model="niku" type="text" autocomplete="off" placeholder="二句"><p class="charactor2">{{niku}}</p>
  <input class="textbox3" v-model="sanku" type="text" autocomplete="off" placeholder="三句"><p class="charactor3">{{sanku}}</p>
  <button class  type="submit">投稿</button>

</div>
</template>


<style>
.yohaku{
  padding-top: 20%;
}

.square {
  justify-content: center;
	width: 225px;
  height: 338px;
  
	background: rgb(247, 250, 252);
  border:#A78F6B 10px solid;

  position:absolute;
  top:25%;
  left: 62%;
  transform:translate(-50%,-20%);
}


button{
  position:absolute;
  top:75%;
  left:50%;
  transform:translate(-50%,-0%);
  background: #AE2B2D;
  font-family: "UDデジタル教科書体", "游教科書体";
  color: #fff;
  border-radius: 5px; 
  border: none;
  padding: 0.7rem 2.8rem;
}

button:active{
  position:absolute;
  top:75%;
  left:50%;
  transform:translate(-50%,-0%);
  background: #852324;
  font-family: "UDデジタル教科書体", "游教科書体";
  color: #fff;
  border-radius: 5px; 
  border: none;
  padding: 0.7rem 2.8rem;
}

.textbox1 {
  position:absolute;
  top:15%;
  left: 25%;
  width: 300px;
  height: 40px;
  margin-top: 50px;
  font-family: "UDデジタル教科書体", "游教科書体";
  border: 1px solid rgba(247, 250, 252,0.3);
  opacity: .3;
  color: #000;
  opacity: 1.0;
  border-radius: 10px; 
  font-size: 16px;
  outline: none;
  background-color: rgba(162, 177, 202,0.3);
}

.textbox1:focus {
  background-color: rgba(162, 177, 202,0.5);
}
.charactor1{
  position:absolute;
  top:15%;
  left: 63.5%;
  writing-mode: vertical-rl;
  text-orientation: upright;;
  margin-top: 50px;
  font-family: "UDデジタル教科書体", "游教科書体";
  color:  #000;
  opacity: 1.0;
  font-size: 30px;
}

.textbox2 {
  position:absolute;
  top:30%;
  left: 25%;
  width: 300px;
  height: 40px;
  margin-top: 50px;
  font-family: "UDデジタル教科書体", "游教科書体";
  border: 1px solid rgba(247, 250, 252,0.3);
  opacity: .3;
  color: #000;
  opacity: 1.0;
  border-radius: 10px; 
  font-size: 16px;
  outline: none;
  background-color: rgba(162, 177, 202,0.3);
}
.textbox2:focus {
  background-color: rgba(162, 177, 202,0.5);
}

.charactor2{
  position:absolute;
  top:15%;
  left: 58.25%;
  writing-mode: vertical-rl;
  text-orientation: upright;;
  margin-top: 50px;
  font-family: "UDデジタル教科書体", "游教科書体";
  color: #000;
  opacity: 1.0;
  font-size: 30px;
}

.textbox3 {
  position:absolute;
  top:45%;
  left: 25%;
  width: 300px;
  height: 40px;
  margin-top: 50px;
  font-family: "UDデジタル教科書体", "游教科書体";
  border: 1px solid rgba(247, 250, 252,0.3);
  opacity: .3;
  color: #000;
  opacity: 1.0;
  border-radius: 10px; 
  font-size: 16px;
  outline: none;
  background-color: rgba(162, 177, 202,0.3);
}
.textbox3:focus {
  background-color: rgba(162, 177, 202,0.5);
}

.charactor3{
  position:absolute;
  top:15%;
  left: 53%;
  writing-mode: vertical-rl;
  text-orientation: upright;;
  margin-top: 50px;
  font-family: "UDデジタル教科書体", "游教科書体";
  color:  #000;
  opacity: 1.0;
  font-size: 30px;
}

</style>