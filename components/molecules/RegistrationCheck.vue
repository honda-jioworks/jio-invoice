<template>
  <v-row>
    <v-col cols="12">
      <v-checkbox :value="bool" @click="pushCheckbox" dense @change="input" :label="label" color="red"> </v-checkbox>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
@Component({})
export default class RegistrationCheck extends Vue {
  @PropSync('registrationCheck_val', { type: Boolean })
  value_in!: boolean;

  label: string = '適格請求書発行事業者の登録通知を受けた';

  bool: boolean = false;
  // クリックされた時にboolean値を反転させてorganismsに送る
  @Emit()
  pushCheckbox(_: boolean): boolean {
    return (this.bool = !this.bool);
  }

  input() {
    this.$store.commit('company/set', { RegistrationNumberBox_val: this.bool });
  }
}
</script>
