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
      <div class="row justify-between full-width">
        <q-btn
          color="primary"
          label="atrás"
          unelevated
          @click="setNextStepAndSelectedStep(false)"
          :disabled="selectedPage <= 1"
        />
        <q-space />
        <q-btn
          unelevated
          color="primary"
          :label="'Siguiente'"
          @click="setNextStepAndSelectedStep(true)"
          :disabled="selectedPage >= steps.length || !selectedStep?.completed"
        />
      </div>
      <div class="title-section">{{ selectedStep?.title }}</div>
      <div class="description-section">{{ selectedStep?.description }}</div>
    </q-step>

    <!-- <template v-slot:navigation>
      <div class="row justify-between full-width q-pa-md">

        <q-btn
          flat
          color="primary"
          label="atrás"
          class="q-ml-sm"
          @click="setNextStepAndSelectedStep(false)"
          :disabled="selectedPage <= 1"
        />
        <q-space />
        <q-btn
          color="primary"
          :label="'Siguiente'"
          @click="setNextStepAndSelectedStep(true)"
          :disabled="selectedPage >= steps.length || !selectedStep?.completed"
        />

      </div>
    </template> -->
  </q-stepper>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useStepsStore } from "src/stores/steps-store";

const { steps, selectedPage, selectedStep } = storeToRefs(useStepsStore());

const setNextStepAndSelectedStep = (next: boolean) => {
  next ? selectedPage.value++ : selectedPage.value--;
  selectedStep.value = steps.value.find(
    (step) => step.page === selectedPage.value,
  )!;
};
</script>
<style lang="scss" scoped>
.title-section {
  margin-top: 16px;
  font-size: 18px;
  font-weight: 500;
}


</style>
