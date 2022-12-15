<template>
  <div>
    <v-sheet>
      <v-row class="hidden-sm-and-up">
        <v-col cols="2"><OfficeURLLabel /></v-col>
        <v-col cols="6"><URLBox @scan-url="scanUrl" /></v-col>
        <v-col cols="4"><URLBtn v-bind:urlValue="textVal" /></v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Ref } from 'nuxt-property-decorator';
import OfficeURLLabel from '~/components/atoms/label/OfficeURLLabel.vue';
import URLBox from '~/components/atoms/input/URLBox.vue';
import URLBtn from '@/components/atoms/button/URLBtn.vue';
@Component({ components: { OfficeURLLabel, URLBox, URLBtn } })
export default class OfficeURL extends Vue {
  private textVal: string = '';

  scanUrl(val: string): void {
    this.textVal = val;
  }
}
</script>
