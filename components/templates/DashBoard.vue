<template>
  <v-sheet class="groundwork">
    <v-row>
      <v-col cols="12"><MostRecentSalesAmount /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import MostRecentSalesAmount from '@/components/organisms/MostRecentSalesAmount.vue';
@Component({ components: { MostRecentSalesAmount } })
export default class DashBoard extends Vue {}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
