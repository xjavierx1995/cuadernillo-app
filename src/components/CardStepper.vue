<template>
  <q-stepper
    v-model="selectedPage"
    ref="stepper"
    contracted
    color="primary"
    animated
    flat
  >
    <q-step
      v-for="(item, index) in steps"
      :key="index"
      :name="item.page"
      :title="item.title ?? ''"
      icon="settings"
      :done="selectedPage > index + 1"
    >
    </q-step>

    <template v-slot:navigation>
      <div class="row justify-between full-width q-pa-md">
        <!-- <q-stepper-navigation> -->
        <q-btn flat color="primary" label="atrás" class="q-ml-sm" @click="selectedPage--" :disabled="selectedPage <= 1" />
        <q-space />
        <q-btn color="primary" :label="'Siguiente'" @click="selectedPage++" :disabled="selectedPage >= steps.length" />
        <!-- </q-stepper-navigation> -->
      </div>
    </template>
  </q-stepper>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useStepsStore } from "src/stores/steps-store";

const { steps, selectedPage } = storeToRefs(useStepsStore());
</script>
