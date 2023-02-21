<template>
  <v-sheet>
    <v-row>
      <v-col cols="3" class="wrap31"><AddressTwoLabel /></v-col>
      <v-col cols="6" class="wrap32"><AddressTwo :label="label" :rule="rule" :value.sync="address2" /></v-col>
      <v-spacer />
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
import AddressTwoLabel from '~/components/atoms/label/AddressTwoLabel.vue';
import AddressTwo from '~/components/atoms/input/AddressTwo.vue';
@Component({
  components: {
    AddressTwoLabel,
    AddressTwo,
  },
})
export default class OfficeAddress2 extends Vue {
  @PropSync('address2_val', { type: String })
  address2!: string;

  label: string = '住所2';

  rule: Array<object> = [(v: string) => !!v || '項目を入力してください'];
}
</script>
<style lang="scss" scoped>
.wrap31 {
  margin-left: 48px;
}
.wrap32 {
  margin-left: -73px;
}
.wrap33 {
  padding-right: -10px;
}
</style>
