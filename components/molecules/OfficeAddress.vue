<template>
  <v-sheet>
    <v-row>
      <AddressLabel />
      <v-col cols="4"
        ><AddressOne :address1="address1" :newAddress="newAddress" @change-address="changeAddress"
      /></v-col>
      <ShowMap
        :newAddress="newAddress"
        :postalCode1="postalCode1"
        :postalCode2="postalCode2"
        :address1="address1"
        @show-maptest="showMaptest"
      />
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
import AddressLabel from '~/components/atoms/label/AddressLabel.vue';
import AddressOne from '~/components/atoms/input/AddressOne.vue';
import ShowMap from '~/components/atoms/button/ShowMap.vue';
@Component({
  components: {
    AddressLabel,
    AddressOne,
    ShowMap,
  },
})
export default class OfficeAddress extends Vue {
  // 入力された住所の前半部分をorganismsに送信する
  @Emit()
  changeAddress(val: string): string {
    return val;
  }
  // 郵便番号の前3桁
  @Prop({ type: String })
  postalCode1!: string;
  // 郵便番号の後ろ4桁
  @Prop({ type: String })
  postalCode2!: string;
  // データベースから受け取った住所情報の前半部分
  @Prop({ type: String })
  address1!: string;
  // 入力された郵便番号をもとに生成された住所情報
  @Prop({ type: String })
  newAddress!: string;
}
</script>
