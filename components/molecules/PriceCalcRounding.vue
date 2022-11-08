<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="5"
      >
        <v-select
          :items="items"
          label="単価計算の端数処理"
          :rules="boxRules"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
})
export default class PriceCalcRounding extends Vue {
  items: Array<string> = ["基本情報に従う", "切り上げ", "切り捨て", "四捨五入"];
  boxRules: Array<any> = [
    (v: any) => !!v || "項目を選択してください",
  ];
}
</script>