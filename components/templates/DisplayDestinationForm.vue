    <template>
          <DestinationForm />
    </template>
  
  <script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import DestinationForm from '@/components/organisms/DestinationForm.vue';
  @Component({ components: { DestinationForm } })
  export default class DisplayDestinationForm extends Vue {
  }
  </script>
  

  