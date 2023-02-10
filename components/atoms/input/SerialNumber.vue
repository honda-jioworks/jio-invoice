<template>
  <v-text-field @blur="input" v-model="serial" @input="getNewNumber" outlined> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class SerialNumber extends Vue {
  serial: string = '';
  @Emit()
  input() {
    this.$store.commit('invoiceIssue/set', { serial: this.serial });
  }
  getNewNumber(val: string): string {
    return val;
  }
}
</script>
