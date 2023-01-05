<template>
  <v-container>
    <v-row>
      <v-col class="d-flex">
        <v-select :items="items" label="税処理" :rules="boxRules" @change="sendTax" v-model="textName"></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({})
export default class TaxProcessing extends Vue {
  textName: string = '';
  items: Array<string> = ['内税', '外税', '合計請求', '税なし'];
  boxRules: Array<any> = [(v: any) => !!v || '項目を選択してください'];

  @Emit()
  sendTax(textName: string): string {
    return this.textName;
  }
}
</script>
