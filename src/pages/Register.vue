<template>
    <Header />
    <div class="Container">
        <form class="RegisterForm" @submit="onSubmit">
            <input class="RegisterInput" v-model="username" type="text" placeholder="username">
            <input class="RegisterInput" v-model="password" type="password" placeholder="password">
            <button class="RegisterButton">Register</button>
        </form>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import Header from '../components/Header.vue'
import apis, { Login } from '../lib/apis'

const username = ref('')
const password = ref('')

const onSubmit = async (e: Event) => {
    console.log('submit')
    e.preventDefault()
    try {
        const req: Login = {
            userid: username.value,
            password: password.value,
        }
        const res = await apis.postRegister(req)
        console.log(res)
    } catch (e) {
    }
}
</script>
  
<style scoped>
.Container {
    max-width: 800px;
    margin: 20px auto;
}

.RegisterForm {
    display: flex;
    flex-flow: column;
    align-items: center;
}

.RegisterInput {
    width: 200px;
    margin: 10px;
}

.RegisterButton {
    width: 200px;
    margin: 10px;
}
</style>
  