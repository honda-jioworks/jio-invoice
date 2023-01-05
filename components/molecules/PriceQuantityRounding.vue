<template>
  <v-container>
    <v-row>
      <v-col class="d-flex">
        <v-select
          :items="items"
          label="単価×数量の端数処理"
          :rules="boxRules"
          v-model="textName"
          @change="sendPriceQuantityRounding"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({})
export default class PriceQuantityRounding extends Vue {
  textName: string = '';

  items: Array<string> = ['基本情報に従う', '切り上げ', '切り捨て', '四捨五入'];
  boxRules: Array<any> = [(v: any) => !!v || '項目を選択してください'];
  @Emit()
  sendPriceQuantityRounding() {
    return this.textName;
  }
}
</script>
