<template>
  <v-sheet class="groundwork">
    <v-container fluid>
      <MostRecentSalesAmount />
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import MostRecentSalesAmount from '~/components/organisms/MostRecentSalesAmount.vue';
@Component({ components: { MostRecentSalesAmount } })
export default class DashBoard extends Vue {}

// templatesはページの大まかな配置（ワイヤーフレーム）を管轄
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
</style>
