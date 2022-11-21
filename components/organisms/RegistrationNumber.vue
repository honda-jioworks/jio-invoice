<template>
  <v-sheet class="abc">
    <RegistrationCheck @push-checkbox="pushCheckbox" />
    <RegistrationNumberBox :checkValue="disabled" />
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import RegistrationCheck from '~/components/molecules/RegistrationCheck.vue';
import RegistrationNumberBox from '~/components/molecules/RegistrationNumberBox.vue';
@Component({ components: { RegistrationCheck, RegistrationNumberBox } })
export default class RegistrationNumber extends Vue {
  private disabled: boolean = false;

  pushCheckbox(bool: boolean): void {
    this.disabled = bool;
  }
}
</script>
