<template>
  <div>
    <v-text-field :test="value"></v-text-field>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import DashBoard from '@/components/templates/DashBoard.vue';
@Component({ components: { DashBoard } })
export default class MostRecentSalesAmount extends Vue {
  // Organismsはセクションコンテンツ（それ単体で一区切りとなるコンテンツ）
  @Prop({ type: String, default: 'aaa' })
  value!: string;
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
