<template>
  <v-container fluid style="padding: 32px; height: 100%">
    <memo-header></memo-header>
    <v-divider></v-divider>
    <memo-list></memo-list>
  </v-container>
</template>

<script>
import MemoHeader from '@/components/MemoHeader.vue';
import MemoList from '@/components/MemoList.vue';
export default {
  components: {
    MemoHeader,
    MemoList
  }
};
</script>

<style></style>
