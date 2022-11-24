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
  private address: string = '';

  @Prop({ type: String })
  officePostalCode!: string;

  @Prop({ type: String })
  postalCode1!: string;

  @Prop({ type: String })
  postalCode2!: string;

  @Emit()
  sendAddress(_: string): string {
    let newPostalCode: string = this.postalCode1 + this.postalCode2;
    new YubinBangoCore(newPostalCode, (addr: { region: string; locality: string; street: string }) => {
      this.address = addr.region; // 都道府県
      this.address += addr.locality; // 市区町村
      this.address += addr.street; // 町域
    });
    return this.address;
  }
}
</script>
