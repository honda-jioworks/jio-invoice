<template>
  <v-row no-gutter>
    <v-col cols="10">
      <v-text-field outlined v-model="value_in" @blur="input" dense :rules="rules" clearable>
        <template v-slot:label>伝番<span style="color: red"> *</span></template>
      </v-text-field></v-col
    >
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class SlipNumber extends Vue {
  rules: Array<object> = [(v: any) => !!v || '選択してください'];
  value_in!: any;
  input() {
    this.$store.commit('invoiceIssue/set', { slipNumber: this.value_in });
  }
}
</script>
<style lang="scss" scoped>
.w1 {
  font-size: 95%;
  margin-right: 2%;
  margin-top: 14%;
  margin-left: 2%;
}
</style>
