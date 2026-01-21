<template>
  <div>
    <q-card
      class="my-card"
      :class="{ 'my-card--asked': props.word.completed }"
      flat
      bordered
    >
      <q-card-section class="col-5 flex flex-center">
        <img
          class="rounded-borders word-image"
          :src="props.word.imageUrl"
        />
      </q-card-section>
      <q-card-section class="text-center">
        <div class="text-h4 q-my-lg">
          {{
            props.word.completed
              ? props.word.completeWord
              : props.word.incompleteWord
          }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="center" class="q-pa-md">
        <q-btn
          v-for="(item, index) in props.word.sugestions"
          :key="index"
          round
          color="primary"
          :label="item"
          @click="setAnswer(item)"
          :disabled="props.word.completed"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import { WordI, StepI } from "src/insterfaces/step-store.interface";
import { useStepsStore } from "src/stores/steps-store";

const props = defineProps<{ word: WordI; step?: StepI }>();
const { updateStepCompletion, setNextStepAndSelectedStep } = useStepsStore();
const { selectedStep, selectedPage, steps } = storeToRefs(useStepsStore());
const $q = useQuasar();

const setAnswer = (answer: string) => {
  if (answer === props.word.answer) {
    props.word.completed = true;
    updateStepCompletion(props.step!.id);

    if (selectedStep.value?.completed && selectedPage.value >= steps.value.length ) {

      $q.dialog({
        title: "¡Felicidades!",
        message: "Has completado todas las palabras de este cuadernillo. ¡Eres genial!",
      })
        .onOk(() => {
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
      return;
    }

    if (selectedStep.value?.completed && selectedPage.value < steps.value.length) {
      $q.dialog({
        title: "¡Felicidades!",
        message: "Has completado todas las palabras de este paso. ¡Sigue así!",
      })
        .onOk(() => {
          setNextStepAndSelectedStep(true);
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
    }
  } else {
    $q.notify({
      type: "negative",
      message: "Respuesta incorrecta. ¡Inténtalo de nuevo!",
    });
  }
};
</script>
<style lang="scss" scoped>
.my-card {
  width: 300px;
  max-width: 400px;
  margin: auto;
  border-radius: 50px;
  border: 6px dashed orange;

  &--asked {
    border-color: rgb(19, 200, 19);
  }
}
.word-image {
  width: 50%;
  height: 200px;
  object-fit: contain;
}

// .q-card--bordered {
//   border: 6px dashed red;
// }
</style>
