<template>
  <v-row>
    <v-col class="c2">
      <v-text-field v-model="departmentName" @blur="input" outlined @input="scanDepartment" label="部署"></v-text-field>
    </v-col>
    <v-col class="d2">
      <v-text-field v-model="divisionName" @blur="input" outlined @input="scanDivision" label="課"></v-text-field>
    </v-col>
    <v-col cols="4" class="e2"></v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class BelongForm extends Vue {
  departmentName: string = '';
  divisionName: string = '';

  input() {
    this.$store.commit('invoiceIssue/set', { departmentName: this.departmentName });
    this.$store.commit('invoiceIssue/set', { divisionName: this.divisionName });
  }

  @Emit()
  scanDepartment(): string {
    return this.departmentName;
  }
  @Emit()
  scanDivision(): string {
    return this.divisionName;
  }
}
</script>
<style lang="scss" scoped>
.c2 {
  margin-left: 2%;
}
.e2 {
  margin-right: 2%;
}
</style>
