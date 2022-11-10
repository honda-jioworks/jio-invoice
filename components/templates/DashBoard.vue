<template>
  <v-sheet class="groundwork">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <MostRecentSalesAmount />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <information />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <basic />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12"> </v-col>
      </v-row>
    </v-container>
    <!-- :value=　で"shinozaki"というプロパティを指定してあげる-->
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import MostRecentSalesAmount from '@/components/organisms/MostRecentSalesAmount.vue';
import basic from '@/components/organisms/basic.vue';
@Component({ components: { MostRecentSalesAmount, basic } })
export default class DashBoard extends Vue {}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
