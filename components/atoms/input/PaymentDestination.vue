<template>
  <v-row dense>
    <v-col cols="8">
      <v-select outlined clearable @blur="input" v-model="value_in" dense :items="items" :rules="rules">
        <template v-slot:label>入金先<span style="color: red"> *</span></template></v-select
      ></v-col
    ><!--v-select等に変更-->

    <v-btn class="mx-2" dark outlined large height="40" color="indigo">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class PaymentDestination extends Vue {
  items: Array<string> = ['現金', '銀行振替'];
  rules: Array<object> = [(v: any) => !!v || '選択してください'];
  value_in = '';
  input() {
    this.$store.commit('invoiceIssue/set', { payment: this.value_in });
  }
}
</script>
<style lang="scss" scoped>
.mx-2 {
  margin-top: 1%;
}
</style>
