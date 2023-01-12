<template #click>
  <v-icon v-model="fix_btn" @click="sendFix">mdi-lead-pencil</v-icon>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class FixIcon extends Vue {
  public fix_btn: string = ''
  @Emit()
  sendFix() {
    location.href = '/'
    return this.fix_btn
  }
}
</script>
