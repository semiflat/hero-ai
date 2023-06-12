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
    <img
      class="banner__bg banner__bg--mobile"
      :src="BgMobile"
      alt=""
      loading="lazy"
    />
    <img
      class="banner__bg banner__bg--desktop"
      :src="BgDesktop"
      alt=""
      loading="lazy"
    />
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
    object-fit: cover;

    &--desktop {
      display: none;
    }

    @media (min-width: 768px) {
      &--desktop {
        display: block;
      }

      &--mobile {
        display: none;
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
