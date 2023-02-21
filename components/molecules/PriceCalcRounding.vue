<template>
  <v-container>
    <v-row>
      <v-col class="d-flex">
        <v-select
          :items="items"
          @blur="input"
          label="単価計算の端数処理"
          :rules="boxRules"
          v-model="textName"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';

@Component({})
export default class PriceCalcRounding extends Vue {
  @PropSync('value', { type: String })
  textName!: any;
  items: Array<string> = ['基本情報に従う', '切り上げ', '切り捨て', '四捨五入'];
  boxRules: Array<any> = [(v: any) => !!v || '項目を選択してください'];
  input() {
    this.$store.commit('customer/set', { pricecalc: this.textName });
  }
}
</script>
