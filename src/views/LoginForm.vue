<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <InputField v-model="username" inputId="username" label="User name" required="true"></InputField>
      <InputField v-model="password" inputId="password" label="Password" required="true"  type="password"></InputField>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import InputField from '@/components/InputField.vue'

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();
    const store = useStore()

    if (localStorage.getItem("loggedIn")) {
      router.push('/deposit')
    }

    const login = () => {
      // Simulate API call
      setTimeout(() => {
          localStorage.setItem('loggedIn', 'true');
          store.commit('setAuthenticated', true)
          router.push('/deposit')
        
      }, 500);
    };

    return {
      username,
      password,
      login
    };
  },
  components: {
    InputField
  }
});
</script>