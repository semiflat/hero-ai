<script lang="ts" setup>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import Heading from "./Heading.vue";

export interface Card {
  title: string;
  description: string;
  lottiePath?: any;
}
const props = defineProps<Card>();
</script>

<template>
  <div class="card">
    <LottieAnimation
      v-if="props.lottiePath"
      :path="props.lottiePath"
      class="card__lottie"
    />
    <div class="card__text-wrapper">
      <Heading size="sm" tag="h3" class="card_title">
        {{ props.title }}
      </Heading>
      <p class="card__description">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 1rem;
  background: #171717;

  &__lottie {
    height: auto !important;
  }

  &__text-wrapper {
    padding: 2rem 1.5rem;

    @media (min-width: 1200px) {
      padding: 3rem;
    }
  }

  &__description {
    opacity: 0.72;
    margin-top: 1rem;
  }
}
</style>
