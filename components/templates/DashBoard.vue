<template>
  <v-sheet class="groundwork">
    <!-- ヘッダー -->
    <!-- コンテンツエリア -->
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <MostRecentSalesAmount />
        </v-col>
        <v-row>
        <v-col cols="12">
          <information />
        </v-col>
      </v-row>
      </v-row>
      <v-row>
        <v-col cols="12">
          <basic />
        </v-col>
      </v-row>
    </v-container>
    <!-- フッター -->
    <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import MostRecentSalesAmount from '@/components/organisms/MostRecentSalesAmount.vue'
import basic from '@/components/organisms/basic.vue'
@Component({ components: { MostRecentSalesAmount, basic } })
export default class DashBoard extends Vue {
  // templatesはページの大まかな配置（ワイヤーフレーム）を管轄
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
