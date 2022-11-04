<template>
  <v-sheet>
    <v-row>
      <AddressLabel />
      <AddressOne />
      <ShowMap />
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
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
export default class OfficeAddress extends Vue {}
</script>
