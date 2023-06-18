<template>
  <Header />

  <body>
    <div class="my_page">
      <h1>投稿した句</h1>
    </div>
    <div class="container">
      <!--「上の句」の画像を貼るところ-->
      <div class="kaminoku_itiran_png">
        <img class="fit-picture" alt="上の句 一覧" src="./../assets/kaminoku_ichiran.png">
      </div>

      <div class="cards"> <!-- コンテナ -->
        <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>
        <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>
        <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>
        <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>
        <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>
        <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>
        <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>
        <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>
        <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>
        <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>

      </div>
      <div class="parent_of_more_info_button"> <!--クリックされたらさらに俳句を表示する-->
        <div class="more_info_button" v-on:click="">↓さらに表示</div>
      </div>
    </div>

    <div class="container">
      <!--「作品」の画像を貼るところ-->
      <div class="sakuhin_itiran_png">
        <img class="fit-picture" alt="作品一覧" src="./../assets/sakuhin_ichiran.png">
      </div>

      <div class="cards">
        <TankaCard first="ちはやぶる" second="神代も聞かず" third="竜田川" fourth="から紅に" fifth="水くくるとは"></TankaCard>
        <TankaCard first="秋の田の" second="かりほの庵の" third="苫をあらみ" fourth="わが衣手は" fifth="露にぬれつつ"></TankaCard>
        <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>
        <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>
        <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>
        <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>
        <Card first="あいうえお" second="かきくけこここ" third="さしすせそ"></Card>
      </div>

      <div class="parent_of_more_info_button"> <!--クリックされたらさらに俳句を表示する-->
        <div class="more_info_button" v-on:click="">↓さらに表示</div>
      </div>
    </div>

  </body>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Card from '../components/Card.vue'
import TankaCard from '../components/TankaCard.vue'
</script>


<style scoped>
.my_page h1 {
  font-weight: normal;
  font-family: "UDデジタル教科書体", "游教科書体";
  width: 80%;
  margin: 20px auto;
  border-bottom: 1px solid rgb(0 0 0 / 12%);
}

.container .cards {
  display: grid;
  /* グリッドレイアウト */
  place-content: center;
  /* grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); */
  grid-auto-rows: 225px;
  grid-template-columns: repeat(auto-fill, 150px);
  gap: 25px;
  margin-top: 20px;
}

.container {
  height: 70%;
  justify-items: center;
  place-items: center;
  margin: 30px auto;
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
  font-family: "UDデジタル教科書体", "游教科書体";
  color: #fff;
  padding: 1px 2px;
  background-color: #A1B1CA;
  border-radius: 0.1rem;
  text-decoration: none;
}

.kaminoku_itiran_png img {
  width: 170px;
}

.sakuhin_itiran_png img {
  width: 160px;
}
</style>
