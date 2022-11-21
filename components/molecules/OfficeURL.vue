<template>
  <div>
    <v-sheet>
      <v-row>
        <OfficeURLLabel />
        <URLBox @scan-url="scanUrl" @scan-test="scanTest" />
        <URLBtn :urlValue="textVal" />
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

  scanTest(value: string): void {
    this.textVal = value;
  }
}
</script>
