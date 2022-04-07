<script>

import { useCounterStore } from "../stores/counter";

export default {
  setup(){
      const counter = useCounterStore();
      return {counter};
  },
  name: 'HelloWorld',
  props: {
      msg: {
      type: String,
      required: true,
    },



    subline: {
      type: String,
      default: 'asdadasd'
    }



  },
  methods: {
    createSubline() {
      return `${this.msg} ${this.subline}`;
    }
  }, 

  computed: {
    betterMsg() {
      return '¯\_(ツ)_/¯' + this.msg;
    }
  }
};
  
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
    <h4>{{createSubline()}}</h4>
    <h5>{{betterMsg}}</h5>
    <input type="text" v-model="counter.myInput">
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
