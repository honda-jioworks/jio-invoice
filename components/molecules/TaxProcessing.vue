<template>
  <v-container>
    <v-row>
      <v-col class="d-flex">
        <v-select :items="items" @blur="input" v-model="taxselect" label="税処理" :rules="boxRules"></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync, Prop } from 'nuxt-property-decorator';

@Component({})
export default class TaxProcessing extends Vue {
  @PropSync('value', { type: String })
  taxselect!: any;
  @Prop()
  items!: Array<string>;
  boxRules: Array<any> = [(v: any) => !!v || '項目を選択してください'];
  input() {
    this.$store.commit('company/set', { tax: this.taxselect });
  }
}
</script>
