<template>
  <div>
    <v-btn @click="sendAddress"> 住所を検索 </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
import { Core as YubinBangoCore } from 'yubinbango-core';
@Component({ components: {} })
export default class AddressSearch extends Vue {
  private postalCode1: string = '273';
  private postalCode2: string = '0012';
  private postalCode: string = '';
  private address: string = '';

  @Emit()
  sendAddress(_: string): string {
    new YubinBangoCore(this.officePostalCode, (addr: { region: string; locality: string; street: string }) => {
      this.address = addr.region; // 都道府県
      this.address += addr.locality; // 市区町村
      this.address += addr.street; // 町域
    });
    return this.address;
  }

  @Prop({ type: String })
  officePostalCode!: string;

  created(): void {
    this.postalCode = this.postalCode1 + this.postalCode2;
    new YubinBangoCore(this.officePostalCode, (addr: { region: string; locality: string; street: string }) => {
      this.address = addr.region; // 都道府県
      this.address += addr.locality; // 市区町村
      this.address += addr.street; // 町域
    });
  }
}
</script>
