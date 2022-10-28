<template>
  <v-btn @click="accessOfficeURL"> 開く </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class URLBtn extends Vue {
  @Prop({ type: String, required: true })
  urlValue!: string;

  private props = ['officeURL'];
  accessOfficeURL() {
    window.open(this.urlValue, '_brank');
  }
}
</script>
