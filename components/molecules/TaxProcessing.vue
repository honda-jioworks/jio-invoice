<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="3">
        <v-select :items="items" label="税処理：" :rules="boxRules"></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class TaxProcessing extends Vue {
  items: Array<string> = ['内税', '外税', '合計請求', '税なし'];
  boxRules: Array<any> = [(v: any) => !!v || '項目を選択してください'];
}
</script>
