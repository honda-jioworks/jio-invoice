<template>
  <v-row class="dq">
    <!--一段目-->
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>顧客先情報</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col> <DestinationForm /> </v-col>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!--二段目-->
      <v-expansion-panel>
        <v-expansion-panel-header>自社情報</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col><PicInformationForm /></v-col>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!--三段目-->
      <v-expansion-panel>
        <v-expansion-panel-header>編集画面</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col><InvoiceIssueTable /></v-col>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!--4-->
      <v-expansion-panel>
        <v-expansion-panel-header>テンプレート</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col><PdfPreview /></v-col>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-btn @click="onSave()">更新</v-btn>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import DestinationForm from '@/components/organisms/DestinationForm.vue';
import PicInformationForm from '@/components/organisms/PicInformationForm.vue';
import InvoiceIssueTable from '@/components/organisms/InvoiceIssueTable.vue';
import PdfPreview from '@/components/organisms/PdfPreview.vue';

@Component({ components: { DestinationForm, PicInformationForm, InvoiceIssueTable, PdfPreview } })
export default class DisplayDestinationForm extends Vue {
  onSave() {
    console.log(JSON.stringify(this.$store.state.invoiceIssue));
  }
}
</script>
<style lang="scss" scoped>
.dq {
  padding: 10px;
}
.v-expansion-panel-header {
  font-size: 120%;
}
</style>
