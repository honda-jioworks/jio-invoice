<template>
  <v-row>
    <v-col>
       <v-sheet
           color="white"
           height="11"
           width="25"
           >
      <v-dialog
      v-model="dialog"
      max-width="290px"
      >
      <template v-slot:activator="{on,attrs}">
        <v-btn text 
        v-bind="attrs"
        v-on="on"
        >ソート</v-btn>
      </template>
      <v-card>
        <v-card-title>
           <span class="text-h5">ソート</span>
        </v-card-title>
        <v-card-text>
           <v-container>
            <v-row>
              <v-col
              cols="12"
              sm="6"
              >
              <v-select
              :items="['昇順','降順']"
              label="並び順:"
              required
              ></v-select>
              </v-col>
              <v-col
              cols="12"
              sm="6"
              >
                 <v-select
                  :items="['日付', '請求書No.', '得意先', '件名', '請求書伝番']"
                  label="ソートキー："
                  required
                ></v-select>
          <v-btn
           v-bind="attrs"
            v-on="on"
            >初期値に戻す
        </v-btn>
              </v-col>
            </v-row>
           </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
          
          text
          @click="dialog = false"
          >
          OK
          </v-btn>
            <v-btn

            text
            @click="dialog = false"
          >
            キャンセル
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
       </v-sheet>
      </v-col>
      </v-row>
</template>

<script lang="ts">
import{Vue,Component} from 'nuxt-property-decorator';
@Component({})
export default class Sortbtn extends Vue {

  dialog:boolean = false;

  }
</script>