<template #click>
  <v-icon v-model="copy_btn" @click="sendCopy">mdi-content-copy</v-icon>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class CopyIcon extends Vue {
  public copy_btn: string = ''
  @Emit()
  sendCopy() {
    location.href = '/'
    return this.copy_btn
  }
}
</script>
