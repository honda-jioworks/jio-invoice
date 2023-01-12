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
import FixIcon from '~/components/molecules/FixIcon.vue'
import Sortbtn from '~/components/molecules/Sortbtn.vue'
import CopyIcon from '~/components/molecules/CopyIcon.vue'
import JumpCalendar from '~/components/molecules/Calendar.vue'
import SerectTime from '~/components/molecules/SerectTime.vue'
import SearchPage from '~/components/molecules/SearchPage.vue'

@Component({
  components: {
    NewButton,
    FixIcon,
    Sortbtn,
    CopyIcon,
    JumpCalendar,
    SerectTime,
    SearchPage,
  },
})
export default class Headerorg extends Vue {}
</script>
