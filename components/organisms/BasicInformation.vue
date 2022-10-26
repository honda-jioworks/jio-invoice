<template>
  <v-sheet class="abc">
    <!-- ヘッダー -->
    <!-- コンテンツエリア -->
    <v-container fluid>
      <v-row>
        <v-col cols="8"><OfficeName /></v-col>
      </v-row>
      <v-row>
        <v-col cols="8"><CEOName /></v-col>
      </v-row>
      <v-row>
        <v-col cols="8"><PostalCode /></v-col>
      </v-row>
      <v-row>
        <v-col cols="8"><OfficeAddress /></v-col>
      </v-row>
      <v-row>
        <v-col cols="8"><TelNumber /></v-col>
      </v-row>
      <v-row>
        <v-col cols="8"><FAXNumber /></v-col>
      </v-row>
      <v-row>
        <v-col cols="8"><OfficeURL /></v-col>
      </v-row>
      <v-row>
        <v-col cols="8"><FileLocation /></v-col>
      </v-row>
      <v-row>
        <v-col cols="8"><FileName /></v-col>
      </v-row>
    </v-container>
    <!-- フッター -->
    <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import OfficeName from '@/components/molecules/OfficeName.vue'
import CEOName from '@/components/molecules/CEOName.vue'
import PostalCode from '@/components/molecules/PostalCode.vue'
import OfficeAddress from '@/components/molecules/OfficeAddress.vue'
import TelNumber from '@/components/molecules/TelNumber.vue'
import FAXNumber from '~/components/molecules/NumberOfFax.vue'
import OfficeURL from '@/components/molecules/OfficeURL.vue'
import FileLocation from '@/components/molecules/FileLocation.vue'
import FileName from '@/components/molecules/FileName.vue'
@Component({
  components: {
    OfficeName,
    CEOName,
    PostalCode,
    OfficeAddress,
    TelNumber,
    FAXNumber,
    OfficeURL,
    FileLocation,
    FileName,
  },
})
export default class BasicInformation extends Vue {}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
</style>
