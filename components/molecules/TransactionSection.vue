<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="3">
        <v-select
          label="取引区分"
          :items="transaction"
          :rules="boxRules"
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
  transaction: Array<string> = ['掛売上', '即時売上'];
  boxRules: Array<object> = [(v: string) => !!v || '項目を選択してください'];
  section: string = '';

  @Emit()
  getSection(section: string): string {
    return section;
  }
}
</script>
