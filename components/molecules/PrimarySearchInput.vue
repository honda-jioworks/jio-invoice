<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field :rules="nameRules" label="検索キー1"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class PrimarySearchInput extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '検索キーを入力してください。'];
}
</script>
