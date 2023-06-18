<!-- Tanka_Card:短歌カード
短歌(5,7,5,7,7)のことで作品一覧で表示する。 -->

<script setup lang="ts">
defineProps({
  first: {
    type: String,
    required: true
  },
  second: {
    type: String,
    required: true
  },
  third: {
    type: String,
    required: true
  },
  fourth: {
    type: String,
    required: true
  },
  fifth: {
    type: String,
    required: true
  },
})
</script>

<template>
  <div class="frame">
    <!-- 左からflexの子要素が配置され、俳句（縦書き)は一行ごとに右から左に書くので以下のように逆になる。 -->
    <div class="line">
      {{ fifth }}
    </div>
    <div class="line">
      {{ fourth }}
    </div>
    <div class="line">
      {{ third }}
    </div>
    <div class="line">
      {{ second }}
    </div>
    <div class="line">
      {{ first }}
    </div>
  </div>
</template>

<style scoped>
.frame {
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
  border: solid 4px #A78F6B;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .2);
  /*アニメーションの設定*/
  transition: all .3s;
}

.frame:hover {
  top: -3px;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, .2);
  cursor: pointer;

}

.line {
  font-size: 16px;
  writing-mode: vertical-rl;
  font-family: "UDデジタル教科書体", "游教科書体";
  text-align: left;
  margin-top: 20px;
}
</style>
