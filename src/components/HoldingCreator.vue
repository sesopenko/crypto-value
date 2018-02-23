<template>
  <div class="c-holding-creator">
    <form @submit.prevent="addHolding">
      <label>
        Holding Code
        <input type="text" v-model="code">
      </label>
      <label>
        Holding Value
        <input type="number" v-model="value">
      </label>
      <input
        type="submit"
        data-test-add
        value="Add Holding"
        @click.prevent="addHolding"
      >
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HoldingCreator',
  data() {
    return {
      code: '',
      value: '0',
    };
  },
  methods: {
    addHolding() {
      this.$store.dispatch('addHolding', {
        code: this.code,
        value: parseInt(this.value, 10),
      });
      this.code = '';
      this.value = '0';
    },
  },
});
</script>

<style scoped>
</style>