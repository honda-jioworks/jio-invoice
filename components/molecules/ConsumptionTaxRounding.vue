<template>
  <div>
    <v-row dense>
      <v-col col="6" class="wrap06"> 消費税の端数処理： </v-col>
      <v-col col="6">
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
.wrap06 {
  margin-top: 28px;
}
</style>
