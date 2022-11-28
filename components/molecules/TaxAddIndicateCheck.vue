<template>
  <v-container class="px-0" fluid>
    <v-row>
      <v-col>
        <v-checkbox label="合計請求書で消費税を合算表示する" v-model="tax" @change="getTax"></v-checkbox> 
      </v-col> 
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({})
  export default class TaxAddIndicateCheck extends Vue {

    tax: boolean=false;
  
  @Emit()
  getTax(tax: boolean): boolean {
    return this.tax;
  }
}
</script>