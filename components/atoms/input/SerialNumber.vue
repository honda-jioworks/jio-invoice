<template>
  <v-text-field @input="getNewNumber" outlined> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class SerialNumber extends Vue {
  @Emit()
  getNewNumber(val: string): string {
    return val;
  }
}
</script>
