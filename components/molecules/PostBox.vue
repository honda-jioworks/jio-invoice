<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field :rules="nameRules" @blur="input" v-model="postBox" label="役職"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
@Component({})
export default class PostBox extends Vue {
  @PropSync('value', { type: String })
  postBox!: any;
  nameRules: Array<object> = [(v: string) => !!v || '役職を入力してください'];
  input() {
    this.$store.commit('customer/set', { post: this.postBox });
  }
}
</script>
