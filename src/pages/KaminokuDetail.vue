<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Header from '../components/Header.vue'
import TankaCard from '../components/TankaCard.vue'
import apis, { RequestSimonoku, Tanka } from '../lib/apis'
import { useRouter } from 'vue-router';

const props = defineProps({
  id: String
})

const first = ref('')
const second = ref('')
const third = ref('')
const fourth = ref('')
const fifth = ref('')
const tankas = ref<Tanka[]>([])

const router = useRouter()

watchEffect(async () => {
  if (props.id == null) {
    router.push('/')
    return
  }
  const res = await apis.getKaminokuDetail(props.id, { withCredentials: true })
  if (res.data != null) {
    first.value = res.data.content.first
    second.value = res.data.content.second
    third.value = res.data.content.third
  }
  const res2 = await apis.kaminokuKaminokuIdSimonokuGet(props.id, { withCredentials: true })
  if (res2.data != null) {
    tankas.value = res2.data
  }
})

const onClick = () => {
  if (props.id == null) {
    window.alert('上の句を選択してください')
    return
  }
  if (fourth.value == null || fourth.value == '') {
    window.alert('四句を入力してください')
    return
  }
  if (fifth.value == null || fifth.value == '') {
    window.alert('結句を入力してください')
    return
  }
  try {
    const req: RequestSimonoku = {
      content: {
        fourth: fourth.value,
        fifth: fifth.value
      }
    }
    const res = apis.kaminokuKaminokuIdSimonokuPost(props.id, req, { withCredentials: true })
    console.log(res)
    window.alert('投稿に成功しました')
    router.push('/')
  } catch (e) {
    console.log(e)
    window.alert('投稿に失敗しました')
  }
}
</script>


<template>
  <Header />
  <div class="OriginContainer">
    <div class="SimonokuTitle">返歌する</div>
    <div class="Container">
      <div class="LeftContainer">
        <input class="PostTextbox" v-model="fourth" type="text" autocomplete="off" maxlength="10" placeholder="四句">
        <input class="PostTextbox" v-model="fifth" type="text" autocomplete="off" maxlength="10" placeholder="結句">
        <button class="PostButton" type="submit" v-on:click="onClick">投稿</button>
      </div>
      <div class="RightContainer">
        <div class="PreviewCard">
          <TankaCard :first="first" :second="second" :third="third" :fourth="fourth" :fifth="fifth" />
        </div>
      </div>
    </div>
    <div class="SimonokuTitle">この上の句から完成した短歌一覧</div>
    <div class="cards">
      <TankaCard v-for="tanka in tankas" :first="tanka.kaminoku.content.first" :second="tanka.kaminoku.content.second"
        :third="tanka.kaminoku.content.third" :fourth="tanka.simonoku.content.fourth"
        :fifth="tanka.simonoku.content.fifth" :key="tanka.simonoku.id"></TankaCard>
    </div>
  </div>
</template>


<style>
.OriginContainer {
  margin: 70px auto 30px;
  max-width: 800px;
}

.Container {
  margin: 10px auto;
  max-width: 800px;
  display: flex;
  padding-top: 20px;
}

.LeftContainer {
  width: 300px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.RightContainer {
  width: 300px;
  height: 400px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  place-content: center;
}

.PreviewCard {
  width: 120px;
  height: 180px;
}

.PostTextbox {
  width: 300px;
  height: 40px;
  margin-bottom: 50px;
  border: 1px solid rgba(247, 250, 252, 0.3);
  opacity: .3;
  color: #000;
  opacity: 1.0;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  background-color: rgba(162, 177, 202, 0.3);
  padding: 2px 10px;
}

.PostTextbox:focus {
  background-color: rgba(162, 177, 202, 0.5);
}

.PostButton {
  background: #AE2B2D;
  color: #fff;
  border-radius: 5px;
  border: none;
  padding: 0.7rem 2.8rem;
  margin: 0 auto;
}

.PostButton:active {
  background: #852324;
  color: #fff;
  border-radius: 5px;
  border: none;
  padding: 0.7rem 2.8rem;
}

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

.SimonokuTitle {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
