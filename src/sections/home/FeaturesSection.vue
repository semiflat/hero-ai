<script setup lang="ts">
import CardsGrid from "../../components/CardsGrid.vue";
import Section from "../../components/Section.vue";

const cards = [
  {
    lottiePath: "./hero-lp/lottie/from-prompt.json",
    title: "From prompt to website in seconds.",
    description:
      "Tell Hero about your startup and let it do its magic. Get a marketing page that’s ready to ship within seconds.",
  },
  {
    lottiePath: "./hero-lp/lottie/your-personal-copywriter.json",
    title: "Your personal AI copywriter",
    description:
      "Never wait to publish your website because you’re still working on copy.",
  },
  {
    lottiePath: "./hero-lp/lottie/editing-easy.json",
    title: "Editing easy like switching a toggle",
    description:
      "Want to add more features to your page? Do it with one click in Hero.",
  },
  {
    lottiePath: "./hero-lp/lottie/collaborate.json",
    title: "Collaborate with your team in the cloud",
    description:
      "Your projects live in the cloud, so you can always make updates on the go. Generate alone, or invite your team to chime in.",
  },
];

const title = [
  "This is not another bulky website builder.",
  "Another title",
  "Lorem ipsum dolor amet"
];
const lead = [
  "Website builders usually make you choose between high quality, low effort or uniqueness. Hero does not.",
  "Another description",
  "Consider building an array that includes the range except for the numbers in the array"
];
</script>

<template>
  <Section :title="title" :lead="lead">
    <CardsGrid :cards="cards" />
  </Section>
</template>
