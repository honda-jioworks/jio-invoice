<template>
  <v-sheet>
    <v-row>
      <AddressTwoLabel />
      <v-col cols="4"><AddressTwo :address2="address2" /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import AddressTwoLabel from '~/components/atoms/label/AddressTwoLabel.vue';
import AddressTwo from '~/components/atoms/input/AddressTwo.vue';
@Component({
  components: {
    AddressTwoLabel,
    AddressTwo,
  },
})
export default class OfficeAddress extends Vue {
  @Prop({ type: String })
  address2!: string;
}
</script>
