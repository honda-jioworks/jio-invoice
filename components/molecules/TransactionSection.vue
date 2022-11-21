<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="3">
        <v-select
          label="取引区分"
          :items="items"
          :rules="boxRules"
          item-text="section"
          item-value="sectionId"
          @change="getSection"
          return-object
        ></v-select>
        <!--<p>値：{{ selected }}</p>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({})
export default class TransactionSection extends Vue {
  items: Array<object> = [
    { section: '掛売上', sectionId: 1 },
    { section: '即時売上', sectionId: 2 },
  ];
  boxRules: Array<object> = [(v: object) => !!v || '項目を選択してください'];
  section: any = '';

  @Emit()
  getSection(section: any): any {
    return section;
  }
}
</script>
