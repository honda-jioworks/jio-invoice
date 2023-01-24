<template>
  <v-row>
    <v-col cols="12">
      <v-checkbox :value="bool" v-model="value_in" @click="pushCheckbox" dense :label="label" color="red"> </v-checkbox>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop, PropSync } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class RegistrationCheck extends Vue {
  @PropSync('registrationCheck_val', { type: String })
  value_in!: string;

  label: string = '適格請求書発行事業者の登録通知を受けた';

  private bool: boolean = false;
  // クリックされた時にboolean値を反転させてorganismsに送る
  @Emit()
  pushCheckbox(_: boolean): boolean {
    return (this.bool = !this.bool);
  }
}
</script>
