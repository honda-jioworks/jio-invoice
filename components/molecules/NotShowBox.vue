<template>
  <v-container class="px-0" fluid>
    <v-checkbox label="入力候補に表示しない" @blur="input" @change="input" v-model="check"></v-checkbox>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
@Component({})
export default class NotShowBox extends Vue {
  @PropSync('value', { type: Boolean })
  check!: any;
  input() {
    this.$store.commit('customer/set', { check: this.check });
  }
}
</script>
