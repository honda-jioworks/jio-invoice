<template>
  <v-row>
    <v-col class="aa1">
      <v-text-field v-model="positionName" @blur="input" outlined @input="scanPosition" label="役職"></v-text-field>
    </v-col>
    <v-col class="bb1">
      <v-text-field v-model="staffName" @blur="input" outlined @input="scanStaff" label="担当者"></v-text-field>
    </v-col>
    <v-col cols="2" class="cc1">
      <v-select
        v-model="honorific"
        @blur="input"
        outlined
        @input="scanHonorific"
        :items="items"
        label="敬称"
      ></v-select>
    </v-col>
    <v-col cols="2"></v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class PersonnelForm extends Vue {
  items: Array<string> = ['様', '殿', '御中'];
  positionName: string = '';
  staffName: string = '';
  honorific: string = '';

  input() {
    this.$store.commit('invoiceIssue/set', { positionName: this.positionName });
    this.$store.commit('invoiceIssue/set', { staffName: this.staffName });
    this.$store.commit('invoiceIssue/set', { honorific: this.honorific });
  }

  @Emit()
  scanPosition(): string {
    return this.positionName;
  }

  @Emit()
  scanStaff(): string {
    return this.staffName;
  }

  @Emit()
  scanHonorific(): string {
    return this.honorific;
  }
}
</script>
<style lang="scss">
.aa1 {
  margin-left: 2%;
}
.cc1 {
  margin-right: 2%;
}
</style>
