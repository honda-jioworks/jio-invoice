<template>
  <v-text-field :value="officeName"> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class OfficeNameTextBox extends Vue {
  @Prop({ type: String })
  officeName!: string;
}
</script>
