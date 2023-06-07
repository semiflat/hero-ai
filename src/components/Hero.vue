<script setup lang="ts">
import Container from "./Container.vue";
import Heading from "./Heading.vue";
import LeadsForm from "./LeadsForm.vue";
</script>

<template>
  <div class="hero">
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
  padding: 2.5rem 0;


  &__lead {
    margin: 1.5rem auto 2.5rem;
    opacity: 0.72;
  }

  @media (min-width: 768px) {
    padding: 6rem 0;
    text-align: center;


    &__title {
      font-size: 48px;
      line-height: 58px;
      margin: 0 auto;
    }

    &__form {
        margin: 0 auto;
    }
  }
}
</style>
