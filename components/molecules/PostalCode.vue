<template>
  <v-sheet>
    <v-row>
      <PostalCodeLabel />
      <v-col cols="2"><ThreeNumbersTextBox :postalCode1="postalCode1" @get-postal-code-one="getPostalCodeOne" /></v-col>
      <v-col cols="3"><FourNumbersTextBox :postalCode2="postalCode2" @get-postal-code-two="getPostalCodeTwo" /></v-col>
      <v-col cols="2"
        ><AddressSearch
          :officePostalCode="officePostalCode"
          :postalCode1="postalCode1"
          :postalCode2="postalCode2"
          @send-address="sendAddress"
      /></v-col>
      <v-spacer />
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
import PostalCodeLabel from '~/components/atoms/label/PostalCodeLabel.vue';
import ThreeNumbersTextBox from '~/components/atoms/input/ThreeNumbersTextBox.vue';
import FourNumbersTextBox from '~/components/atoms/input/FourNumbersTextBox.vue';
import AddressSearch from '~/components/atoms/button/AddressSearch.vue';
@Component({
  components: {
    PostalCodeLabel,
    ThreeNumbersTextBox,
    FourNumbersTextBox,
    AddressSearch,
  },
})
export default class DashBoard extends Vue {
  private address: string = '';

  @Emit()
  sendAddress(val: string): void {
    this.address = val;
  }

  @Emit()
  getPostalCodeOne(val: string): string {
    return val;
  }

  @Emit()
  getPostalCodeTwo(val: string): string {
    return val;
  }

  @Prop({ type: String })
  officePostalCode!: string;

  @Prop({ type: String })
  postalCode1!: string;

  @Prop({ type: String })
  postalCode2!: string;
}
</script>
