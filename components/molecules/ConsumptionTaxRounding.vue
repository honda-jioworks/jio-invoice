<template>
  <div>
    <v-row>
      <v-col cols="6">消費税の端数処理：</v-col>
      <v-col cols="6"><Rounding @scan-select="scanSelect" /></v-col>
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
