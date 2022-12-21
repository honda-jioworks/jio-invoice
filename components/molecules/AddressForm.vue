<template>
    <v-row>
        <v-col>
            <v-text-field v-model="addressName" @input="scanAddress" ></v-text-field>
            <v-btn >地図を表示</v-btn>
        </v-col>
    </v-row>
  </template>

  <script lang="ts">
  import { Vue, Component, Emit} from 'nuxt-property-decorator';
  @Component({ })
  export default class AddressForm extends Vue {
    addressName: string = '';

  @Emit()
  scanAddress(): string{
    return this.addressName;
  }
  }
</script>