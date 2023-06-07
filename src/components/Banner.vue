<script lang="ts" setup>
import Heading from "./Heading.vue";
import LeadsForm from "./LeadsForm.vue";

export interface Banner {
  title: string;
  description?: string;
}
const props = defineProps<Banner>();
</script>

<template>
  <div class="banner">
    <div class="banner__text-wrapper">
      <Heading size="md" tag="h2" class="banner__title">
        {{ props.title }}
      </Heading>
      <p class="banner__description">
        {{ props.description }}
      </p>
      <LeadsForm class="banner__form" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  padding: 2.5rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 1rem;
  background: #171717;

  @media (min-width: 768px) {
    padding: 5rem 6rem;
  }

  &__text-wrapper {
    max-width: 33.5rem;
  }

  &__description {
    margin-top: 1.5rem;
    opacity: 0.72;
  }

  &__form {
    margin-top: 3rem;
  }
}
</style>
