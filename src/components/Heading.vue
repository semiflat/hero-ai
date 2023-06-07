<script setup lang="ts">
export interface Heading {
  tag?: string;
}

const props = defineProps<Heading>();
</script>

<template>
  <component :is="props.tag || 'h2'" class="heading">
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.heading {
  max-width: 20ch;
  font-size: 28px;
  line-height: 34px;

  background: linear-gradient(
    92.85deg,
    #d2d2d2 -0.06%,
    #ffffff 57.06%,
    #dcd9d9 75.8%,
    #ececec 99.7%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 58px;
  }
}
</style>
