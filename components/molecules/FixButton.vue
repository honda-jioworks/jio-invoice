<template #click>
  <v-btn v-model="fix_btn" @click="sendFix">修正</v-btn>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class FixButton extends Vue {
  public fix_btn: string = ''
  @Emit()
  sendFix() {
    location.href = '/'
    return this.fix_btn
  }
}
</script>
