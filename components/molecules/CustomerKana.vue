<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="5">
        <v-text-field :rules="nameRules" label="得意先名(カナ)："> </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class CustomerKana extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '得意先名(カナ)を入力してください。'];
}
</script>
