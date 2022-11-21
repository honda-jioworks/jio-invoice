<template>
  <v-text-field :value="postalCode2" :counter="4" solo> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class FourNumbersTextBox extends Vue {
  @Prop({ type: String })
  postalCode2!: string;
}
</script>
