<template>
  <div>
    <v-container>
      <v-row>
        <!--v-col cols="5"><TextBox /-->
        <v-col>
          <v-textarea label="メモ" rows="1" v-model="textMemo"></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class MemoBox extends Vue {
  @PropSync('value', { type: String })
  textMemo!: any;
}
</script>
