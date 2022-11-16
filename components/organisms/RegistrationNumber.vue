<template>
  <v-sheet class="abc">
    <RegistrationCheck @push-checkbox="pushCheckbox" />
    <RegNumber :checkValue="disabled" />
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import RegistrationCheck from '~/components/molecules/RegistrationCheck.vue';
import RegNumber from '~/components/molecules/RegNumber.vue';
@Component({ components: { RegistrationCheck, RegNumber } })
export default class RegistrationNumber extends Vue {
  private disabled: boolean = false;

  pushCheckbox(bool: boolean): void {
    this.disabled = bool;
  }
}
</script>
