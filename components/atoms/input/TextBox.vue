<template>
  <v-col>
    <v-text-field outlined :rules="rules"></v-text-field>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class TextBox extends Vue {
  private rules: Array<object> = [
    (v: String) => !!v || '項目を入力してください',
    //(v: String) => v.length <= 25 || 'Max 25 characters',
  ];
}
</script>
