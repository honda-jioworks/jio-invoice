<template>
  <v-row>
    <v-col>
      <v-sheet height="1500" width="1100">
        <v-card>
          <v-card-title>
            <v-spacer> </v-spacer>
            <Sortbtn />
            <JumpCalendar />
            <SearchPage />
          </v-card-title>
        </v-card>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import NewButton from '~/components/molecules/NewButton.vue'
import FixButton from '~/components/molecules/FixButton.vue'
import Sortbtn from '~/components/molecules/Sortbtn.vue'
import CopyItmen from '~/components/molecules/CopyButton.vue'
import JumpCalendar from '~/components/molecules/Calendar.vue'
import SerectTime from '~/components/molecules/SerectTime.vue'
import SearchPage from '~/components/molecules/SearchPage.vue'

@Component({
  components: {
    NewButton,
    FixButton,
    Sortbtn,
    CopyItmen,
    JumpCalendar,

    SerectTime,
    SearchPage,
  },
})
export default class Headerorg extends Vue {}
</script>
