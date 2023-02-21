<template>
  <v-container>
    <v-row>
      <span class="zipcode-mark"></span>
      <v-col cols="10">
        <v-text-field
          :rules="nameRules"
          label="郵便番号"
          v-model="textPostalCode"
          @input="scanPostalCode"
          @blur="input"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-btn @click="sendAddress()">住所を表示</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
import { fetchAddressByZipcode } from '@/plugins/yubinbango';

@Component({})
export default class PostalCode extends Vue {
  public textPostalCode: string = '';
  public addressVal: string = '';
  public zipCode: string = '';

  nameRules: Array<object> = [
    (v: string) => !!v || '郵便番号を入力してください',
    (v: string) => /^[0-9]{3}-[0-9]{4}$/.test(v) || 'ハイフンと数値で入力してください',
  ];

  @Emit() //郵便番号をorganismsへ持っていく
  scanPostalCode() {
    return this.textPostalCode;
  }

  @Prop({ type: String }) //郵便番号の受け取った値をorganismsからPropで受け取る
  postalCodeVal!: string;

  @Emit() //郵便番号から住所に変換しorganismsに送る
  async sendAddress() {
    this.zipCode = this.postalCodeVal;
    const address = await fetchAddressByZipcode(this.zipCode);
    const { region, locality, street, extended } = address;
    this.addressVal = region + locality + street + extended;
    return this.addressVal;
  }
  input() {
    this.$store.commit('customer/set', { postalcode: this.textPostalCode });
  }
}
</script>
