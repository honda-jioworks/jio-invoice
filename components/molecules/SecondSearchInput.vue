<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field label="検索キー2" v-model="textSecond" @input="scanSecond"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class SecondSearchInput extends Vue {
  public textSecond: string = '';
  @Emit()
  scanSecond(): string {
    return this.textSecond;
  }
}
</script>
