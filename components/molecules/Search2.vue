<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="2">
        <v-text-field :rules="nameRules" label="検索キー2："></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Search2 extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '文字を入力してください。'];
}
</script>
