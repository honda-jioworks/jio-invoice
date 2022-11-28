<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="5">
        <v-select
          label="単価×数量の端数処理："
          :items="pricequatity"
          :rules="boxRules"
          @change="getPqrounding"
          return-object
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({})
export default class PriceQuantityRounding extends Vue {
  pricequatity: Array<string> = [
   '基本情報に従う', 
    '切り上げ', 
    '切り捨て', 
  ];
  boxRules: Array<object> = [(v: string) => !!v || '項目を選択してください'];
  pqrouding: string = '';

  @Emit()
  getPqrounding(pqrounding: string): string {
    return pqrounding;
  }
}
</script>
