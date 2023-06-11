<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <form class="leads-form">
    <label class="leads-form__label">Your e-mail</label>
    <input
      class="leads-form__input"
      type="email"
      placeholder="Your e-mail"
      required
    />
    <Button class="leads-form__button" is="button" type="submit">Join waitlist</Button>
  </form>
</template>

<style lang="scss" scoped>
.leads-form {
  display: inline-flex;
  width: 100%;
  gap: .5rem;

  &__input {
    flex-grow: 1;
    min-width: 0;
    height: 2.5rem;
    border-radius: 0.666rem;
    border: none;
    padding: 0 0.75rem;
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 1);
    font-size: 0.875rem;

    &:focus,
    &:active {
      outline: none;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.32);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.72);
    }
  }

  // visually hidden
  &__label {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
}
</style>
