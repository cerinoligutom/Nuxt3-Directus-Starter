<template>
  <div class="form-control">
    <label class="cursor-pointer label">
      <input v-model="modelValue" type="checkbox" class="mr-2 checkbox checkbox-primary" />
      <span class="label-text">{{ label }}</span>
    </label>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { useVModel } from '@vueuse/core';

interface IProps {
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modelValue: boolean;
}
const props = defineProps<IProps>();

interface IEmits {
  (e: 'update:modelValue', modelValue: boolean): void;
}
const emit = defineEmits<IEmits>();

const modelValue = useVModel(props, 'modelValue', emit);
</script>
