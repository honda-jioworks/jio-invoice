<template>

  <v-form>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field :rules="nameRules" :value="postbox" label="役職" @input="getPostbox"></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class PostBox extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '役職を入力してください'];
  postbox: string = "";

  @Emit()
  getPostbox(postbox: string): string{
    return postbox;
  }
}
</script>
