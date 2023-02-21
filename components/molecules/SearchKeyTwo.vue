<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field label="検索キー2" @blur="input" v-model="textSearchtwo"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
@Component({})
export default class SearchKeyTwo extends Vue {
  @PropSync('value', { type: String })
  textSearchtwo!: any;
  input() {
    this.$store.commit('customer/set', { keytwo: this.textSearchtwo });
  }
}
</script>
