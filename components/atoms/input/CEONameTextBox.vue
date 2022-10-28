<template>
<v-text-field value="横田 龍介" dense>
</v-text-field>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({ components: {}})
export default class CEONameTextBox extends Vue {

}
</script>
<style lang="scss" scoped>
.textbox {
  border: 2px solid black;
}
</style>