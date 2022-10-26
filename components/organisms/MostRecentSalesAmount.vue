<template>
  <v-sheet class="groundwork">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
      hide-default-footer
    ></v-data-table>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class MostRecentSalesAmount extends Vue {
  // Organismsはセクションコンテンツ（それ単体で一区切りとなるコンテンツ）
  private headers: Array<Object> = [
    {
      text: '直近の売上金額',
      align: 'start',
      sortable: false,
      value: 'name',
    },
    { text: '見積書', value: 'calories' },
    { text: '請求書', value: 'fat' },
    { text: '合計請求書', value: 'carbs' },
    { text: '領収書', value: 'protein' },
    { text: '注文書', value: 'iron' },
  ];

  private desserts: Array<Object> = [
    {
      name: '9月　　　　　　16,395,500円',
      calories: '1枚',
      fat: '16枚',
      carbs: '0枚',
      protein: '0枚',
      iron: '0枚',
    },
    {
      name: '8月　　　　　　16,152,619円',
      calories: '1枚',
      fat: '16枚',
      carbs: '0枚',
      protein: '0枚',
      iron: '1枚',
    },
    {
      name: '7月　　　　　　15,814,859円',
      calories: '1枚',
      fat: '17枚',
      carbs: '0枚',
      protein: '0枚',
      iron: '0枚',
    },
  ];
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
