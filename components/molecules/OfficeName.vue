<template>
  <v-sheet>
    <v-row>
      <v-col cols="4" class="wrap32">
        <OfficeNameLabel />
      </v-col>
      <v-col cols="6" class="wrap33">
        <OfficeNameTextBox :officeName="officeName" />
      </v-col>
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
<style lang="scss" scoped>
.wrap32 {
  margin-left: 35px;
}
.wrap33 {
  margin-left: -30px;
  margin-top: -10px;
}
</style>
