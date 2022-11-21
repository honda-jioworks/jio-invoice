<template>
  <v-text-field :value="postalCode1" :counter="3" solo> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class ThreeNumbersTextBox extends Vue {
  @Prop({ type: String })
  postalCode1!: string;

  @Prop({ type: String })
  telNumber1!: string;
}
</script>
