<template>
  <v-container>
    <v-row>
      <v-col class="d-flex">
        <v-select
          :items="items"
          label="単価区分"
          :rules="boxRules"
          v-model="textName"
          @change="sendPriceCategory"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({})
export default class PriceCategory extends Vue {
  textName: string = '';
  items: Array<string> = ['定価（上代）', '販売単価1', '販売単価2', '販売単価3', '販売単価4', '販売単価5'];
  boxRules: Array<any> = [(v: any) => !!v || '項目を選択してください'];

  @Emit()
  sendPriceCategory() {
    return this.textName;
  }
}
</script>
