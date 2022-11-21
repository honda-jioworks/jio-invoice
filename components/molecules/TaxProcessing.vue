<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="3">
        <v-select
          label="税処理："
          :items="items"
          :rules="boxRules"
          item-text="process"
          item-value="processId"
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
  items: Array<object> = [
    { process: '内税', processId: 1 },
    { process: '外税', processId: 2 },
    { process: '合計請求', processId: 3 },
    { process: '税なし', processId: 4 },
  ];
  boxRules: Array<object> = [(v: object) => !!v || '項目を選択してください'];
  process: any = '';

  @Emit()
  getProcess(process: any): any {
    return process;
  }
}
</script>
