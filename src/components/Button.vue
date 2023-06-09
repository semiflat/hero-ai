<script setup lang="ts"></script>

<template>
  <component is="a" class="button">
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 0.666rem;
  border: 1px solid;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
}
</style>
