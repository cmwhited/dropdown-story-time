<template>
  <div>
    <div class="dropdown">
      <button class="dropdown__trigger" @click="toggle">{{ title }}</button>
      <div class="dropdown__content" v-bind:class="{ show: active }">
        <span v-for="item in items" @click="selectItem(item)" :key="item.id" class="dropdown__item">
          {{ item.title }}
        </span>
      </div>
    </div>
    <div>Selected Item: {{ selectedItem }}</div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    items: Array,
  },
  data() {
    return {
      active: false,
      selected: null,
      title: 'Look at all these items',
    };
  },
  computed: {
    selectedItem() {
      return this.selected != null ? this.selected.title : '';
    },
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    selectItem(item) {
      if (item) {
        this.selected = item;
        this.$emit('selected', item);
        if (this.active) {
          this.active = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.dropdown {
  width: 100%;
  max-width: 350px;
  position: relative;
  display: inline-block;
}
.dropdown__trigger {
  background-color: #3498db;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}
.dropdown__trigger:hover,
.dropdown__trigger:focus {
  background-color: #2980b9;
}
.dropdown__content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown__content.show {
  display: block;
}
.dropdown__item {
  width: 100%;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown__item:hover {
  background-color: #333;
  color: white;
}
</style>
