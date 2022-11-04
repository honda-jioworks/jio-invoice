<template>
  <v-sheet>
    <v-row>
      <AddressTwoLabel />
      <AddressTwo />
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import AddressTwoLabel from '~/components/atoms/label/AddressTwoLabel.vue';
import AddressTwo from '~/components/atoms/input/AddressTwo.vue';
@Component({
  components: {
    AddressTwoLabel,
    AddressTwo,
  },
})
export default class OfficeAddress extends Vue {}
</script>
