<template>
  <div class="input-field">
      <div class="form__group field">
        <input v-model="value" :id="inputId" :placeholder="label" :required="required" @blur="validate"  class="form__field"  @input="$emit('update:modelValue', $event.target.value)">
        <label :for="inputId" class="form__label">{{ label }}</label>
        <div v-if="error" class="error-message">{{ error }}</div>
      </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputField',
  props: ['modelValue', 'label', 'required', 'inputId'],
  data() {
    return {
      value: this.modelValue,
      error: '',
    }
  },
  methods: {
    validate() {
       this.error = ''
      if (this.required && !this.value) {
        this.error = `${this.label} is required`;
      }
    },
  },
})
</script>

<style lang="scss" scoped>
  .error-message {
    color: red;
    margin-top: 5px;
    font-size: 12px;
  }

.form__group {
    position: relative;
    padding: 20px 0 0;
    width: 100%;
    max-width: 180px;
    margin-bottom: 15px
  }
  
  .form__field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 17px;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }
  
  .form__field::placeholder {
    color: transparent;
  }
  
  .form__field:placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }
  
  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #9b9b9b;
    pointer-events: none;
  }
  
  .form__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, blue, blue);
    border-image-slice: 1;
  }
  
  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: blue;
    font-weight: 700;
  }
  
  .form__field:required, .form__field:invalid {
    box-shadow: none;
  }
</style>

<!-- .input-field {
  margin-bottom: 20px;

  label {
    display: block;
    font-weight: bold;
  }

  input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
  }
} -->