<script lang="ts" setup>
import Heading from "./Heading.vue";
import LeadsForm from "./LeadsForm.vue";

import BgDesktop from "../assets/cta-bg-desktop.webp";
import BgMobile from "../assets/cta-bg-mobile.webp";

export interface Banner {
  title: string;
  description?: string;
}
const props = defineProps<Banner>();
</script>

<template>
  <div class="banner">
    <picture>
      <source media="(min-width: 768px)" :srcset="BgDesktop" />
      <img class="banner__bg" :src="BgMobile" alt="" loading="lazy" />
    </picture>

    <div class="banner__rockets banner__rockets--left" />
    <div class="banner__rockets banner__rockets--right" />

    <div class="banner__text-wrapper">
      <Heading size="md" tag="h2" class="banner__title">
        {{ props.title }}
      </Heading>
      <p class="banner__description">
        {{ props.description }}
      </p>
      <LeadsForm class="banner__form" allow-stack />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$rocket-1-skew: -33.3deg;
$rocket-2-skew: -12.2deg;
$rocket-3-skew: 4deg;

@keyframes rocket-1 {
  0% {
    transform: skew($rocket-1-skew) translateY(-100px);
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  15% {
    opacity: 1;
  }

  40% {
    opacity: 0;
  }

  50% {
    transform: skew($rocket-1-skew) translateY(500px);
    opacity: 0;
  }

  100% {
    transform: skew($rocket-1-skew) translateY(500px);
    opacity: 0;
  }
}

@keyframes rocket-2 {
  0% {
    transform: skew($rocket-2-skew) translateY(-100px);
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  15% {
    opacity: 1;
  }

  30% {
    opacity: 0;
  }

  50% {
    transform: skew($rocket-2-skew) translateY(500px);
    opacity: 0;
  }

  100% {
    transform: skew($rocket-2-skew) translateY(500px);
    opacity: 0;
  }
}


@keyframes rocket-3 {
  0% {
    transform: skew($rocket-3-skew) translateY(-100px);
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  15% {
    opacity: 1;
  }

  30% {
    opacity: 0;
  }

  50% {
    transform: skew($rocket-3-skew) translateY(500px);
    opacity: 0;
  }

  100% {
    transform: skew($rocket-3-skew) translateY(500px);
    opacity: 0;
  }
}
.banner {
  position: relative;
  padding: 2.5rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 1rem;
  box-shadow: 0px 0px 80px 20px rgba(0, 0, 0, 0.64);
  background: #171717;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 5rem 6rem;
    border-radius: 2rem;
  }

  &__bg,
  &__rockets {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top right;
  }

  &__rockets {
    @media (max-width: 767.5px) {
      display: none;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      border-radius: 2px;
      background-blend-mode: overlay;
      mix-blend-mode: normal;
      filter: blur(0.5px);
      width: 1px;
      height: 80px;
      background: linear-gradient(
        23.44deg,
        #ffffff -0.1%,
        rgba(255, 255, 255, 0) 99.99%
      );
    }

    &--left {
      &::before {
        top: 0;
        right: 346px;
        transform: skew($rocket-1-skew) translateY(-100px);
        animation: rocket-1 3.2s .9s cubic-bezier(0.5, 1, 0.89, 1) forwards infinite;
      }

      &::after {
        top: 0;
        right: 167px;
        transform: skew($rocket-2-skew) translateY(-100px);
        animation: rocket-2 3s cubic-bezier(0.5, 1, 0.89, 1) forwards infinite;
      }
    }

    &--right {
      &::before {
        top: 0;
        right: 47px;
        transform: skew($rocket-3-skew) translateY(-100px);
        animation: rocket-3 2.8s 1.5s cubic-bezier(0.5, 1, 0.89, 1) forwards infinite;
      }

      &::after {
        content: none;
      }
    }
  }

  &__text-wrapper {
    position: relative;
    z-index: 1;
    max-width: 33.5rem;
  }

  &__description {
    margin-top: 1.5rem;
    opacity: 0.72;
  }

  &__form {
    margin-top: 3rem;
  }
}
</style>
