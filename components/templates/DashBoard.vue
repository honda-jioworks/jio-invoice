<template>
  <v-sheet class="groundwork">
    <!-- ヘッダー -->
    <!-- コンテンツエリア -->
    <v-container fluid>
      <v-row>
        <v-col cols="12"><MostRecentSalesAmount /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><CustomerRegisterForm /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12">Organismsの一つを置く（直近の取引欄の想定）</v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><contact /></v-col>
      </v-row>
    </v-container>
    <!-- フッター -->
    <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import MostRecentSalesAmount from '@/components/organisms/MostRecentSalesAmount.vue';
import contact from '~/components/molecules/Contact.vue';
import CustomerRegisterForm from '@/components/organisms/CustomerRegisterform.vue';

@Component({ components: { MostRecentSalesAmount, contact, CustomerRegisterForm } })
export default class DashBoard extends Vue {
  @Prop({ type: String, default: '' })
  yamazaki?: string;
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
