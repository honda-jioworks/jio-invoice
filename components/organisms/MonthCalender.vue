<template>
  <v-row justify="space-around">
    <v-date-picker
      v-model="date"
      full-width
      type="month"
      class="mt-4"
      locale="ja"
    ></v-date-picker>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class MonthCalender extends Vue {
  private date: string = new Date().toISOString().substr(0, 7)
}
</script>
