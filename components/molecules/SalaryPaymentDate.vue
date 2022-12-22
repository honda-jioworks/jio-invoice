<template>
  <div class="text-right">
    <v-row>
      <v-col cols="5" class="wrap16">給与支給日:</v-col>
      <v-col cols="4" class="wrap17"><Date @scan-select="scanSelect" /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
import Date from '@/components/atoms/select/Date.vue';
@Component({ components: { Date } })
export default class SalaryPaymentDate extends Vue {
  @Emit()
  scanSelect(val: string): string {
    return val;
  }
}
</script>

<style lang="scss" scoped>
.wrap16 {
  margin-top: 15px;
}
.wrap17 {
  padding-left: -10px;
}
</style>
