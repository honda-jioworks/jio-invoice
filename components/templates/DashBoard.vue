<template>
  <v-sheet class="groundwork">
    <!-- ヘッダー -->
    <!-- コンテンツエリア -->
    <v-container fluid>
      <v-row>
        <v-col cols="12"><BasicInformation /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><LogoSealinfo /></v-col>
      </v-row>
      <v-row>
        <!-- <v-col cols="12"><OfficeSealPanel /></v-col> -->
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import MostRecentSalesAmount from '@/components/organisms/MostRecentSalesAmount.vue';
import BasicInformation from '../organisms/BasicInformation.vue';
import LogoSealinfo from '@/components/organisms/LogoSealinfo.vue';
import CompanyLogoSeal from '../molecules/OfficeLogo.vue';
import OfficeSealPanel from '../molecules/OfficeSealPanel.vue';
@Component({ components: { MostRecentSalesAmount, LogoSealinfo, BasicInformation, CompanyLogoSeal, OfficeSealPanel } })
export default class DashBoard extends Vue {}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
</style>
