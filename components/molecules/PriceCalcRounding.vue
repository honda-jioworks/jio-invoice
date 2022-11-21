<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="5">
        <v-select
          label="単価計算の端数処理："
          :items="items"
          :rules="boxRules"
          item-text="process"
          item-value="processId"
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
  items: Array<object> = [
    { process: '基本情報に従う', processId: 1 },
    { process: '切り上げ', processId: 2 },
    { process: '切り捨て', processId: 3 },
    { process: '四捨五入', processId: 4 },
  ];
  boxRules: Array<any> = [(v: any) => !!v || '項目を選択してください'];
  pcrounding: any = '';

  @Emit()
  getPcrounding(pcrounding: any): any {
    return pcrounding;
  }
}
</script>
