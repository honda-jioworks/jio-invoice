<template>
  <v-row class="cc2">
    <v-col>
      <v-text-field v-model="data1" @blur="input" outlined @input="scanOne" label="＜振込先2等＞"></v-text-field>
      <v-text-field v-model="data2" @blur="input" outlined @input="scanTwo" label="＜振込先2等＞"></v-text-field>
      <v-text-field v-model="data3" @blur="input" outlined @input="scanThree" label="＜振込先2等＞"></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class AccountInformation extends Vue {
  data1: string = '';
  data2: string = '';
  data3: string = '';

  input() {
    this.$store.commit('invoiceIssue/set', { info1: this.data1 });
    this.$store.commit('invoiceIssue/set', { info2: this.data2 });
    this.$store.commit('invoiceIssue/set', { info3: this.data3 });
  }

  @Emit()
  scanOne(): string {
    return this.data1;
  }
  @Emit()
  scanTwo(): string {
    return this.data2;
  }
  @Emit()
  scanThree(): string {
    return this.data3;
  }
}
</script>
<style lang="scss" scoped>
.cc2 {
  margin-left: 1%;
  margin-right: 33%;
}
</style>
