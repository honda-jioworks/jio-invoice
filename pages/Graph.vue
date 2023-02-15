<template>
  <div><HeartRate /></div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import HeartRate from '~/components/organisms/HeartRate.vue';
@Component({
  components: { HeartRate },
})
export default class index extends Vue {}
</script>
