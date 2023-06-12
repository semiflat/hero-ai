<script setup lang="ts">
import Container from "./Container.vue";

import SemiflatLogo from "../assets/semiflat-logo.svg";
</script>

<template>
  <footer class="footer">
    <Container>
      <p class="footer__logo-line">
        Created by
        <a
          href="https://www.semiflat.com/"
          target="_blank"
          aria-label="Semiflat"
        >
          <img :src="SemiflatLogo" alt="Semiflat logotype" class="footer__logo" loading="lazy" />
        </a>
      </p>
      <p class="footer__copyright">©2023 Semiflat</p>
    </Container>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 3.5rem 0;
  text-align: center;

  @media (min-width: 768px) {
    padding: 7.5rem 0;
  }

  &__logo-line {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(
      92.85deg,
      rgba(255, 255, 255, 0.88) -0.06%,
      #ffffff 57.06%,
      rgba(255, 255, 255, 0.88) 99.7%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  &__logo {
    display: block;
    height: 1.25rem;
    aspect-ratio: 125 / 20;
  }

  &__copyright {
    opacity: 0.72;
  }
}
</style>
