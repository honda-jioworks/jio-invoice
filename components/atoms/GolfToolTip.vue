<template>
  <v-tooltip bottom>
      <template #activator="{ on, attrs }">
        <span
          class="empty-frame"
          :value="attrs"
          @input="on"
        >空き枠：{{ emptyFrame }}</span>
      </template>
      <span>Tooltip</span>
    </v-tooltip>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class GolfToolTip extends Vue {
  @Prop({ type: Number, default: 0})
  emptyFrame!: number;
}
</script>
<style lang="scss">
.empty-frame {
  color: #bf0000;
}
</style>
