<template>
  <v-sheet class="groundwork">
    <!-- ヘッダー -->
    <!-- コンテンツエリア -->
    <v-container fluid>
      <v-row>
        <v-col cols="12"><CompanyInformation /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><DetailsInfomation /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><LogoSealinfo /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><RegistrationNumber /></v-col>
      </v-row>
      <v-row>
        <v-col col="12"><DetailsInfomation /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"> </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import CompanyInformation from '~/components/organisms/CompanyInformation.vue';
import DetailsInfomation from '@/components/organisms/DetailsInfomation.vue';
import LogoSealinfo from '@/components/organisms/LogoSealinfo.vue';
import RegistrationNumber from '@/components/organisms/RegistrationNumber.vue';
@Component({ components: { CompanyInformation, DetailsInfomation, LogoSealinfo, RegistrationNumber } })
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
</style>
