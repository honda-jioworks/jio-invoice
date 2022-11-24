<template>
  <v-text-field :value="address2"> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class AddressTwo extends Vue {
  @Prop({ type: String })
  address2!: string;
}
</script>
