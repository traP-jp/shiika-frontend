<template>
  <Header />

  <body>
    <div class="container">
      <!--「上の句」の画像を貼るところ-->
      <div class="kaminoku_itiran_png">
        <img class="fit-picture" alt="上の句 一覧" src="./../assets/kaminoku_ichiran.png">
      </div>

      <div class="cards"> <!-- コンテナ -->
        <Card v-for="kaminoku in kaminokus" :first="kaminoku.content.first" :second="kaminoku.content.second"
          :third="kaminoku.content.third" :id="kaminoku.id" :key="kaminoku.id"></Card>
      </div>
      <!-- <div class="parent_of_more_info_button"> 
        <div class="more_info_button" v-on:click="">↓さらに表示</div>
      </div> -->
    </div>

    <div class="container">
      <!--「作品」の画像を貼るところ-->
      <div class="sakuhin_itiran_png">
        <img class="fit-picture" alt="作品一覧" src="./../assets/sakuhin_ichiran.png">
      </div>

      <div class="cards">
        <TankaCard v-for="tanka in tankas" :first="tanka.kaminoku.content.first" :second="tanka.kaminoku.content.second"
          :third="tanka.kaminoku.content.third" :fourth="tanka.simonoku.content.fourth"
          :fifth="tanka.simonoku.content.fifth" :key="tanka.simonoku.id"></TankaCard>
      </div>

      <!-- <div class="parent_of_more_info_button"> 
        <div class="more_info_button" v-on:click="">↓さらに表示</div>
      </div> -->
    </div>

  </body>
</template>
 
<script setup lang="ts">
import Header from '../components/Header.vue'
import Card from '../components/Card.vue'
import TankaCard from '../components/TankaCard.vue'
import { ref, watchEffect } from 'vue';

import apis, { Kaminoku, Tanka } from '../lib/apis'

const kaminokus = ref<Kaminoku[]>([])
const tankas = ref<Tanka[]>([])

watchEffect(async () => {
  const res = await apis.getKaminoku({ withCredentials: true })
  kaminokus.value = res.data
  const res2 = await apis.simonokuGet({ withCredentials: true })
  if (res2.data != null) tankas.value = res2.data
})
</script>
 

<style scoped>
.cards {
  display: grid;
  /* グリッドレイアウト */
  place-content: center;
  /* grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); */
  grid-auto-rows: 180px;
  grid-template-columns: repeat(auto-fill, 120px);
  gap: 20px;
  margin-top: 20px;
}

.container {
  height: 70%;
  justify-items: center;
  place-items: center;
  margin: 50px auto;
  max-width: 800px;
}

.parent_of_more_info_button {
  margin-bottom: 30px;
}

.more_info_button {
  margin: 0 auto;
  margin-top: 30px;
  width: 100px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  padding: 1px 2px;
  background-color: #A1B1CA;
  border-radius: 0.1rem;
  text-decoration: none;
}

.kaminoku_itiran_png img {
  width: 180px;
}

.sakuhin_itiran_png img {
  width: 170px;
}
</style>
