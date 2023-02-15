<template>
  <v-row>
    <v-col class="ddd1"
      ><v-text-field v-model="tellNumber" @blur="input" outlined @input="scanTel" label="TEL"></v-text-field
    ></v-col>
    <v-col class="eee1"
      ><v-text-field v-model="faxNumber" @blur="input" outlined @input="scanFax" label="FAX"></v-text-field
    ></v-col>
    <v-col cols="4"></v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class NumberForm extends Vue {
  tellNumber: string = '';
  faxNumber: string = '';
  input() {
    this.$store.commit('quotation/set', { tellNumber: this.tellNumber });
    this.$store.commit('quotation/set', { faxNumber: this.faxNumber });
  }

  @Emit()
  scanTel(): string {
    return this.tellNumber;
  }

  @Emit()
  scanFax(): string {
    return this.faxNumber;
  }
}
</script>
<style lang="scss" scoped>
.ddd1 {
  margin-left: 2%;
  margin-right: auto;
}
.eee1 {
  margin-left: auto;
  margin-right: 2%;
}
</style>
