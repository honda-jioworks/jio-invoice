<template>
  <div>
    <v-sheet>
      <v-row>
        <v-col cols="2" class="wrap39">
          <OfficeURLLabel />
        </v-col>
        <v-col cols="6" class="wrap35">
          <URLBox :officeUrl="officeUrl" @scan-url="scanUrl" />
        </v-col>
        <v-col>
          <URLBtn :officeUrl="officeUrl" :urlValue="urlValue" />
        </v-col>
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
  public urlValue: string = '';
  // データベースから受け取ったURL
  @Prop({ type: String })
  officeUrl!: string;
  // atomsから受け取ったURLをurlValueに代入
  scanUrl(val: string): void {
    this.urlValue = val;
  }
}
</script>
<style lang="scss">
.wrap39 {
  margin-left: 60px;
  margin-right: -35px;
}
.wrap35 {
  margin-left: 30px;
}
</style>
