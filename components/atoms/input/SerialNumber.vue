<template>
  <v-text-field @blur="input" v-model="value_in" @input="getNewNumber" outlined> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class SerialNumber extends Vue {
  value_in = '';
  input() {
    this.$store.commit('quotation/set', { serial: this.value_in });
  }
  @Emit()
  getNewNumber(val: string): string {
    return val;
  }
}
</script>
