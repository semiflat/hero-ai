<script setup lang="ts">
import ClockIcon from "../../icons/clock-fast-forward.svg";
import CubeIcon from "../../icons/cube.svg";
import FingerprintIcon from "../../icons/fingerprint.svg";
import MagicWandIcon from "../../icons/magic-wand.svg";
import TextInputIcon from "../../icons/text-input.svg";
import UploadCloudIcon from "../../icons/upload-cloud.svg";

import CardSecondary from "../../components/CardSecondary.vue";
import Section from "../../components/Section.vue";

const cards = [
  {
    icon: CubeIcon,
    title: "Beautiful website in seconds",
    description:
      "Type in your prompt and let Hero create a unique, coded website for your brand.",
  },
  {
    icon: ClockIcon,
    title: "More time for other tasks",
    description:
      "Hero will instantly generate a website that normally would take days to ship.",
  },
  {
    icon: MagicWandIcon,
    title: "Copy generated in seconds",
    description:
      "Leverage the power of AI to write the copy for your site. And if you don’t like it, just generate again.",
  },
  {
    icon: UploadCloudIcon,
    title: "Everything in the cloud",
    description:
      "Your project will be waiting in your account to update whenever you feel like it.",
  },
  {
    icon: FingerprintIcon,
    title: "A brand that’s uniquely yours",
    description:
      "Your website will match your existing brand, but maybe you’re open to trying something new?",
  },
  {
    icon: TextInputIcon,
    title: "Full control over assets",
    description:
      "You get full control over everything - in case unlimited design and copy revisions just don’t cut it.",
  },
];
</script>

<template>
  <Section
    class="benefits-section"
    title="What you can expect."
    lead="Hero combines the power of a designer, web developer and a copywriter delivering top quality in seconds."
  >
    <ul class="benefits-section__list">
      <li v-for="card in cards">
        <CardSecondary v-bind="card" />
      </li>
    </ul>
  </Section>
</template>

<style lang="scss" scoped>
.benefits-section {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 2rem;

    @media (min-width: 1040px) {
      grid-gap: 4rem;
    }
  }
}
</style>
