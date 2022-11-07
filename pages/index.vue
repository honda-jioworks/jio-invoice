<template>
  <div id="parent-area">
    <v-sheet>
      <v-row>
        <extra @scan-test="scantest" />
      </v-row>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import extra from '@/components/molecules/extra.vue';
@Component({ components: { extra } })
export default class indexPage extends Vue {
  private textval: string = '';
  scantest(val: string): void {
    this.textval = val;
  }
}
</script>
