<script setup lang="ts">
import Container from "./Container.vue";
import Heading from "./Heading.vue";
import LeadsForm from "./LeadsForm.vue";

import Bg from "../assets/hero-bg.svg";
</script>

<template>
  <div class="hero">
    <img class="hero__bg" :src="Bg" alt="" />
    <Container>
      <div class="hero__inner">
        <Heading tag="h1" class="hero__title">
          The future of generating beautiful websites is here.
        </Heading>
        <p class="hero__lead">
          Meet Hero, a magical tool that uses AI to create beautiful websites in
          seconds.
        </p>
        <LeadsForm class="hero__form" />
      </div>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  padding: 2.5rem 0;

  &__bg {
    position: absolute;
    top: -7%;
    right: 0;
    width: 100%;
    height: auto;
  }

  &__inner {
    position: relative;
    z-index: 1;
  }

  &__lead {
    margin: 1.5rem 0 2.5rem;
    opacity: 0.72;
  }

  &__form {
    width: 100%;
    max-width: 33rem;
  }

  @media (min-width: 768px) {
    padding: 12.5rem 0 6rem;
    text-align: center;

    &__title {
      font-size: 48px;
      line-height: 58px;
      margin: 0 auto;
    }

    &__lead {
      margin: 1.5rem auto 5rem;
    }

    &__form {
      margin: 0 auto;
    }
  }
}
</style>
