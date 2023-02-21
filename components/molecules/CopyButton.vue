<template #click>
  <v-btn v-model="copy_btn" @click="sendCopy">複写</v-btn>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class FixButton extends Vue {
  public copy_btn: string = ''
  @Emit()
  sendCopy() {
    location.href = '/'
    return this.copy_btn
  }
}
</script>
