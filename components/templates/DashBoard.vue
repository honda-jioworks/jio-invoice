<template>
  <div>
  <v-sheet class="groundwork">
    <!-- ヘッダー -->
    <!-- コンテンツエリア -->
    <v-container fluid>
      <v-row>
        <v-col cols="12"><MostRecentSalesAmount /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12">Organismsの一つを置く（直近の取引欄の想定）</v-col>
      </v-row>
    </v-container>
    <!-- フッター -->
    <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
  </v-sheet>
      <v-row>
        <v-col cols="12"><DetailsInfomation /></v-col>
      </v-row>
  </div>
</template>



<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import MostRecentSalesAmount from '@/components/organisms/MostRecentSalesAmount.vue';
import DetailsInfomation from '@/components/organisms/DetailsInfomation.vue';
@Component({ components: { MostRecentSalesAmount,DetailsInfomation } })

export default class DashBoard extends Vue {
  // templatesはページの大まかな配置（ワイヤーフレーム）を管轄
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
</style>
