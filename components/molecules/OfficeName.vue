<template>
  <v-sheet>
    <v-row>
      <v-col cols="4" class="wrap30">
        <OfficeNameLabel />
      </v-col>
      <v-col cols="6" class="wrap33">
        <OfficeNameTextBox :label="label" :rule="rule" :value.sync="officename" />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
import OfficeNameLabel from '~/components/atoms/label/OfficeNameLabel.vue';
import OfficeNameTextBox from '~/components/atoms/input/OfficeNameTextBox.vue';
@Component({ components: { OfficeNameTextBox, OfficeNameLabel } })
export default class OfficeName extends Vue {
  @PropSync('officename_val', { type: String })
  officename!: string;

  label: string = '会社名';

  rule: Array<object> = [(v: string) => !!v || '項目を入力してください'];
}
</script>
<style lang="scss" scoped>
.wrap30 {
  margin-left: 30px;
}
.wrap33 {
  margin-left: -25px;
}
</style>
