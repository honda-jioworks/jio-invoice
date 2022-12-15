<template>
  <v-sheet class="groundwork">
    <!-- ヘッダー -->
    <!-- コンテンツエリア -->
    <v-container fluid>
      <v-row>
        <v-col cols="12"><MostRecentSalesAmount /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><BasicInformation /></v-col>
      </v-row>
      <v-row>
        <v-col col="12"><DetailsInfomation /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"> </v-col>
      </v-row>
    </v-container>
    <!-- フッター -->
    <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import MostRecentSalesAmount from '@/components/organisms/MostRecentSalesAmount.vue';

import CompanyInfomation from '@/components/organisms/CompanyInfomation.vue';
import BasicInformation from '@/components/organisms/BasicInformation.vue';
import OfficeURL from '@/components/molecules/OfficeURL.vue';
import DetailsInfomation from '@/components/organisms/DetailsInfomation.vue';
@Component({ components: { MostRecentSalesAmount, CompanyInfomation, BasicInformation, OfficeURL, DetailsInfomation } })
export default class DashBoard extends Vue {
  @Prop({ type: String, default: '' })
  text!: string;
}
// templatesはページの大まかな配置（ワイヤーフレーム）を管轄
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
.DatilInfomation {
  background-color: gray;
}
</style>
