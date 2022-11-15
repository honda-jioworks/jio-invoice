<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="2">
        <v-text-field :rules="nameRules" label="検索キー1："></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class PrimarySearchInput extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '検索キーを入力してください。'];
}
</script>
