  <template>
    <v-row>
        <v-col>
            <v-text-field v-model="textpostalCode" @input="scanPostalCode" label=〒></v-text-field>
        </v-col>
        <v-col>
            <v-btn @click="sendAddress()" >住所を検索</v-btn>
        </v-col>
    </v-row>
  </template>

  <script lang="ts">
  import { Vue, Component, Emit, Prop} from 'nuxt-property-decorator';
  import { fetchAddressByZipcode } from '@/plugins/yubinbango';
  @Component({ components: {} })
  export default class AddressSearch extends Vue {
  textpostalCode: string ='';
  addressVal: string = '';
  zipCode: string = '';

  @Emit()
  scanPostalCode(): string{
    return this.textpostalCode;
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
}
</script>