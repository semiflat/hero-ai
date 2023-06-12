<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  max-width: calc(1104px + 3rem);
  padding: 0 clamp(1.5rem, 4vw, 3rem);
  margin-left: auto;
  margin-right: auto;
}
</style>
