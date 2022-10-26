<template>
  <v-btn @click="accessOfficeURL()"> 開く </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({ components: {} })
export default class URLBtn extends Vue {
  private props = ['officeURL'];
  accessOfficeURL() {
    window.open('officeURL')
  }
}
</script>

