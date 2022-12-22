<template>
  <v-sheet>
    <v-row>
      <v-col cols="3" class="wrap31"><AddressTwoLabel /></v-col>
      <v-col cols="6" class="wrap32"><AddressTwo :address2="address2" @change-address-two="changeAddressTwo" /></v-col>
      <v-spacer />
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
import AddressTwoLabel from '~/components/atoms/label/AddressTwoLabel.vue';
import AddressTwo from '~/components/atoms/input/AddressTwo.vue';
@Component({
  components: {
    AddressTwoLabel,
    AddressTwo,
  },
})
export default class OfficeAddress extends Vue {
  // データベースから受け取った住所情報の後半部分
  @Prop({ type: String })
  address2!: string;
  // 入力された住所の後半部分をorganismsに送信する
  @Emit()
  changeAddressTwo(val: string): string {
    return val;
  }
}
</script>
<style lang="scss" scoped>
.wrap31 {
  margin-left: 45px;
}
.wrap32 {
  margin-left: -65px;
}
.wrap33 {
  padding-right: -10px;
}
</style>
