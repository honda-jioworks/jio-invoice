<template>
  <v-row>
    <v-col cols="8">
      <v-sheet height="55" width="200">
        <v-spacer></v-spacer>
        <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="290px"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              :value="date"
              label="期間"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>

          <v-date-picker v-model="date" locale="ja" type="month" scrollable>
            <v-spacer></v-spacer>
            <v-btn text @click="modal = false"> Cancel </v-btn>
            <v-btn text @click="save(date)"> OK </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
@Component({})
export default class MonthCalender extends Vue {
  public date: string = new Date().toISOString().substring(0, 7)
  public menu: boolean = false
  public modal: boolean = false

  get refs(): any {
    return this.$refs
  }

  @Emit()
  save(date: string) {
    return this.refs.dialog.save(date)
  }
}
</script>
