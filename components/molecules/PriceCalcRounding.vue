<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="5">
        <v-select
          label="単価計算の端数処理："
          :items="pricecalc"
          :rules="boxRules"
          @change="getPcrounding"
          return-object
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({})
export default class PriceCalcRounding extends Vue {
  pricecalc: Array<string> = [
    '基本情報に従う', 
    '切り上げ', 
    '切り捨て', 
    '四捨五入', 
  ];
  boxRules: Array<object> = [(v: string) => !!v || '項目を選択してください'];
  pcrounding: string = '';

  @Emit()
  getPcrounding(pcrounding: string): string {
    return pcrounding;
  }
}
</script>
