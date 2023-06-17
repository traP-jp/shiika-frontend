<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    first: {
      type: String,
      required: true
    }
  },
  setup() {},
});
</script>

<template>
  <div class="frame">
    <p> {{ first }} </p>
  </div>
</template>

<style scoped>
.frame {
  height:100%;
  width:100%;
  border: solid 5px #A78F6B;
  
}
.frame p {
  width: 100px;
  height: 200px;
  writing-mode: vertical-rl;
  text-align: center;
}

</style>