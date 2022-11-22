<template>
  <v-sheet class="groundwork">
    <v-container>
      <v-row>
        <v-col cols="12"><AccountInformation /></v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import MostRecentSalesAmount from '@/components/organisms/MostRecentSalesAmount.vue';

import AccountInformation from '@/components/organisms/AccountInformation.vue';
@Component({ components: { MostRecentSalesAmount, AccountInformation } })
export default class DashBoard extends Vue {
  // templatesはページの大まかな配置（ワイヤーフレーム）を管轄
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
