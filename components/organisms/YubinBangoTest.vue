<template>
  <div>
    <h1>郵便番号テスト</h1>

    <v-text-field v-model="zipCode" label="郵便番号"></v-text-field>
    <v-text-field v-model="region_id" label="リージョンID"></v-text-field>
    <v-text-field v-model="region" label="住所１"></v-text-field>
    <v-text-field v-model="locality" label="住所２"></v-text-field>
    <v-text-field v-model="street" label="住所３"></v-text-field>
    <v-text-field v-model="extended" label="住所４"></v-text-field>

    <v-btn color="primary" dark @click="zip()">住所取得</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Emit } from 'nuxt-property-decorator';
import { fetchAddressByZipcode } from '@/plugins/yubinbango';

@Component({})
export default class DialogTestComponent extends Vue {
  zipCode: string = '';
  region_id: number = 0;
  region: string = '';
  locality: string = '';
  street: string = '';
  extended: string = '';

  @Emit()
  async zip() {
    const address = await fetchAddressByZipcode(this.zipCode);
    const { region_id, region, locality, street, extended } = address;
    this.region_id = region_id;
    this.region = region;
    this.locality = locality;
    this.street = street;
    this.extended = extended;
  }
}
</script>
