<template>
  <v-btn @click="showMaptest"> 地図を表示 </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class ShowMap extends Vue {
  showMaptest() {
    window.open(
      'https://www.google.com/maps/search/〒' +
        this.$store.state.company.postalCode +
        this.$store.state.company.addressOne +
        this.$store.state.company.addressTwo +
        '/',
      'subwin',
      'width=750,height=750'
    );
  }
}
</script>
