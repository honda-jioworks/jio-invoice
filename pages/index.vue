<template>
  <div><DashBoard /></div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import DashBoard from '~/components/templates/DashBoard.vue';

@Component({
  components: { DashBoard },
})
export default class IndexPage extends Vue {
}
</script>

