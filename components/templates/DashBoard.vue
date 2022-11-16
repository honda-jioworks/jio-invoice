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
        <v-col cols="12"><Materiaru /></v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import CompanyInformation from '~/components/organisms/CompanyInformation.vue';
import DetailsInfomation from '@/components/organisms/DetailsInfomation.vue';
import Materiaru from '@/components/organisms/Materiaru.vue';
@Component({ components: { CompanyInformation, DetailsInfomation, Materiaru } })
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
