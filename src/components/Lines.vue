<script setup lang="ts">
import BgLines from "../assets/hero-lines.svg";
</script>

<template>
  <div class="lines">
    <img :src="BgLines" alt="" />

    <div class="lines__rockets lines__rockets--left" />
    <div class="lines__rockets lines__rockets--right" />
    <div class="lines__rockets lines__rockets--middle" />
  </div>
</template>

<style lang="scss" scoped>
@keyframes lines {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.33;
  }
}

$rocket-1-skew: -27deg;
$rocket-2-skew: -12deg;
$rocket-3-skew: 12.2deg;
$rocket-4-skew: 33deg;
$rocket-5-skew: -4deg;

@keyframes rocket-1 {
  0% {
    transform: skew($rocket-1-skew) translateY(-500px);
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  15% {
    opacity: 1;
  }

  40% {
    opacity: 1;
  }

  50% {
    transform: skew($rocket-1-skew) translateY(900px);
    opacity: 1;
  }

  100% {
    transform: skew($rocket-1-skew) translateY(900px);
    opacity: 1;
  }
}

@keyframes rocket-2 {
  0% {
    transform: skew($rocket-2-skew) translateY(-500px);
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  15% {
    opacity: 1;
  }

  30% {
    opacity: 1;
  }

  50% {
    transform: skew($rocket-2-skew) translateY(800px);
    opacity: 1;
  }

  100% {
    transform: skew($rocket-2-skew) translateY(800px);
    opacity: 1;
  }
}

@keyframes rocket-3 {
  0% {
    transform: skew($rocket-3-skew) translateY(-300px);
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  15% {
    opacity: 1;
  }

  20% {
    opacity: 1;
  }

  50% {
    transform: skew($rocket-3-skew) translateY(1000px);
    opacity: 1;
  }

  100% {
    transform: skew($rocket-3-skew) translateY(1000px);
    opacity: 1;
  }
}

@keyframes rocket-4 {
  0% {
    transform: skew($rocket-4-skew) translateY(-300px);
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  12% {
    opacity: 1;
  }

  18% {
    opacity: 0;
  }

  50% {
    transform: skew($rocket-4-skew) translateY(1000px);
    opacity: 0;
  }

  100% {
    transform: skew($rocket-4-skew) translateY(1000px);
    opacity: 0;
  }
}

@keyframes rocket-5 {
  0% {
    transform: skew($rocket-5-skew) translateY(-200px);
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  12% {
    opacity: 1;
  }

  18% {
    opacity: 0;
  }

  50% {
    transform: skew($rocket-5-skew) translateY(1000px);
    opacity: 0;
  }

  100% {
    transform: skew($rocket-5-skew) translateY(1000px);
    opacity: 0;
  }
}

.lines {
  width: 1440px;
  mix-blend-mode: overlay;
  -webkit-mix-blend-mode: overlay;


  img {
    opacity: 0;
    animation: lines 1s 0.75s ease-in-out forwards;
  }

  &__rockets {
    position: absolute;
    top: 0;
    left: 0;
    aspect-ratio: 1440 / 1095;

    &::before,
    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      border-radius: 2px;
      background-blend-mode: overlay;
      mix-blend-mode: normal;
      filter: blur(0.5px);
      width: 1px;
      height: 80px;
      background: linear-gradient(
        23.44deg,
        #ffffff -0.1%,
        rgba(255, 255, 255, 0) 99.99%
      );
    }

    &--left {
      &::before {
        top: 107px;
        left: 645px;
        transform: skew($rocket-1-skew) translateY(-500px);
        animation: rocket-1 4.5s 2s cubic-bezier(0.5, 1, 0.89, 1) forwards
          infinite;
      }

      &::after {
        top: 360px;
        left: 631.5px;
        transform: skew($rocket-2-skew) translateY(-500px);
        animation: rocket-2 4.8s 3s cubic-bezier(0.5, 1, 0.89, 1) forwards
          infinite;
      }
    }

    &--right {
      &::before {
        top: 120px;
        left: 756px;
        transform: skew($rocket-3-skew) translateY(-500px);
        animation: rocket-3 4.8s 1s cubic-bezier(0.5, 1, 0.89, 1) forwards
          infinite;
      }

      &::after {
        top: 120px;
        left: 825px;
        transform: skew($rocket-4-skew) translateY(-500px);
        animation: rocket-4 4.5s 3.5s cubic-bezier(0.5, 1, 0.89, 1) forwards
          infinite;
      }
    }

    &--middle {
      &::before {
        top: 120px;
        left: 708px;
        transform: skew($rocket-5-skew) translateY(-200px);
        animation: rocket-5 4s 1.5s cubic-bezier(0.5, 1, 0.89, 1) forwards
          infinite;
      }

      &::after {
        content: none;
      }
    }
  }
}
</style>
