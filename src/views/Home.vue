<template>
  <div class="home">
    <HoldingCreator/>
    <HoldingList/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HoldingCreator from '@/components/HoldingCreator.vue';
import HoldingList from '@/components/HoldingList.vue';

export default Vue.extend({
  name: 'home',
  components: {
    HoldingCreator,
    HoldingList,
  },
});
</script>
