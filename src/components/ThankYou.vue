<script setup lang="ts">
import Heading from "./Heading.vue";
import Button from "./Button.vue";

import BgGradient from "../assets/hero-gradient.svg";
import BgGradientMobile from "../assets/hero-gradient-mobile.svg";
</script>

<template>
  <div class="typ">
    <Heading>Thank you</Heading>
    <p class="typ__lead">
      We’re working to bring a completely new way of creating websites to the
      market. We’ll notify you when Hero launches.
    </p>
    <Button href="/" primary>Go back to the main page</Button>
    <div class="typ__bg">
      <picture>
        <source media="(min-width: 768px)" :srcset="BgGradient" />
        <img :src="BgGradientMobile" alt="" />
      </picture>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.typ {
  position: relative;
  padding: clamp(10rem, 42vw, 15rem) 2rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow-x: clip;

  &__bg {
    position: absolute;
    top: -30%;
    left: -40%;
    z-index: -1;
    width: 200%;
    min-width: 664px;
    height: auto;

    @media (min-width: 768px) {
      width: 133%;
      min-width: 1600px;
      top: -50vw;
      left: auto;
      right: -33%;
      -webkit-mask-image: radial-gradient(
        50% 50% at 50% 50%,
        #d9d9d9 0%,
        rgba(217, 217, 217, 0) 100%
      );
      mask-image: radial-gradient(
        50% 50% at 50% 50%,
        #d9d9d9 0%,
        rgba(217, 217, 217, 0) 100%
      );
    }
  }

  &__lead {
    opacity: .72;
    max-width: 62ch;
  }
}
</style>
