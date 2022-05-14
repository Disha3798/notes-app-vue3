<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white">
      {{ label }}
    </label>
    <textarea
      class="textarea"
      placeholder="placeholder"
      v-model="modelValue"
      maxlength="100"
      @input="$emit('update:modelValue', modelValue)"
      v-autofocus
    />
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vAutofocus } from "../../directives/vAutofocus";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  label: {
    type: String,
    default: "Label Text",
  },
});
</script>

