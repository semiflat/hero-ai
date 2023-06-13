<script setup lang="ts">
import VueWriter from "vue-writer";
import Container from "./Container.vue";
import Heading from "./Heading.vue";
import LeadsForm from "./LeadsForm.vue";
import VideoPlayer from "./VideoPlayer.vue";

import BgGradient from "../assets/hero-gradient.svg";
import BgLines from "../assets/hero-lines.svg";
import BgMobile from "../assets/hero-bg-mobile.webp";
import StarsIcon from "../icons/star.svg";
</script>

<template>
  <div class="hero">
    <div class="hero__bg">
      <picture>
        <source media="(min-width: 768px)" :srcset="BgGradient" />
        <img :src="BgMobile" alt="" />
      </picture>
    </div>

    <div class="hero__lines">
      <img :src="BgLines" alt="" />
    </div>

    <div class="hero__rockets" />

    <Container>
      <div class="hero__inner">
        <Heading tag="h1" class="hero__title">
          The future of
          <div class="hero__highlight-placeholder">
            <div class="hero__highlight">
              <vue-writer
                :array="['generating', 'designing']"
                :eraseSpeed="50"
                :typeSpeed="100"
                :delay="1500"
                :start="1500"
              ></vue-writer>
              <span class="hero__badge">
                <img :src="StarsIcon" alt="" />
                Hero AI
              </span>
            </div>
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

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes lines {
  from {
    opacity: 0;
    // transform: translateY(1rem) rotateX(25deg) scale(0.9);
  }

  to {
    opacity: 0.33;
    // transform: translateY(0) rotateX(0) scale(1);
  }
}

@keyframes rocket-to-bottom-right {
  0% {
    transform: skew(-27deg) translateY(-200px);
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  18% {
    opacity: 1;
  }

  50% {
    transform: skew(-27deg) translateY(600px);
    opacity: 0;
  }

  100% {
    transform: skew(-27deg) translateY(600px);
    opacity: 0;
  }
}

.hero {
  position: relative;
  padding: 7.5rem 0 0;
  width: 100%;
  overflow-x: clip;
  animation: fadein 1s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: auto;

    @media (min-width: 768px) {
      width: 133%;
      min-width: 1600px;
      top: -50vw;
      left: auto;
      right: -33%;
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

  &__rockets,
  &__lines {
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    width: 1440px;

    @media (max-width: 767px) {
      display: none;
    }
  }

  &__lines {
    mix-blend-mode: overlay;
    -webkit-mix-blend-mode: overlay;
    mask-image: radial-gradient(
      50% 67.81% at 50% 32.19%,
      #d9d9d9 0%,
      rgba(217, 217, 217, 0) 100%
    );
    -webkit-mask-image: radial-gradient(
      50% 50% at 50% 50%,
      #d9d9d9 0%,
      rgba(217, 217, 217, 0) 100%
    );

    img {
      opacity: 0;
      animation: lines 1s 1s ease-in-out forwards;
    }
  }

  &__rockets {
    aspect-ratio: 1440 / 1095;

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
      background: linear-gradient(to bottom, rgba(72, 27, 151, 0) 0%, white 100%);
    }

    &::before {
      top: 107px;
    left: 645px;
      transform: skew(-27deg) translateY(-200px);
      animation: rocket-to-bottom-right 3s 3s cubic-bezier(0.5, 1, 0.89, 1) forwards infinite;
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

  &__title {
    @media (max-width: 767px) {
      font-size: 6.5vw;
    }
  }

  &__highlight-placeholder {
    position: relative;
    display: inline-block;
    width: 5.6em;
    height: 1em;
  }

  &__highlight {
    position: absolute;
    top: 0;
    left: 0;
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

  &:deep(.cursor) {
    display: inline-block;
    width: 1px;
  }
}
</style>
