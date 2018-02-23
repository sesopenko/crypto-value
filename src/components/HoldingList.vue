<template>
    <div class="c-holdings">
        <BaseHolding
          v-for="(holding, index) in holdings"
          :key="index"
          :code="holding.code"
          :value="holding.value"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { IHolding } from '@/types';

import BaseHolding from '@/components/BaseHolding.vue';

export default Vue.extend({
    name: 'HoldingList',
    components: {
      BaseHolding
    },
    computed: {
      holdings() : Array<IHolding> {
        return this.$store.state.holdings;
      }
    }
});
</script>

<style scoped>
</style>