<template>
  <v-sheet class="groundwork">
    <!-- ヘッダー -->
    <!-- コンテンツエリア -->
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <Contact />
          <Address />
          <Charge />
          <Department />
          <Post />
          <Phone />
          <Email />
          <Faxnumber />
          <Telnumber />
        </v-col>

      </v-row>
    </v-container>
    <!-- フッター -->
    <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
  </v-sheet>


</template>
  
  
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Address from '@/components/molecules/Address.vue'
import Contact from '~/components/molecules/Contact.vue'
import Charge from '@/components/molecules/Charge.vue'
import Department from '@/components/molecules/Department.vue'
import Post from '@/components/molecules/Post.vue'
import Phone from '@/components/molecules/Phone.vue'
import Email from '~/components/molecules/Email.vue'
import Faxnumber from '~/components/molecules/Faxnumber.vue'
import Telnumber from '~/components/molecules/Telnumber.vue'


@Component({
  components: {
    Contact,
    Address,
    Charge,
    Department,
    Post,
    Phone,
    Email,
    Faxnumber,
    Telnumber
  }
})
export default class DashBoard extends Vue {
  // templatesはページの大まかな配置（ワイヤーフレーム）を管轄
}
</script>