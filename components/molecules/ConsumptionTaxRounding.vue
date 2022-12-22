<template>
  <div class="text-right">
    <v-row dense>
      <v-col col="6" class="wrap04"> 消費税の端数処理: </v-col>
      <v-col col="6" class="wrap05">
        <Rounding @scan-select="scanSelect" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
import Rounding from '@/components/atoms/select/Rounding.vue';
@Component({ components: { Rounding } })
export default class ConsumptionTaxRounding extends Vue {
  @Emit()
  scanSelect(val: string): string {
    return val;
  }
}
</script>
<style lang="scss" scoped>
.wrap04 {
  margin-top: 25px;
}
.wrap05 {
  padding-left: 30px;
  margin-top: 10px;
}
</style>
