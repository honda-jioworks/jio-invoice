<template>
  <v-container class="px-0" fluid>
    <v-checkbox @change="input" label="合計請求書で消費税を合算表示する" v-model="checkbox"></v-checkbox>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class TaxAddIndicateCheck extends Vue {
  @PropSync('value', { type: Boolean })
  checkbox!: any;
  input() {
    this.$store.commit('customer/set', { taxcheck: this.checkbox });
  }
}
</script>
