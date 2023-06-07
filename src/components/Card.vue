<script lang="ts" setup>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

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
      <h3 class="card__title">
        {{ props.title }}
      </h3>
      <p>
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  $block: &;

  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 1rem;
  background: #171717;

  &__lottie {
    height: auto !important;
  }


  &__image-wrapper {
    position: relative;
  }

  &__image-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &__image {
    position: relative;
    z-index: 1;
    width: 100%;
  }

  &__text-wrapper {
    padding: 2rem 1.5rem;

    @media (min-width: 1200px) {
      padding: 2.5rem 3rem;
    }
  }

  &__title {
    margin-bottom: 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    color: var(--accent-color-dark);

    @media (min-width: 1200px) {
      font-size: 1.25rem;
    }
  }

  &__subtitle {
    color: var(--accent-color-light);
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5;

    @media (min-width: 1200px) {
      font-size: 1rem;
    }
  }

  &__link {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      cursor: pointer;
    }
  }
}

.case-study-btn-wrapper {
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  /* Content/Accent */
  display: inline-flex;
  position: relative;
}
.case-study-btn-wrapper .case-study-btn {
  display: inline-block;
  background-image: linear-gradient(
    86.76deg,
    #407a7a,
    #54aba3,
    #fff,
    #fff,
    #fff
  );
  background-size: 400% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  transition: 0.75s all;
  z-index: 2;
}
.case-study-btn-wrapper::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(86.76deg, #407a7a 0%, #54aba3 100%);
  transform: translateY(0.8em) scaleY(0.1);
  transition: 0.2s all;
}

.case-study-btn-wrapper:hover::after {
  transform: none;
}
</style>
