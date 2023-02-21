<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12">
        <v-select :items="items" @blur="input" label="取引区分" :rules="boxRules" v-model="selected"></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync, Prop } from 'nuxt-property-decorator';

@Component({})
export default class TransactionSection extends Vue {
  @PropSync('value', { type: String })
  selected!: any;
  @Prop()
  items!: Array<string>;
  boxRules: Array<any> = [(v: any) => !!v || '項目を選択してください'];
  input() {
    this.$store.commit('customer/set', { transaction: this.selected });
  }
}
</script>
