<template>
  <v-text-field v-model="postalCode1" @input="getPostalCodeOne" :counter="3" solo> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class ThreeNumbersTextBox extends Vue {
  @Prop({ type: String })
  postalCode1!: string;

  @Prop({ type: String })
  telNumber1!: string;

  @Emit()
  getPostalCodeOne(val: string): string {
    return val;
  }
}
</script>
