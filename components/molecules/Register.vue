<template>
  <v-row>
    <v-col>
      <v-sheet color="white" height="35" width="25">
        <v-btn text @click="open">新規</v-btn>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class Register extends Vue {
  open(): void {
    const result = window.confirm('一覧ページへ移動します。よろしいですか?')
    if (result) {
      location.href = '/'
    }
  }
}
</script>
