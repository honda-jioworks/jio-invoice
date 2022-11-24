<template>
  <v-sheet>
    <v-row>
      <AddressLabel />
      <v-col cols="4"
        ><AddressOne :address1="address1" :newAddress="newAddress" @change-address="changeAddress"
      /></v-col>
      <ShowMap
        :newAddress="newAddress"
        :postalCode1="postalCode1"
        :postalCode2="postalCode2"
        :address1="address1"
        @show-maptest="showMaptest"
      />
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
import AddressLabel from '~/components/atoms/label/AddressLabel.vue';
import AddressOne from '~/components/atoms/input/AddressOne.vue';
import ShowMap from '~/components/atoms/button/ShowMap.vue';
@Component({
  components: {
    AddressLabel,
    AddressOne,
    ShowMap,
  },
})
export default class OfficeAddress extends Vue {
  @Emit()
  changeAddress(val: string): string {
    return val;
  }

  @Prop({ type: String })
  postalCode1!: string;

  @Prop({ type: String })
  postalCode2!: string;

  @Prop({ type: String })
  address1!: string;

  @Prop({ type: String })
  newAddress!: string;
}
</script>
