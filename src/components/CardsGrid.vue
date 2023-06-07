<script lang="ts" setup>
import CardComponent from './Card.vue';
import type { Card } from './Card.vue';

const props = defineProps<{
  cards: Card[]
}>()
</script>

<template>
  <div class="cards-grid">
    <ul class="cards-grid__list">
      <li class="cards-grid__card" v-for="card in props.cards" :key="card.title">
        <CardComponent v-bind="card" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.cards-grid {
  &__list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(12, 1fr);

      > * {
        grid-column: span 7;

        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(10),
        &:nth-child(11) {
          grid-column: span 5;
        }
      }
    }
  }
}
</style>
