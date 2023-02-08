<template>
  <div class="form-control">
    <label class="label">{{ label }}</label>
    <input v-bind="$attrs" v-model="modelValue" class="input input-primary input-md" />
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
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modelValue: any;
}
const props = defineProps<IProps>();

interface IEmits {
  (e: 'update:modelValue', modelValue: string): void;
}
const emit = defineEmits<IEmits>();

const modelValue = useVModel(props, 'modelValue', emit);
</script>
