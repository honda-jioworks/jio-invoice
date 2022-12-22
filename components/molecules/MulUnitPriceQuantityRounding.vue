<template>
  <div class="text-right">
    <v-row dense>
      <v-col cols="6" class="wrap04">単価×数量の端数処理:</v-col>
      <v-col cols="6" class="wrap07"><Rounding @scan-select="scanSelect" /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
import Rounding from '@/components/atoms/select/Rounding.vue';
@Component({ components: { Rounding } })
export default class MulUnitPriceQuantityRounding extends Vue {
  @Emit()
  scanSelect(val: string): string {
    return val;
  }
}
</script>
<style lang="scss" scoped>
.wrap04 {
  margin-top: 15px;
}
.wrap07 {
  padding-left: 30px;
}
</style>
