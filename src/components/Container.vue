<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  max-width: calc(1104px + 2rem);
  padding: 0 clamp(1rem, 3.33vw, 2rem);
  margin-left: auto;
  margin-right: auto;
}
</style>
