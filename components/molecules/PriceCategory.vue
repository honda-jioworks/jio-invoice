<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="4">
        <v-select
          label="単価区分："
          :items="items"
          :rules="boxRules"
          item-text="category"
          item-value="categoryId"
          @change="getCategory"
          return-object
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({})
export default class PriceCategory extends Vue {
  items: Array<object> = [
    { category: '定価（上代）', categoryId: 1 },
    { category: '販売単価1', categoryId: 2 },
    { category: '販売単価2', categoryId: 3 },
    { category: '販売単価3', categoryId: 4 },
    { category: '販売単価4', categoryId: 5 },
    { category: '販売単価5', categoryId: 6 },
  ];
  boxRules: Array<any> = [(v: any) => !!v || '項目を選択してください'];
  category: any = '';

  @Emit()
  getCategory(category: any): any {
    return category;
  }
}
</script>
