<template>
  <v-container>
    <v-row>
      <v-col class="d-flex">
        <v-select
          :items="items"
          label="単価計算の端数処理"
          :rules="boxRules"
          v-model="textName"
          @change="sendPriceCalcRounding"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({})
export default class PriceCalcRounding extends Vue {
  textName: string = '';
  items: Array<string> = ['基本情報に従う', '切り上げ', '切り捨て', '四捨五入'];
  boxRules: Array<any> = [(v: any) => !!v || '項目を選択してください'];
  @Emit()
  sendPriceCalcRounding() {
    return this.textName;
  }
}
</script>
