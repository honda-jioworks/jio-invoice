<template>
  <v-row>
    <v-col class="ddd1"><v-text-field v-model="tellNumber" outlined @input="scanTel" label="TEL"></v-text-field></v-col>
    <v-col class="eee1"><v-text-field v-model="faxNumber" outlined @input="scanFax" label="FAX"></v-text-field></v-col>
    <v-col cols="4"></v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class NumberForm extends Vue {
  tellNumber: string = '';
  faxNumber: string = '';

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
