<template>
  <v-row justify="start">
    <v-col sm="12" md="11" lg="9" xl="6">
      <v-sheet class="groundwork">
        <!-- ヘッダー -->
        <!-- コンテンツエリア -->
        <v-container fluid>
          <v-row>
            <v-col cols="12"><OfficeLogo /></v-col>
            <v-col cols="12"><OfficeSeal /></v-col>
          </v-row>
        </v-container>
        <!-- フッター -->
        <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import OfficeLogo from '~/components/molecules/OfficeLogo.vue';
import OfficeSeal from '~/components/molecules/OfficeSeal.vue';
@Component({ components: { OfficeLogo, OfficeSeal } })
export default class LogoSealinfo extends Vue {
  // templatesはページの大まかな配置（ワイヤーフレーム）を管轄
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
