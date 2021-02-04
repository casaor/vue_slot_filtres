import ModalBootstrap from './../components/ModalBootstrap.vue'

export default {
  name: 'App',
  components: {
    ModalBootstrap
  },
  data: function () 
    {      
        return { 
            showModal: true
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
  }
}