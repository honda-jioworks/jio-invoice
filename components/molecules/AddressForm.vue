<template>
  <v-row>
    <v-col cols="5" class="a2">
      <v-text-field v-model="addressValInternal" @change="input" outlined label="＜住所＞"></v-text-field>
    </v-col>
    <v-btn class="b2" @click="showMaptest">地図を表示</v-btn>
    <v-btn @click="test">ooo</v-btn>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
@Component({})
export default class AddressForm extends Vue {
  //organismsから住所をPropで受け取る
  @Prop({ type: String })
  addressVal!: string;

  get addressValInternal() {
    return this.addressVal;
  }

  set addressValInternal(value: string) {
    this.$store.commit('quotation/set', { addressForm: value });
  }

  input() {
    this.addressValInternal = this.addressVal;
  }

  test() {
    console.log(this.addressValInternal);
  }

  @Emit()
  showMaptest() {
    window.open(
      'https://www.google.com/maps/search/〒' + this.addressValInternal + '/',
      'subwin',
      'width=750,height=750'
    );
  }
}
</script>
<style lang="scss" scoped>
.a2 {
  margin-left: 2%;
}
.b2 {
  margin-top: 2%;
}
</style>
