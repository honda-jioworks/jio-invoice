<template>
  <v-col class="d-flex">
    <v-select :items="items" dense outlined></v-select>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class Rounding extends Vue {
  public items = ['切り上げ', '切り捨て', '四捨五入'];
}
</script>
