<script setup lang="ts">
import Container from "./Container.vue";
import Heading from "./Heading.vue";
import LeadsForm from "./LeadsForm.vue";
import VideoPlayer from "./VideoPlayer.vue";

// import GradientsDesktop from "../assets/hero-bg-gradient.svg";
// import LinesDesktop from "../assets/hero-bg-lines.png";
import BgDesktop from "../assets/hero-bg-desktop.webp";
import BgMobile from "../assets/hero-bg-mobile.webp";
import StarsIcon from "../icons/star.svg";
</script>

<template>
  <div class="hero">
    <img class="hero__bg hero__bg--mobile" :src="BgMobile" alt="" />
    <img class="hero__bg hero__bg--desktop" :src="BgDesktop" alt="" />
    <!--<img class="hero__bg hero__bg--desktop" :src="LinesDesktop" alt="" />-->
    <!--<img class="hero__bg hero__bg--desktop" :src="GradientsDesktop" alt="" />-->
    <Container>
      <div class="hero__inner">
        <Heading tag="h1" class="hero__title">
          The future of
          <div class="hero__highlight">
            generating
            <span class="hero__badge">
              <img :src="StarsIcon" alt="" />
              Hero AI
            </span>
          </div>
          beautiful websites is here.
        </Heading>
        <p class="hero__lead">
          Meet Hero, a magical tool that uses AI to create beautiful websites in
          seconds.
        </p>
        <LeadsForm class="hero__form" />
        <VideoPlayer class="hero__video" />
      </div>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
@keyframes blink {
  from,
  to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.hero {
  position: relative;
  padding: 7.5rem 0 0;
  width: 100%;
  overflow: hidden;

  &__bg {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: auto;

    &--mobile {
      min-width: 400px;
    }

    &--desktop {
      display: none;
    }

    @media (min-width: 768px) {
      &--desktop {
        display: block;
        min-width: 1440px;
      }

      &--mobile {
        display: none;
      }
    }
  }

  &__inner {
    position: relative;
    z-index: 1;
  }

  &__lead {
    margin: 1.5rem 0 2.5rem;
    opacity: 0.72;
  }

  &__highlight {
    position: relative;
    display: inline-block;
    padding: 0 0.1em;
    background: rgba(255, 255, 255, 0.3);
    background-blend-mode: overlay;
    background-clip: border-box;
    -webkit-text-fill-color: white;
    -moz-text-fill-color: white;

    &::after {
      content: "";
      position: absolute;
      left: 100%;
      top: 0;
      width: 2px;
      height: 100%;
      background: #13f1ff;
      animation: 1s blink step-end infinite;
    }
  }

  &__badge {
    position: absolute;
    top: -2rem;
    left: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 5.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem 0.5rem 0.5rem 0;
    background: linear-gradient(0deg, #ffffff, #ffffff),
      linear-gradient(180deg, #ffffff 0%, rgba(225, 225, 225, 0.88) 100%);
    color: #171717;
    -webkit-text-fill-color: #171717;
    -moz-text-fill-color: #171717;
    font-size: 0.875rem;
    line-height: 1.2;
    white-space: nowrap;

    img {
      width: 0.75rem;
      height: 0.75rem;
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  &__form {
    width: 100%;
    max-width: 33rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 768px) {
    padding: 12.5rem 0 0;
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
      margin: 0 auto 6rem;
    }
  }
}
</style>
