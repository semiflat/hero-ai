<script setup lang="ts">
import { reactive } from "vue";
import Button from "./Button.vue";

export interface LeadsForm {
  allowStack?: boolean;
}

const props = defineProps<LeadsForm>();

const state = reactive({
  email: "",
});

// const submit = async (event) => {
//   const data = new FormData(event.target);

//   fetch(event.target.action, {
//     method: "POST",
//     body: data,
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
</script>

<template>
  <form
    class="leads-form"
    :class="{ 'leads-form--stacked': props.allowStack }"
    action="https://semiflat.us21.list-manage.com/subscribe/post?u=6061ed9523812d4f5b8c04db9&amp;id=7218e015e1&amp;f_id=004b5de1f0"
    method="post"
  >
    <label class="leads-form__label">Your e-mail</label>
    <input
      class="leads-form__input"
      type="email"
      name="EMAIL"
      id="mce-EMAIL"
      required
      v-model="state.email"
    />

    <!--<div id="mce-responses" class="clearfalse">
      <div class="response" id="mce-error-response" style="display: none"></div>
      <div
        class="response"
        id="mce-success-response"
        style="display: none"
      ></div>
    </div>-->

    <Button class="leads-form__button" tag="button" type="submit" primary>
      Join waitlist
    </Button>
  </form>
</template>

<style lang="scss" scoped>
.leads-form {
  $block: &;

  display: inline-flex;
  width: 100%;
  gap: 0.5rem;

  &__input {
    flex-grow: 1;
    min-width: 0;
    height: 2.5rem;
    border-radius: 0.666rem;
    border: none;
    padding: 0 0.75rem;
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 1);
    font-size: 0.875rem;

    &:focus,
    &:active {
      outline: none;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.32);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.72);
    }
  }

  // visually hidden
  &__label {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  &--stacked {
    flex-wrap: wrap;

    #{$block} {
      &__input {
        min-width: 10rem;
        max-width: 100%;
      }

      &__button {
        flex-grow: 1;

        @media (min-width: 768px) {
          flex-grow: 0;
          flex-shrink: 0;
        }
      }
    }
  }
}
</style>
