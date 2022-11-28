<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="3">
        <v-select
          label="税処理："
          :items="tax"
          :rules="boxRules"
          @change="getProcess"
          return-object
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({})
export default class TaxProcessing extends Vue {
  tax: Array<string> = ['内税', '外税', '合計請求',  '税なし',  ];
  boxRules: Array<object> = [(v: object) => !!v || '項目を選択してください'];
  process: string = '';

  @Emit()
  getProcess(process: string): string {
    return process;
  }
}
</script>
