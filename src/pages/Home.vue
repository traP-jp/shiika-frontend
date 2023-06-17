<template>
  <Header />
  <body>
    <!--「上の句」の画像を貼るところ-->
    <div>
      <img class="fit-picture" alt = "上の句 一覧" src="">
    </div>

    <div class= "container">
     
      <div class="cards"> <!-- コンテナ -->
        <Card first="あいうえお"></Card>
                  


        <div class="card">B</div> <!-- アイテム -->
         
        <div class="card">C</div> <!-- アイテム -->
        <div class="card">D</div> <!-- アイテム -->
        <div class="card">E</div> <!-- アイテム -->
       
        <div class="card">F</div> <!-- アイテム -->
       
        <div class="card">G</div> <!-- アイテム -->
        <div class="card">G</div> <!-- アイテム -->
        <div class="card">G</div> <!-- アイテム -->
        <div class="card">G</div> <!-- アイテム -->
       

        

      </div>

      <div class="parent_of_more_info_button"> <!--クリックされたらさらに俳句を表示する-->
        <div class="more_info_button" v-on:click="" >↓さらに表示</div>
      </div>

    </div>


    <div>

    </div>
   


  </body>
</template>
 
 <script lang="ts">
 import { defineComponent } from 'vue'
 import Header from '../components/Header.vue'
 import Card from '../components/Card.vue'

 export default defineComponent({
     components: {
      Header,
      Card,
     },

     setup() {
     },
 })
 </script>
 
 <style scoped>


.cards {


display: grid; /* グリッドレイアウト */
justify-items: center;

/* grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); */
grid-auto-rows: 225px;
grid-template-columns: repeat(auto-fill, 150px);

gap: 25px;
margin: 0 auto;
margin-top: 40px;
}
.inner_card {
  width:100%;
  height: 100%;
  background-color: black;

}
.card {
  height: 100%;
  width:100%;
  background-color: #375e97;

  /* aspect-ratio: 2/3; */
  /* overflow: auto; */
}

.container {
/* padding-top: 20px; */

height: 70%;

max-width: 1000px;
place-items: center;
margin: 0 auto;

}



.more_info_button {
  margin: 0 auto;
  margin-top:30px;
  width: 100px;
  text-align: center;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 1px 2px;
  background-color:#375e97;
  border-radius: 0.1rem;
  text-decoration: none;
}
 </style>
 