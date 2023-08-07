<script setup lang="ts">
import CardsGrid from "../../components/CardsGrid.vue";
import Section from "../../components/Section.vue";

const cards = [
  {
    lottiePath: "./lottie/from-prompt.json",
    title: "From prompt to website in seconds.",
    description:
      "Tell Hero about your startup and let it do its magic. Get a marketing page that’s ready to ship within seconds.",
  },
  {
    lottiePath: "./lottie/your-personal-copywriter.json",
    title: "Your personal AI copywriter",
    description:
      "Never wait to publish your website because you’re still working on copy.",
  },
  {
    lottiePath: "./lottie/editing-easy.json",
    title: "Editing easy like switching a toggle",
    description:
      "Want to add more features to your page? Do it with one click in Hero.",
  },
  {
    lottiePath: "./lottie/collaborate.json",
    title: "Collaborate with your team in the cloud",
    description:
      "Your projects live in the cloud, so you can always make updates on the go. Generate alone, or invite your team to chime in.",
  },
];

const title = [
  "This is not another bulky website builder.",
  "Redefining Website Building for SaaS Companies.",
  "Unleash Hero's Persuasive Power for SaaS Websites.",
  "Simplicity Meets Sophistication: Hero, the AI Website Generator for SaaS.",
  "Hero, the Revolutionary AI Website Generator for SaaS.",
  "Craft Digital Marvels: Unleash the Power of Your SaaS Website.",
  "Experience the Power of Advanced Website Generation for SaaS.",
  "Discover the Ultimate AI Solution for SaaS Websites!",
  "Innovation and Intuition Combined: Redefine the Very Essence of Your SaaS Website!",
  "Hero: Crafting Digital Marvels for SaaS Companies.",
];
const lead = [
  "Website builders usually make you choose between high quality, low effort or uniqueness. Hero does not.",
  "Unleashing Possibilities: Hero Shatters the Barrier Between Quality, Effort, and Uniqueness.",
  "No More Sacrifices: Hero Empowers You to Achieve Unprecedented Quality, Effortlessness, and Uniqueness.",
  "Unleash Your Vision: Hero Redefines the Paradigm of Quality, Effort, and Uniqueness.",
  "Uncompromising Excellence: Hero Pioneers the Trifecta of Quality, Effort, and Uniqueness.",
  "No More Trade-offs: Hero Empowers You with High Quality, Low Effort, and Unmatched Uniqueness.",
  "Breaking the Mold: Hero Transcends the Trade-off Between Quality, Effort, and Uniqueness.",
  "Unleash the Triumvirate: Hero Achieves High Quality, Low Effort, and Unparalleled Uniqueness.",
  "Defying Conventional Limits: Hero Offers the Perfect Blend of Quality, Effortlessness, and Uniqueness.",
  "Uncompromising Excellence: Hero Pioneers the Trifecta of Quality, Effort, and Uniqueness.",
];
</script>

<template>
  <Section :title="title" :lead="lead">
    <CardsGrid :cards="cards" />
  </Section>
</template>
