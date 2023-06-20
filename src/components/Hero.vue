<script setup lang="ts">
import VueWriter from "vue-writer";
import Container from "./Container.vue";
import Heading from "./Heading.vue";
import LeadsForm from "./LeadsForm.vue";
import Lines from "./Lines.vue";
import VideoPlayer from "./VideoPlayer.vue";

import BgGradient from "../assets/hero-gradient.svg";
import BgGradientMobile from "../assets/hero-gradient-mobile.svg";
import StarsIcon from "../icons/star.svg";
</script>

<template>
  <div class="hero">
    <div class="hero__bg">
      <picture>
        <source media="(min-width: 768px)" :srcset="BgGradient" />
        <img :src="BgGradientMobile" alt="" />
      </picture>
    </div>

    <Lines class="hero__lines"></Lines>

    <Container>
      <div class="hero__inner">
        <Heading tag="h1" class="hero__title">
          The future of
          <div class="hero__highlight">
            <vue-writer
              :array="['generating', 'designing']"
              :eraseSpeed="50"
              :typeSpeed="100"
              :delay="1500"
              :start="1600"
            ></vue-writer>
            <span class="hero__badge">
              <img :src="StarsIcon" alt="" />
              Hero AI
            </span>
          </div>
          <br />
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

@keyframes video {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.hero {
  position: relative;
  padding: 7.5rem 0 0;
  width: 100%;
  overflow-x: clip;
  animation: fadein 1s ease-in-out;

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
      font-size: 6.8vw;
    }
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
    right: 0;
    display: flex;
    align-items: center;
    gap: 0.5em;
    width: 6.3em;
    padding: 0.4em 0.6em;
    border-radius: 0.5em 0.5em 0 0.5em;
    background: linear-gradient(0deg, #ffffff, #ffffff),
      linear-gradient(180deg, #ffffff 0%, rgba(225, 225, 225, 0.88) 100%);
    color: #171717;
    -webkit-text-fill-color: #171717;
    -moz-text-fill-color: #171717;
    font-size: 0.75rem;
    line-height: 1.2;
    white-space: nowrap;

    img {
      width: 0.75rem;
      height: 0.75rem;
    }

    @media (min-width: 768px) {
      left: 100%;
      border-radius: 0.5em 0.5em 0.5em 0;
      font-size: 0.875rem;
    }
  }

  &__form {
    width: 100%;
    max-width: 33rem;
    margin-bottom: 4rem;
  }

  &__video {
    transform: translateY(1rem);
    opacity: 0;
    animation: video 1s 0.5s forwards;
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

  &__lines {
    position: absolute;
    top: -33%;
    left: 50%;
    transform: translateX(-50%);
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
      top: -10%;
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
    }
  }
}
</style>
