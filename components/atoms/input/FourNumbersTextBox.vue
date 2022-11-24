<template>
  <v-text-field v-model="postalCode2" @input="getPostalCodeTwo" :counter="4" solo> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class FourNumbersTextBox extends Vue {
  @Prop({ type: String })
  postalCode2!: string;

  @Emit()
  getPostalCodeTwo(val: string): string {
    return val;
  }
}
</script>
