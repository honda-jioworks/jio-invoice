<template>
  <div>
    <v-sheet>
      <v-row>
        <OfficeURLLabel />
        <URLBox :officeUrl="officeUrl" @scan-url="scanUrl" />
        <URLBtn :officeUrl="officeUrl" :urlValue="urlValue" />
      </v-row>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
import OfficeURLLabel from '~/components/atoms/label/OfficeURLLabel.vue';
import URLBox from '~/components/atoms/input/URLBox.vue';
import URLBtn from '@/components/atoms/button/URLBtn.vue';
@Component({ components: { OfficeURLLabel, URLBox, URLBtn } })
export default class OfficeURL extends Vue {
  private urlValue: string = '';
  // データベースから受け取ったURL
  @Prop({ type: String })
  officeUrl!: string;
  // atomsから受け取ったURLをurlValueに代入
  scanUrl(val: string): void {
    this.urlValue = val;
  }
}
</script>
