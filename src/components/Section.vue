<script setup lang="ts">
import Container from "./Container.vue";
import Heading from "./Heading.vue";

export interface Section {
  title: string;
  lead: string;
}

const props = defineProps<Section>();
</script>

<template>
  <section class="section">
    <Container>
      <div class="section__header">
        <Heading tag="h2" class="section__title">
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

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  &__lead {
    max-width: 50ch;
  }
}
</style>
