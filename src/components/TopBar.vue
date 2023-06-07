<script setup lang="ts">
import Logotype from "../assets/hero-logotype.svg";

import Button from "./Button.vue";
import Container from "./Container.vue";
</script>

<template>
  <div class="top-bar">
    <Container>
      <div class="top-bar__inner">
        <img class="top-bar__logo" :src="Logotype" alt="Hero Logotype" />
        <Button>Join waitlist</Button>
      </div>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.top-bar {
  padding: 1rem 0;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    flex: 0 0 0;
    width: 96px;
  }
}
</style>
