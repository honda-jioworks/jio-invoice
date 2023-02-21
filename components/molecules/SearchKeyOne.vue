<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field label="検索キー1" @blur="input" :rules="textRules" v-model="textSearchone"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
import TextBox from '@/components/atoms/TextBox.vue';
@Component({ components: { TextBox } })
export default class SearchKeyOne extends Vue {
  @PropSync('value', { type: String })
  textSearchone!: any;
  public textRules: Array<Object> = [(v: any) => !!v || '項目を入力してください'];
  input() {
    this.$store.commit('customer/set', { keyone: this.textSearchone });
  }
}
</script>
