<template>
  <v-container class="px-0" fluid>
    <v-checkbox label="入力候補に表示しない" v-model="check" @click="scanCheck"></v-checkbox>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class NotShowBox extends Vue {
  private check: boolean = false;
  @Emit()
  scanCheck(_: boolean): boolean {
    return this.check;
  }
}
</script>
