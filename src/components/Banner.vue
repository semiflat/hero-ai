<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Heading from "./Heading.vue";
import LeadsForm from "./LeadsForm.vue";
import Lines from "./Lines.vue";

import BgDesktop from "../assets/cta-gradient-desktop.svg";
import BgMobile from "../assets/cta-gradient-mobile.svg";

export interface Banner {
  title: string;
  description?: string;
}
const props = defineProps<Banner>();

const mouseY = ref(0);
const mouseX = ref(0);
const card = ref();

onMounted(() => {
  document.addEventListener("mousemove", (event) => {
    const rect = card?.value.getBoundingClientRect();

    if (rect) {
      mouseX.value = event.clientX - rect.left;
      mouseY.value = event.clientY - rect.top;
    }
  });
});
</script>

<template>
  <div
    class="banner"
    ref="card"
    :style="{ '--mouse-x': mouseX + 'px', '--mouse-y': mouseY + 'px' }"
  >
    <div class="banner__inner">
      <div class="banner__bg">
        <picture>
          <source media="(min-width: 768px)" :srcset="BgDesktop" />
          <img :src="BgMobile" alt="" loading="lazy" />
        </picture>

        <Lines class="banner__lines" />
      </div>

      <div class="banner__text-wrapper">
        <Heading size="md" tag="h2" class="banner__title">
          {{ props.title }}
        </Heading>
        <p class="banner__description">
          {{ props.description }}
        </p>
        <LeadsForm class="banner__form" allow-stack />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  border-radius: 1rem;
  box-shadow: 0px 0px 80px 20px rgba(0, 0, 0, 0.64);
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.16);
  overflow: hidden;

  @media (min-width: 768px) {
    border-radius: 2rem;
  }

  &__inner {
    position: relative;
    padding: 2.5rem 2rem;
    z-index: 2;
    border-radius: inherit;
    background: #171717;

    @media (min-width: 768px) {
      padding: 5rem 6rem;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    opacity: 0;
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.33),
      transparent 40%
    );
    transition: opacity 0.5s ease;
  }

  @media (hover: hover) {
    border: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.16) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );

    &__inner {
      margin: 1px;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
    }

    &:hover::before {
      opacity: 1;
    }
  }

  &__bg {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100% + 2px);
    height: 100%;

    picture,
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top right;
    }
  }

  &__lines {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -25%);
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
      left: 28%;
      transform: translateY(-34%);
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

  &__text-wrapper {
    position: relative;
    z-index: 1;
    max-width: 33.5rem;
  }

  &__description {
    margin-top: 1.5rem;
    opacity: 0.72;
  }

  &__form {
    margin-top: 1.5rem;

    @media (min-width: 768px) {
      margin-top: 3rem;
    }
  }

  &:deep(.lines__image) {
    animation: none;
    opacity: 0.33;
  }
}
</style>
