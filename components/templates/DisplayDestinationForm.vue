    <template>
      <div>
          <DestinationForm />
          <PicInformationForm />
      </div>
    </template>
  
  <script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import DestinationForm from '@/components/organisms/DestinationForm.vue';
  import PicInformationForm from '@/components/organisms/PicInformationForm.vue';

  @Component({ components: { DestinationForm,PicInformationForm } })
  export default class DisplayDestinationForm extends Vue {
  }
  </script>
  

  