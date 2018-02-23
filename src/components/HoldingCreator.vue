<template>
  <div class="c-holding-creator">
    <form @submit.prevent="addHolding">
      <label>
        Crypto Code:
        <input type="text" v-model="code">
      </label>
      <label>
        Crypto Value:
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
      value: '1',
      defaultValue: '1'
    };
  },
  methods: {
    addHolding() {
      const holdingCode = this.code.toUpperCase().replace(/[^A-Z]/g, '');
      this.$store.dispatch('addHolding', {
        code: holdingCode,
        value: parseInt(this.value, 10),
      });
      this.code = '';
      this.value = this.defaultValue;
    },
  },
});
</script>

<style scoped>
</style>