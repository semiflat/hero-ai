<script setup lang="ts">
import StarsIcon from "../icons/star-gradient.svg";

export interface Button {
  hasIcon?: boolean;
  minor?: boolean;
  primary?: boolean;
  tag?: string;
}
const props = defineProps<Button>();
</script>

<template>
  <component
    :is="tag || 'a'"
    class="button"
    :class="{ 'button--primary': props.primary, 'button--minor': props.minor }"
  >
    <img
      v-if="props.hasIcon"
      class="button__icon"
      :src="StarsIcon"
      alt=""
      loading="lazy"
    />
    <span class="button__text"><slot></slot></span>
  </component>
</template>

<style lang="scss" scoped>
$border-width: 1px;
.button {
  $block: &;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 0.666rem;
  border: 1px solid;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: inset 0px 4px 6px rgba(255, 255, 255, 0.12);
  cursor: pointer;
  transition: 0.3s ease;
  text-decoration: none;

  &__icon {
    display: block;
    width: 1rem;
    aspect-ratio: 1 / 1;
  }

  @media (hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }

  &--primary {
    position: relative;
    background: #171717;
    background-clip: padding-box;
    border: $border-width solid transparent;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -$border-width;
      border-radius: inherit;
      background-position: center center;
      background: linear-gradient(264.69deg, #13f1ff 0%, #9e7cff 100%);
      background-size: 150%;
      transition: 0.3s ease;
    }

    @media (hover: hover) {
      &:hover {
        opacity: 1;

        &::before {
          background-position: right center;
        }

        #{$block} {
          &__text {
            background-position: right center;
          }
        }
      }
    }

    &[disabled] {
      pointer-events: none;
      opacity: 0.5;

      &::before {
       opacity: 0;
      }

      #{$block} {
        &__text {
          background: rgba(255, 255, 255, 0.5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }

        &__icon {
          filter: grayscale(1);
        }
      }
    }

    #{$block} {
      &__text {
        background: linear-gradient(264.69deg, #13f1ff 0%, #9e7cff 100%);
        background-position: center center;
        background-size: 150%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        transition: 0.3s ease;
      }
    }
  }

  &--minor {
    height: 1.875rem;
  }
}
</style>
