<script setup lang="ts">
export interface Button {
  primary?: boolean;
}
const props = defineProps<Button>();
</script>

<template>
  <component is="a" class="button" :class="{ 'button--primary': props.primary }">
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
  white-space: nowrap;
  cursor: pointer;
  transition: .3s ease;

  @media (hover:hover) {
    &:hover {
      opacity: .8;
    }
  }
}
</style>
