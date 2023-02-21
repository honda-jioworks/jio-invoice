<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field :rules="nameRules" @blur="input" v-model="telnumber" label="TEL"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';

@Component({})
export default class TelNumberInput extends Vue {
  nameRules: Array<object> = [
    (v: string) => !!v || '電話番号を入力してください',
    (v: string) => /^0\d{1,3}-\d{2,4}-\d{3,4}$/.test(v) || 'ハイフンと数値を入力してください',
  ];
  @PropSync('value', { type: String })
  telnumber!: any;
  input() {
    this.$store.commit('customer/set', { telnumber: this.telnumber });
  }
}
</script>
