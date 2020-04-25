<template>
  <main>
    <section>
      <h1>Super simple, pure JS & CSS Dropdown with some vue for a framework</h1>
      <p>To run story book: <code>yarn storybook</code></p>
      <Dropdown v-bind:items="items" v-on:selected="dropdownItemSelected" />
    </section>
  </main>
</template>

<script>
import Dropdown from './components/Dropdown';

export default {
  name: 'App',
  components: {
    Dropdown,
  },
  data() {
    return {
      items: [
        {
          id: 'item-1',
          title: 'Item 1',
          to: '/item-1',
        },
        {
          id: 'item-2',
          title: 'Item 2',
          to: '/item-1',
        },
        {
          id: 'item-3',
          title: 'Item 4',
          to: '/item-1',
        },
      ],
    };
  },
  methods: {
    dropdownItemSelected(item) {
      console.log('selected item', item);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
