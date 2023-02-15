<template>
  <v-row>
    <v-col cols="2" class="a1">
      <v-text-field v-model="textPostalCode" outlined label="〒"></v-text-field>
    </v-col>
    <v-col>
      <v-btn @click="sendAddress()" class="d1">住所を検索</v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
import { fetchAddressByZipcode } from '@/plugins/yubinbango';
@Component({ components: {} })
export default class AddressSearch extends Vue {
  public textPostalCode: string = '';
  public addressVal: string = '';
  public zipCode: string = '';

  @Prop({ type: String }) //郵便番号の受け取った値をorganismsからPropで受け取る
  PostalCode!: string;

  @Emit() //郵便番号から住所に変換しorganismsに送る
  async sendAddress() {
    this.zipCode = this.textPostalCode;
    const address = await fetchAddressByZipcode(this.zipCode);
    const { region, locality, street, extended } = address;
    this.addressVal = region + locality + street + extended;
    return this.addressVal;
  }
}
</script>
<style lang="scss" scoped>
.a1 {
  margin-left: 2%;
  padding: auto, auto, auto, auto;
}
.d1 {
  padding: auto, auto, auto, auto;
  margin-top: 1%;
}
</style>
