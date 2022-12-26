<template>
  <v-row>
    <v-col>
      <v-sheet color="white" height="1500" width="1100">
        <v-card>
          <v-card-title>
            請求書一覧表
            <v-spacer> </v-spacer>
            <Sortbtn />
            <Register />
            <Fixbtn />
            <Deleat />
            <JumpCalendar />
            <SearchPage />
            <CustomerSelect />
          </v-card-title>
        </v-card>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Register from '~/components/molecules/Register.vue'
import Fixbtn from '~/components/molecules/Fixbtn.vue'
import Sortbtn from '~/components/molecules/Sortbtn.vue'
import CopyItmen from '~/components/molecules/CopyItmen.vue'
import JumpCalendar from '~/components/molecules/Calendar.vue'
import CustomerSelect from '~/components/molecules/CustomerSelect.vue'
import SerectTime from '~/components/molecules/SerectTime.vue'
import SearchPage from '~/components/molecules/SearchPage.vue'

@Component({
  components: {
    Register,
    Fixbtn,
    Sortbtn,
    CopyItmen,
    JumpCalendar,
    CustomerSelect,
    SerectTime,
    SearchPage,
  },
})
export default class Headerorg extends Vue {}
</script>
