
<template>
  <div>
    <h1>Deposit</h1>
    <form @submit.prevent="submitForm">
      <InputField v-model="creditCard" inputId="creditCard" label="Credit Card" required="true"></InputField>
      <InputField v-model="cvv" inputId="cvv" label="CVV" required="true"></InputField>
      <InputField v-model="expiry" inputId="expiry" label="Expiry" required="true"></InputField>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputField from '@/components/InputField.vue'

export default defineComponent({
  name: 'DepositForm',
  data() {
    return {
      creditCard: '',
      cvv: '',
      expiry: ''
    };
  },
  methods: {
    submitForm() {
      console.log('Credit Card:', this.creditCard);
      console.log('CVV:', this.cvv);
      console.log('Expiry:', this.expiry);
    }
  },
  components: {
    InputField
  }
});
</script>