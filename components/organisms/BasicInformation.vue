<template>
  <v-sheet class="abc">
    <!-- ヘッダー -->
    <!-- コンテンツエリア -->
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="12" xs="12" sm="8" md="8" lg="6" xl="7"><OfficeName /></v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" xs="12" sm="8" md="8" lg="6" xl="7"><CEOName /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" md="8" lg="6" xl="7">
          <PostalCode />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" sm="8" md="8" lg="12" xl="7"><OfficeAddress /></v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" xs="12" sm="8" md="8" lg="12" xl="7"><OfficeAddress2 /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" sm="9" md="8" lg="6"><ShowMap /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" sm="8" md="6" lg="8" xl="6"><TelNumber /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" sm="8" md="6" lg="8" xl="6"><FAXNumber /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12" lg="6"><OfficeURL /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" sm="8" md="12" lg="5"><FileLocation /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" sm="8" md="12" lg="6"><FileName /></v-col>
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
import ShowMap from '~/components/atoms/button/ShowMap.vue';
@Component({
  components: {
    OfficeName,
    CEOName,
    PostalCode,
    OfficeAddress,
    OfficeAddress2,
    ShowMap,
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
