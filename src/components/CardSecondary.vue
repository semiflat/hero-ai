<script lang="ts" setup>
import Heading from "./Heading.vue";

export interface CardSecondary {
  title: string;
  description: string;
  icon?: any;
}
const props = defineProps<CardSecondary>();
</script>

<template>
  <div class="card-secondary">
    <div class="card-secondary__header">
      <img class="card-secondary__icon" :src="icon" alt="" loading="lazy" />
      <Heading size="xs" tag="h3" class="card_title">
        {{ props.title }}
      </Heading>
    </div>
    <p class="card-secondary__description">
      {{ props.description }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.card-secondary {
  &__header {
    display: flex;
    align-items: center;
    gap: .75rem;
  }

  &__icon {
    width: 1.25rem;
    aspect-ratio: 1 / 1;
  }

  &__description {
    opacity: 0.72;
    margin-top: .75rem;
  }
}
</style>
