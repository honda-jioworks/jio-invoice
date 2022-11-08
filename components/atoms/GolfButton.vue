<template>
  <v-btn color="warning" dark> Normal Button </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class GolfButton extends Vue {
  @Prop({ type: Number, default: 0 })
  emptyFrame!: number;
}
</script>
<style lang="scss">
.reserve {
  color: #f60;
}
</style>
