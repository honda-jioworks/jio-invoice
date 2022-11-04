<template>
  <v-sheet class="abc">
    <!-- ヘッダー -->
    <!-- コンテンツエリア -->
    <v-container fluid>
      <v-row>
        <v-col cols="4"><OfficeName /></v-col>
        <v-col cols="4"><CEOName /></v-col>
        <v-col cols="4"></v-col>
      </v-row>
      <v-row>
        <v-col cols="8"><PostalCode /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><OfficeAddress /></v-col>
      </v-row>
      <v-row>
        <v-col cols="6"><OfficeAddress2 /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><TelNumber /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><FAXNumber /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><OfficeURL /></v-col>
      </v-row>
      <v-row>
        <v-col cols="auto"><FileLocation /></v-col>
        <v-col cols="auto"><FileName /></v-col>
      </v-row>
    </v-container>
    <!-- フッター -->
    <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import OfficeName from '@/components/molecules/OfficeName.vue';
import CEOName from '@/components/molecules/CEOName.vue';
import PostalCode from '@/components/molecules/PostalCode.vue';
import OfficeAddress from '@/components/molecules/OfficeAddress.vue';
import OfficeAddress2 from '@/components/molecules/OfficeAddress2.vue';
import TelNumber from '@/components/molecules/TelNumber.vue';
import FAXNumber from '~/components/molecules/NumberOfFax.vue';
import OfficeURL from '@/components/molecules/OfficeURL.vue';
import FileLocation from '@/components/molecules/FileLocation.vue';
import FileName from '@/components/molecules/FileName.vue';
@Component({
  components: {
    OfficeName,
    CEOName,
    PostalCode,
    OfficeAddress,
    OfficeAddress2,
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
