<template>
  <div class="text-right">
    <v-row>
      <v-col cols="6" class="wrap04">単価,数量の小数部0を印刷:</v-col>
      <v-col cols="6" class="wrap12"><DoOrNot @scan-select="scanSelect" /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
import DoOrNot from '@/components/atoms/select/DoOrNot.vue';
@Component({ components: { DoOrNot } })
export default class DecimalalPart extends Vue {
  @Emit()
  scanSelect(val: string): string {
    return val;
  }
}
</script>
<style lang="scss">
.wrap04 {
  margin-top: 15px;
}
.wrap12 {
  padding-left: 30px;
  margin-top: 10px;
}
</style>
