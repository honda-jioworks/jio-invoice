<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            label="検索キー1"
            :rules="textRules"
            v-model="textSearchone"
            @input="scanSearchone"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
import TextBox from '@/components/atoms/TextBox.vue';
@Component({ components: { TextBox } })
export default class SearchKeyOne extends Vue {
  public textSearchone: string = '';
  public textRules: Array<Object> = [(v: any) => !!v || '項目を入力してください'];

  @Emit()
  scanSearchone() {
    return this.textSearchone;
  }
}
</script>
