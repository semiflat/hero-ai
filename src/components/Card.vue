<script lang="ts" setup>
import { ref, onMounted } from "vue";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import Heading from "./Heading.vue";

export interface Card {
  title: string;
  description: string;
  lottiePath?: any;
}
const props = defineProps<Card>();

const mouseY = ref(0);
const mouseX = ref(0);
const card = ref();

onMounted(() => {
  document.addEventListener("mousemove", (event) => {
    const rect = card?.value.getBoundingClientRect();

    if (rect) {
      mouseX.value = event.clientX - rect.left;
      mouseY.value = event.clientY - rect.top;
    }
  });
});
</script>

<template>
  <div
    class="card"
    :style="{ '--mouse-x': mouseX + 'px', '--mouse-y': mouseY + 'px' }"
    ref="card"
  >
    <div class="card__inner">
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
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.16);

  &__inner {
    position: relative;
    z-index: 2;
    inset: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-radius: inherit;
    background: #171717;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &::before {
    z-index: 3;
    background: radial-gradient(
      var(--circle-size, 600px) circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
  }

  &::after {
    z-index: 1;
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.33),
      transparent 40%
    );
  }

  @media (hover: hover) {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.16) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );

    &:hover::after,
    &:hover::before {
      opacity: 1;
    }
  }

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
