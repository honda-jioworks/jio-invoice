<template>
  <v-row>
    <v-col cols="6">
      <v-text-field v-model="corp" @blur="input" outlined @input="scanCorp" label="会社名"></v-text-field>
    </v-col>
    <v-col cols="6"></v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class CorporationName extends Vue {
  corp: string = '';

  input() {
    this.$store.commit('invoiceIssue/set', { corporationName: this.corp });
  }

  @Emit()
  scanCorp(): string {
    return this.corp;
  }
}
</script>
<style lang="scss" scoped>
.v-text-field {
  margin-left: 4%;
  margin-right: 13%;
}
</style>
