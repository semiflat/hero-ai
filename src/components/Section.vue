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
const isDescriptionTyping = ref(false);

const TYPING_SPEED = 100;

const toggleTexts = () => {
  const currentIndex = activeIndex.value;
  const optionsLength = props.title.length - 1;

  activeIndex.value = optionsLength > currentIndex ? currentIndex + 1 : 0;
  isTitleTyping.value = true;

  const titleTypingTime = props.title[activeIndex.value].length * TYPING_SPEED + 1000;
  const descriptionTypingTime = props.lead[activeIndex.value].length * TYPING_SPEED + 1000;

  setTimeout(() => {
    isTitleTyping.value = false;
    isDescriptionTyping.value = true;
  }, titleTypingTime)
  
  setTimeout(() => {
    isDescriptionTyping.value = false;
  }, titleTypingTime + descriptionTypingTime)

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
            :disabled="isDescriptionTyping || isTitleTyping"
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
          <vue-writer
            v-if="isDescriptionTyping"
            :array="[props.lead[activeIndex]]"
            :typeSpeed="TYPING_SPEED"
            iterations="1"
          ></vue-writer>
          <template v-if="!(isDescriptionTyping || isTitleTyping)">{{ props.lead[activeIndex] }}</template>
        </p>
      </div>
      <div class="section__body" v-observe>
        <slot></slot>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
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
}
</style>
