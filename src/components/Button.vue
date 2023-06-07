<script setup lang="ts">
</script>

<template>
  <component is="a" class="button">
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.button {
    padding: .75em 1em;
    border-radius: 10px;
    border: 1px solid;
    color: white;
    cursor: pointer;
}
</style>
