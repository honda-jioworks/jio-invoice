<template>
  <div id="emit-area">
    <v-text-field :value="test" @input="scanTest"></v-text-field>
  </div>
</template>

<script lang="ts">
import { Emit, Component, Vue } from 'vue-property-decorator';
import MostRecentSalesAmount from '@/components/organisms/MostRecentSalesAmount.vue';
@Component({ components: { MostRecentSalesAmount } })
export default class extra extends Vue {
  private test: string = 'bbb';
  @Emit()
  scanTest(_: string): string {
    return this.test;
  }
}
</script>
