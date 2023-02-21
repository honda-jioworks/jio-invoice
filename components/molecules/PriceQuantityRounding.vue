<template>
  <v-container>
    <v-row>
      <v-col class="d-flex">
        <v-select :items="items" label="単価×数量の端数処理" :rules="boxRules" v-model="textName"></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync, Prop } from 'nuxt-property-decorator';

@Component({})
export default class PriceQuantityRounding extends Vue {
  @PropSync('value', { type: String })
  textName!: any;
  @Prop()
  items!: Array<string>;
  boxRules: Array<any> = [(v: any) => !!v || '項目を選択してください'];
}
</script>
