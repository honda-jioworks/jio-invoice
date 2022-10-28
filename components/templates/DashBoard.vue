<template>
  <v-sheet class="groundwork">
    <v-container fluid>
      <v-row>
        <v-col cols="12"><MostRecentSalesAmount /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12">Organismsの一つを置く（直近の取引欄の想定）</v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><v-text-field :value="shinozaki" /></v-col>
      </v-row>
    </v-container>
    <!-- :value=　で"shinozaki"というプロパティを指定してあげる-->
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import MostRecentSalesAmount from '@/components/organisms/MostRecentSalesAmount.vue';
@Component({ components: { MostRecentSalesAmount } })
export default class DashBoard extends Vue {
  @Prop({ type: String, default: 'しのざき' })
  shinozaki!: string; //DashBoardのプロパティ
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
</style>
