<script setup lang="ts">
import { ref } from "vue";
import Poster from "../assets/video-poster.webp";
import PosterMobile from "../assets/video-poster-mobile.webp";
import Teaser from "../assets/video-teaser.mp4";
import PlayIcon from "../assets/play-icon.svg";

const video = ref(null);
const showPoster = ref(true);

const playVideo = () => {
  video.value.play();
  showPoster.value = false;
};
</script>

<template>
  <div class="video-player">
    <div v-if="showPoster" class="video-player__poster" @click="playVideo">
      <picture>
        <source media="(min-width: 768px)" :srcset="Poster" />
        <img
        class="video-player__poster-image"
        :src="PosterMobile"
        loading="lazy"
        alt=""
      />
      </picture>
    
      <button class="video-player__poster-button" aria-label="Play the video">
        <img class="video-player__play-icon" :src="PlayIcon" alt="" />
      </button>
    </div>
    <video
      class="video-player__player"
      controls
      width="250"
      ref="video"
      :poster="Poster"
    >
      <source :src="Teaser" type="video/mp4" />
      Download the <a :href="Teaser">video</a>
    </video>
  </div>
</template>

<style lang="scss" scoped>
.video-player {
  $block: &;

  position: relative;
  width: 100%;
  border-radius: .5rem;
  overflow: hidden;
  box-shadow: 0px 0px 80px 20px rgba(0, 0, 0, 0.64);

  @media (min-width: 768px) {
    border-radius: 0.75rem;
  }

  &__poster {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        #{$block}__poster-button {
          transform: translate(-50%, -50%) scale(1.05);
        }
      }
    }
  }

  &__poster-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 4rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border: none;
    background: linear-gradient(180deg, #ffffff 0%, #e1e1e1 100%);
    box-shadow: 0px 19.3128px 38.6256px #000000;
    cursor: pointer;
    transition: 0.5s ease;

    @media (min-width: 768px) {
      width: 5.5rem;
    }
  }

  &__play-icon {
    position: absolute;
    top: 1rem;
    left: calc(1rem + 2px); // optically center
    width: 2rem;
    aspect-ratio: 1 / 1;

    @media (min-width: 768px) {
      top: 1.5rem;
      left: calc(1.5rem + 2px); // optically center
      width: 2.5rem;
    }
  }

  &__player {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
}
</style>
