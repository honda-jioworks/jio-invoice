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
        <v-col cols="12"><RegistrationNumber /></v-col>
      </v-row>
    </v-container>
    <!-- フッター -->
    <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import CompanyInformation from '~/components/organisms/CompanyInformation.vue';
import DetailsInfomation from '@/components/organisms/DetailsInfomation.vue';
import RegistrationNumber from '@/components/organisms/RegistrationNumber.vue';
@Component({ components: { CompanyInformation, DetailsInfomation, RegistrationNumber, LogoSealinfo } })
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
