<template>
    <div class="c-holding">
        <div data-test-holding-code>
          {{ code }}
        </div>
        <div data-test-holding-value>
          {{ value }}
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { IHolding } from '@/types';

export default Vue.extend({
    name: 'BaseHolding',
    props: {
      code: {
        type: String,
        required: true
      },
      value: {
        type: Number,
        required: true
      }
    },
    computed: {

    }
});
</script>

<style scoped>
</style>