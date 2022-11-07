<template>
  <v-btn @click="accessOfficeURL"> 開く </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class URLBtn extends Vue {
  @Prop({ type: String, required: true })
  urlValue!: string;

  @Emit()
  accessOfficeURL() {
    window.open(this.urlValue, Date());
  }
}
</script>
