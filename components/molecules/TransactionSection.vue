<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12">
        <v-select
          :items="items"
          label="取引区分"
          :rules="boxRules"
          v-model="selected"
          item-value="sectionId"
          item-text="label"
          @change="keepId"
          return-object
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({})
export default class TransactionSection extends Vue {
  items: Array<object> = [
    { label: '掛売上', sectionId: 1 },
    { label: '即時売上', sectionId: 2 },
  ];
  boxRules: Array<any> = [(v: any) => !!v || '項目を選択してください'];
  selected: any = '';

  @Emit()
  keepId(sectionId: any): any {
    return this.selected;
  }

  print(v: any): any {
    console.log(v);
  }
}
</script>
