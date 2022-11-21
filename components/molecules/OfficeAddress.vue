<template>
  <v-sheet>
    <v-row>
      <AddressLabel />
      <v-col cols="4"><AddressOne :addressVal="addressVal" /></v-col>
      <ShowMap />
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
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
  @Prop({ type: String })
  addressVal!: string;
}
</script>
