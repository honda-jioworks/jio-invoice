<template>
  <v-text-field :value="textVal" @blur="changeText" />
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Testtext extends Vue {
  private textVal = 'https://jioworks.com/';

  @Emit()
  changeText(val: string): string {
    return this.textVal;
  }
}
</script>
<style lang="scss">
.reserve {
  color: #f60;
}
</style>
