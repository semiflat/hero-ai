<script lang="ts" setup>
import Heading from "./Heading.vue";
import LeadsForm from "./LeadsForm.vue";
import Lines from "./Lines.vue";

import BgDesktop from "../assets/cta-gradient-desktop.svg";
import BgMobile from "../assets/cta-gradient-mobile.svg";

export interface Banner {
  title: string;
  description?: string;
}
const props = defineProps<Banner>();
</script>

<template>
  <div class="banner">
    <div class="banner__bg">
      <picture>
        <source media="(min-width: 768px)" :srcset="BgDesktop" />
        <img :src="BgMobile" alt="" loading="lazy" />
      </picture>

      <Lines class="banner__lines" />
    </div>

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

  &__bg {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;

    picture,
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top right;
    }
  }

  &__lines {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -25%);
    mask-image: radial-gradient(
      100% 100% at 50.13% 0%,
      #d9d9d9 0%,
      rgba(217, 217, 217, 0) 100%
    );
    -webkit-mask-image: radial-gradient(
      100% 100% at 50.13% 0%,
      #d9d9d9 0%,
      rgba(217, 217, 217, 0) 100%
    );

    @media (min-width: 768px) {
      left: 28%;
      transform: translateY(-34%);
      mask-image: radial-gradient(
        50% 50% at 50% 50%,
        #d9d9d9 0%,
        rgba(217, 217, 217, 0) 100%
      );
      -webkit-mask-image: radial-gradient(
        50% 50% at 50% 50%,
        #d9d9d9 0%,
        rgba(217, 217, 217, 0) 100%
      );
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
    margin-top: 1.5rem;

    @media (min-width: 768px) {
      margin-top: 3rem;
    }
  }
}
</style>
