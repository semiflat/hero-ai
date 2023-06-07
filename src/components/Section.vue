<script setup lang="ts">
import Container from "./Container.vue";
import Heading from "./Heading.vue";

export interface Section {
  title?: string;
  lead?: string;
}

const props = defineProps<Section>();
</script>

<template>
  <section class="section">
    <Container>
      <div v-if="props.title || props.lead" class="section__header">
        <Heading size="lg" tag="h2" class="section__title">
          {{ props.title }}
        </Heading>
        <p class="section__lead">
          {{ props.lead }}
        </p>
      </div>
      <slot></slot>
    </Container>
  </section>
</template>

<style lang="scss">
.section {
  padding: 5rem 0 0;

  @media (min-width: 768px) {
    padding: 10rem 0 0;
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
    opacity: 0.72;
  }
}
</style>
