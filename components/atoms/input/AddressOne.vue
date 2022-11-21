<template>
  <v-text-field :value="addressVal"> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class AddressOne extends Vue {
  @Prop({ type: String })
  addressVal!: string;
}
</script>
