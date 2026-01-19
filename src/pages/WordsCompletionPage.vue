<template>
    <CardStepper />
  <div class="container-cards">
    <WordCard v-for="(item, index) in stepsById" :key="item.id" v-bind="item" />
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import CardStepper from 'src/components/CardStepper.vue';
import WordCard from 'src/components/WordCard.vue';
import { useStepsStore } from 'src/stores/steps-store';
import { computed } from 'vue';

const { getWordsByPage, selectedPage } = storeToRefs(useStepsStore());

const stepsById = computed(() => {
  return getWordsByPage.value(selectedPage.value);
});


</script>
<style lang="scss">
  .container-cards {
    display: flex;
    justify-content: space-around;
    // flex-direction: column;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;
  }

  .container-paginator {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    position: sticky;
    bottom: 0;
  }
</style>
