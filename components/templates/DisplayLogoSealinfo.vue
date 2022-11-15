<template>
    <v-sheet class="groundwork">
      <!-- ヘッダー -->
      <!-- コンテンツエリア -->
      <v-container fluid>
        <v-row>
          <v-col cols="12"><LogoSealinfo /></v-col>
        </v-row>
      </v-container>
      <!-- フッター -->
      <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
    </v-sheet>
  </template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LogoSealinfo from '@/components/organisms/LogoSealinfo.vue'
@Component({ components: { LogoSealinfo} })
export default class DisplayLogoSealinfo extends Vue {
  // templatesはページの大まかな配置（ワイヤーフレーム）を管轄
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
