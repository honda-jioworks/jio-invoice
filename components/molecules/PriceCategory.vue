<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="4">
        <v-select
          label="単価区分："
          :items="price"
          :rules="boxRules"
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
  price: Array<string> = [
    '定価（上代）',
    '販売単価1', 
    '販売単価2', 
    '販売単価3',
    '販売単価4', 
    '販売単価5', 
  ];
  boxRules: Array<object> = [(v: string) => !!v || '項目を選択してください'];
  category: string = '';

  @Emit()
  getCategory(category: string): string {
    return category;
  }
}
</script>
