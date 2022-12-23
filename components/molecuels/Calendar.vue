<template>
    <v-row>
<v-btn @click="Calendar" v-on:input="inputEvent">ジャンプ</v-btn>
    </v-row>
</template>

<script lang="ts">
  import { Vue, Component} from 'nuxt-property-decorator';
  @Component({ })
  export default class CalendarForm extends Vue {

  }
</script>