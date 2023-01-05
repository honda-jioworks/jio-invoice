<template>
  <v-container class="px-0" fluid>
    <v-checkbox
      label="合計請求書で消費税を合算表示する"
      v-model="checkbox"
      @click="sendTaxAddIndicateCheck"
    ></v-checkbox>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class TaxAddIndicateCheck extends Vue {
  checkbox: boolean = false;

  @Emit()
  sendTaxAddIndicateCheck(_: boolean): boolean {
    return this.checkbox;
  }
}
</script>
