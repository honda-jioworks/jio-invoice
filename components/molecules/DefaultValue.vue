<template>
  <div>
    <v-container>
      <v-row>
        <v-checkbox v-model="checkbox" @click="scanDefault" label="初期値として使用する"></v-checkbox>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class DefaultValue extends Vue {
  private checkbox: boolean = false;

  @Emit()
  scanDefault(_: boolean): boolean {
    return this.checkbox;
  }
}
</script>
