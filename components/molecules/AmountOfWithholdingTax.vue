<template>
  <div>
    <v-row>
      <v-col cols="6">売上で厳選所得税額を入力:</v-col>
      <v-col cols="6"><DoOrNot @check-bool="checkBool" /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
import DoOrNot from '@/components/atoms/select/DoOrNot.vue';
@Component({ components: { DoOrNot } })
export default class AmountOfWithholdingTax extends Vue {
  private bool: boolean = false;

  @Emit()
  checkBool(val: boolean): boolean {
    return (this.bool = val);
  }
}
</script>
