<template>
  <v-sheet class="groundwork">
    <v-container fluid>
      <v-row>
        <v-col cols="12"><MostRecentSalesAmount /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12">Organismsの一つを置く（直近の取引欄の想定）</v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><CustomerList /></v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CustomerList from '../organisms/CustomerList.vue';
import MostRecentSalesAmount from '@/components/organisms/MostRecentSalesAmount.vue';
@Component({ components: { MostRecentSalesAmount, CustomerList } })
export default class DashBoard extends Vue {}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
</style>
