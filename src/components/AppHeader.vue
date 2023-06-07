<script setup lang="ts">
import Logotype from "../assets/hero-logotype.svg";

import Button from "./Button.vue";
import Container from "./Container.vue";
</script>

<template>
  <header class="header">
    <Container>
      <div class="header__inner">
        <img class="header__logo" :src="Logotype" alt="Hero Logotype" />
        <Button>Join waitlist</Button>
      </div>
    </Container>
  </header>
</template>

<style lang="scss" scoped>
.header {
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
