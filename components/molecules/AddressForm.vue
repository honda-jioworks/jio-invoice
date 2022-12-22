<template>
    <v-row>
        <v-col>
            <v-text-field v-model="addressVal" @input="changeAddress" ></v-text-field>
            <v-btn @click="showMaptest" >地図を表示</v-btn>
        </v-col>
    </v-row>
  </template>

  <script lang="ts">
  import { Vue, Component, Emit, Prop} from 'nuxt-property-decorator';
  @Component({ })
  export default class AddressForm extends Vue {

  @Emit()
  changeAddress(val:string): string{
    return val;
  }

  @Prop({ type: String }) 
  addressVal!: string;

  @Emit()
  showMaptest() {
    window.open('https://www.google.com/maps/search/〒' + this.addressVal + '/', 'subwin', 'width=750,height=750');
  }
}
</script>