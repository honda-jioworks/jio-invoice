<template>
  <v-row>
    <v-col class="a2">
      <v-text-field v-model="addressVal" outlined @input="changeAddress"></v-text-field>
      <v-btn class="b2" @click="showMaptest">地図を表示</v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
@Component({})
export default class AddressForm extends Vue {
  //住所をorganismsへ送る
  @Emit()
  changeAddress(val: string): string {
    return val;
  }

  //organismsから住所をPropで受け取る
  @Prop({ type: String })
  addressVal!: string;

  @Emit()
  showMaptest() {
    window.open('https://www.google.com/maps/search/〒' + this.addressVal + '/', 'subwin', 'width=750,height=750');
  }
}
</script>
<style lang="scss" scoped>
.a2 {
  margin-left: 2%;
}
.b2 {
  padding-right: auto;
  margin-right: 490px;
  margin-top: 1%;
}
</style>
