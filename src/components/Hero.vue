<script setup lang="ts">
import VueWriter from "vue-writer";
import Container from "./Container.vue";
import Heading from "./Heading.vue";
import LeadsForm from "./LeadsForm.vue";
import VideoPlayer from "./VideoPlayer.vue";

import BgDesktop from "../assets/hero-bg-desktop.webp";
import BgMobile from "../assets/hero-bg-mobile.webp";
import StarsIcon from "../icons/star.svg";
</script>

<template>
  <div class="hero">
    <div class="hero__bg">
      <picture>
        <source media="(min-width: 768px)" :srcset="BgDesktop" />
        <img :src="BgMobile" alt="" loading="lazy" />
      </picture>
      <div class="hero__rocket" />
    </div>
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
                :delay="2000"
                :start="2000"
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

@keyframes typewriter-10-letter {
  from {
    width: 10ch;
  }

  to {
    width: 0ch;
  }
}

.hero {
  position: relative;
  padding: 7.5rem 0 0;
  width: 100%;
  overflow-x: clip;

  &__bg {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    width: 100%;
    height: auto;

    @media (min-width: 768px) {
      min-width: 1440px;
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
