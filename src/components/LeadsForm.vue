<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <form class="leads-form">
    <input class="leads-form__input" type="email" required />
    <Button>Join waitlist</Button>
  </form>
</template>

<style lang="scss" scoped>
.leads-form {
  display: inline-flex;
  gap: 1rem;

  &__input {
    background: rgba(255, 255, 255, 0.16);
    border-radius: 10px;
    border: none;
  }
}
</style>
