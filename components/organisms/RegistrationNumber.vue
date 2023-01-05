<template>
  <v-sheet class="abc">
    <v-container>
      <v-row>
        <v-col cols="12" xl="12">
          <RegistrationCheck @push-checkbox="pushCheckbox" />
        </v-col>
        <v-col cols="12" xl="12">
          <RegistrationNumberBox :checkValue="disabled" @scan-check="getCheck" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import RegistrationCheck from '~/components/molecules/RegistrationCheck.vue';
import RegistrationNumberBox from '~/components/molecules/RegistrationNumberBox.vue';
@Component({ components: { RegistrationCheck, RegistrationNumberBox } })
export default class RegistrationNumber extends Vue {
  private textVal: string = '';
  // boolean値の初期値を設定
  private disabled: boolean = false;
  // moleculesから受け取ったboolean値を設定
  pushCheckbox(bool: boolean): void {
    this.disabled = bool;
  }
  // moleculesから受け取った登録番号を設定
  getCheck(val: string): void {
    this.textVal = val;
  }
  value4() {
    alert(this.textVal + this.disabled);
  }
}
</script>
