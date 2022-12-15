<template>
  <v-sheet>
    <v-row>
      <OfficeNameLabel />
      <OfficeNameTextBox :officeName="officeName" />
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import OfficeNameLabel from '~/components/atoms/label/OfficeNameLabel.vue';
import OfficeNameTextBox from '~/components/atoms/input/OfficeNameTextBox.vue';
@Component({ components: { OfficeNameTextBox, OfficeNameLabel } })
export default class OfficeName extends Vue {
  @Prop({ type: String })
  officeName!: string;
}
</script>
<style lang="scss"></style>
