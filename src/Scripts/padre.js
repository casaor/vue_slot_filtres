import ModalBootstrap from './../components/ModalBootstrap.vue'
import backInDown from './../components/backInDown.vue'

export default {
  name: 'App',
  components: {
    ModalBootstrap,
    backInDown
  },
  data: function () 
    {      
        return { 
            showModal: false
    }; 
  },
  filters: {
        dolares (value)
        {
            return value + '$'
        },
        euros (value)
        { 
            return (value / 1.23).toFixed(2) + '€'
            
        }
  },
  // update (){
  //   this.showModal = false
  // }
}