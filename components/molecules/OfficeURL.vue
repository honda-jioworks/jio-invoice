<template>
  <div>
    <v-sheet>
      <v-row>
        <v-col cols="2"><OfficeURLLabel /></v-col>
        <v-col cols="3"><URLBox @change-text="changeText" /></v-col>
        <v-col cols="2"><URLBtn v-bind:urlValue="textVal" /></v-col>
        <!-- v-btn @click="getOfficeURL()"> aab </v-btn -->
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
  private textVal: string = '';
  @Prop({ type: String, default: '山﨑' })
  yamazaki!: string;

  sendLink() {
    return this.yamazaki;
  }

  changeText(val: string): void {
    this.textVal = val;
  }
}
</script>
