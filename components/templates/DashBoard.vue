<template>
  <v-sheet class="groundwork">
    <!-- ヘッダー -->
    <!-- コンテンツエリア -->
    <v-container fluid>
      <v-row>
        <v-col cols="12"><MostRecentSalesAmount /></v-col>
      </v-row>

      <!-- <v-row>
        <v-col cols="12">{{ saito }}</v-col>
      </v-row> -->
    </v-container>
    <!-- フッター -->
    <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import MostRecentSalesAmount from '@/components/organisms/MostRecentSalesAmount.vue';
import LogoSealinfo from '@/components/organisms/LogoSealinfo.vue';
@Component({ components: { MostRecentSalesAmount, LogoSealinfo } })
export default class DashBoard extends Vue {
  //   @Prop({ type: String, default: 'ほんだ' })
  //   private saito?: String;
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
</style>
