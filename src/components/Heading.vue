<script setup lang="ts">
export interface Heading {
  size?: string;
  tag?: string;
}

const props = defineProps<Heading>();
</script>

<template>
  <component
    :is="props.tag || 'h2'"
    class="heading"
    :class="{
      'heading--lg': props.size === 'lg' || !props.size,
      'heading--md': props.size === 'md', // TODO
      'heading--sm': props.size === 'sm',
      'heading--xs': props.size === 'xs',
    }"
  >
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.heading {
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
  font-weight: 600;
  line-height: 1.2;

  &--lg {
    max-width: 22ch;
    font-size: 1.75rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  &--md {
    font-size: 1.5rem;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  &--sm {
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }

  &--xs {
    font-size: 1rem;
    line-height: 1.5;
  }
}
</style>
