<template>
  <v-sheet>
    <v-row>
      <PostalCodeLabel />
      <v-col cols="2"><ThreeNumbersTextBox /></v-col>
      <v-col cols="2"><FourNumbersTextBox /></v-col>
      <v-col cols="2"><AddressSearch :postalCode="postalCode" @send-address="sendAddress" /></v-col>
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

  @Prop({ type: String })
  postalCode!: string;
}
</script>
