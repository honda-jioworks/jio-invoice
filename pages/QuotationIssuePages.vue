<template>
  <v-app>
    <v-sheet class="groundwork">
      <v-container fluid>
        <QuotationInfomation />
      </v-container>
    </v-sheet>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import QuotationInfomation from '@/components/templates/QuotationInfomation.vue';

@Component({ components: { QuotationInfomation } })
export default class QuotationIssuePages extends Vue {}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
.v-card {
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>
