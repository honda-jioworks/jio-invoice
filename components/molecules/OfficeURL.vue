<template>
  <div>
    <v-sheet>
      <v-row>
        <v-col cols="2" class="wrap39">
          <OfficeURLLabel />
        </v-col>
        <v-col cols="6" class="wrap35">
          <URLBox :label="label" :rule="rule" :value.sync="officeUrl" />
        </v-col>
        <v-col>
          <URLBtn :officeUrl="officeUrl" />
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator';
import OfficeURLLabel from '~/components/atoms/label/OfficeURLLabel.vue';
import URLBox from '~/components/atoms/input/URLBox.vue';
import URLBtn from '@/components/atoms/button/URLBtn.vue';
@Component({ components: { OfficeURLLabel, URLBox, URLBtn } })
export default class OfficeURL extends Vue {
  @PropSync('officeUrl_val', { type: String })
  officeUrl!: string;

  label: string = 'URL';

  rule: Array<object> = [
    (v: string) => !!v || '項目を入力してください',
    (v: string) => /^(ftp|http|https):\/\/[^ "]+$/.test(v) || 'URLを入力してください',
  ];
}
</script>
<style lang="scss">
.wrap39 {
  margin-left: 60px;
  margin-right: -35px;
}
.wrap35 {
  margin-left: 40px;
}
</style>
