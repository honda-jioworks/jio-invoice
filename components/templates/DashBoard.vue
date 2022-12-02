<template>
  <div>
    <v-text-field v-model="value"></v-text-field>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component({})
export default class DashBoard extends Vue {
  // Organismsはセクションコンテンツ（それ単体で一区切りとなるコンテンツ）
  @Prop({ type: String })
  value!: string;
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
