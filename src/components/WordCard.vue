<template>
  <div>
    <q-card class="my-card" flat bordered>
      <q-card-section class="col-5 flex flex-center">
        <q-img
          class="rounded-borders word-image"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-card-section>
      <q-card-section class="text-center">
        <div class="text-h4 q-my-lg">{{ props.incompleteWord }}</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="center" class="q-pa-md">
         <q-btn v-for="(item, index) in props.sugestions" :key="index" round color="primary"  :label="item" />
      </q-card-actions>
    </q-card>
  </div>
</template>
<script setup lang="ts">
  import { WordI } from 'src/insterfaces/step-store.interface';

  const props = defineProps<WordI>();


</script>
<style lang="scss" scoped>
.my-card {
  width: 400px;
  max-width: 400px;
  margin: auto;
  border-radius: 50px;
  border: 6px dashed orange;
}
.word-image {
  width: 50%;
  height: 200px;
  object-fit: cover;
}

// .q-card--bordered {
//   border: 6px dashed red;
// }
</style>
