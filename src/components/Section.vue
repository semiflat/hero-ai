<script setup lang="ts">
import { ref } from "vue";
import VueWriter from "vue-writer";

import Button from "./Button.vue";
import Container from "./Container.vue";
import Heading from "./Heading.vue";

import { vObserve } from "../directives/observe.js";

export interface Section {
  title?: string[];
  lead?: string[];
}

const props = defineProps<Section>();

const activeIndex = ref(0);
const isTitleTyping = ref(false);

const TYPING_SPEED = 50;
const TYPING_OFFSET = 1000;

const toggleTexts = () => {
  const currentIndex = activeIndex.value;
  const optionsLength = props.title.length - 1;

  activeIndex.value = optionsLength > currentIndex ? currentIndex + 1 : 0;
  isTitleTyping.value = true;

  const titleTypingTime =
    props.title[activeIndex.value].length * TYPING_SPEED + TYPING_OFFSET;

  setTimeout(() => {
    isTitleTyping.value = false;
  }, titleTypingTime);
};
</script>

<template>
  <section class="section">
    <Container>
      <div v-if="props.title && props.lead" class="section__header">
        <div class="section__button" v-observe>
          <Button
            primary
            minor
            has-icon
            tag="button"
            type="button"
            @click="toggleTexts"
            :disabled="isTitleTyping"
          >
            Rewrite with Hero AI
          </Button>
        </div>

        <Heading size="lg" tag="h2" class="section__title" v-observe>
          <vue-writer
            v-if="isTitleTyping"
            :array="[props.title[activeIndex]]"
            :typeSpeed="TYPING_SPEED"
            iterations="1"
          ></vue-writer>
          <template v-else>{{ props.title[activeIndex] }}</template>
        </Heading>

        <p class="section__lead" v-observe>
          <Transition name="fade">
            <span v-if="!isTitleTyping">{{
              props.lead[activeIndex]
            }}</span>
          </Transition>
        </p>
      </div>
      <div class="section__body" v-observe>
        <slot></slot>
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
@keyframes fadein {
  to {
    opacity: 1;
  }
}

.section {
  padding: 5rem 0 0;

  @media (min-width: 768px) {
    padding: 10rem 0 0;
  }

  &__button {
    margin: 0 auto 1rem;
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      margin-bottom: 5rem;
    }

    &:deep(.cursor) {
      position: relative;
      display: inline-block;
      width: 2px;
      margin-left: 2px;
      background: #13f1ff;

      &::after {
        content: "Hero AI";
        position: absolute;
        top: -2rem;
        left: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        width: 4.5em;
        padding: 0.4em 0.6em;
        border-radius: 0.5em 0.5em 0.5em 0em;
        background-color: white;
        color: #171717;
        -webkit-text-fill-color: #171717;
        -moz-text-fill-color: #171717;
        font-size: 0.75rem;
        line-height: 1.2;
        white-space: nowrap;
      }
    }
  }

  &__lead {
    max-width: 50ch;
    min-height: 3em;
    opacity: 0.72;
  }

  &__button,
  &__title,
  &__lead,
  &__body {
    opacity: 0;

    &.enter {
      animation: fadein 1s ease forwards;
    }
  }

  &__highlight {
    position: relative;

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

  .fade-enter-active {
    transition: 0.4s ease-in-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(.5rem);
  }
}
</style>
