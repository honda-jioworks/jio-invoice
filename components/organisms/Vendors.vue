<template>
  <v-sheet class="groundwork">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="20"
      class="elevation-1"
      hide-default-footer
    ></v-data-table>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class Vendors extends Vue {
  // Organismsはセクションコンテンツ（それ単体で一区切りとなるコンテンツ）
  headers = [
    {
      text: '直近の取引',
      align: 'start',
      sortable: false,
      value: 'name',
    },
    { text: '日付', value: 'date', },
    { text: '得意先／仕入れ先', value: 'vendors' },
    { text: 'No.', value: 'number' },
    { text: '件名', value: 'contents' },
    { text: '発行', value: 'issue' },
    { text: '受注', value: 'order' },
  ]

  desserts = [
    {
      name: '　',
      date: '1枚',
      vendors: '16枚',
      number: '0枚',
      contents: '0枚',
      issue: '0枚',
      order: 'a',
    },
    {
      name: '　',
      date: '1枚',
      vendors: '16枚',
      number: '0枚',
      contents: '0枚',
      issue: '1枚',
      order: 'a',
    },
    {
      name: '　',
      date: '1枚',
      vendors: '17枚',
      number: '0枚',
      contents: '0枚',
      issue: '0枚',
      order: 'a',
    },
  ]
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
