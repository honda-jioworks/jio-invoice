<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            label="検索キー2"
            :rules="textRules"
            v-model="textSearchtwo"
            @input="scanSearchtwo"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class SearchKeyTwo extends Vue {
  private textSearchtwo: string = '';

  @Emit()
  scanSearchtwo(): string {
    return this.textSearchtwo;
  }
}
</script>
