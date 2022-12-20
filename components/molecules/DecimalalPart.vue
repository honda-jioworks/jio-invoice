<template>
  <div>
    <v-row dense>
      <v-col cols="6" class="wrap09">単価、数量の小数部0を印刷:</v-col>
      <v-col cols="6"><DoOrNot @scan-select="scanSelect" /></v-col>
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
    console.log(val);
    return val;
  }
}
</script>
<style lang="scss">
.wrap09 {
  margin-top: 23px;
}
</style>
