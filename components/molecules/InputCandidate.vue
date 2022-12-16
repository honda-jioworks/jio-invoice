<template>
  <div>
    <v-container>
      <v-row>
        <v-checkbox v-model="checkbox" label="入力候補に表示しない" @click="scanCandidate"></v-checkbox>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class InputCandidate extends Vue {


  public checkbox: boolean = false;

  @Emit()
  scanCandidate(_: boolean): boolean {
    return this.checkbox;
  }
}
</script>
