import Dropdown from '../src/components/Dropdown';

export default {
  title: 'Components | Dropdown',
  component: Dropdown,
};

export const withSomeItems = () => {
  const items = [
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
  ];
  return {
    components: { Dropdown },
    data() {
      return {
        items,
      };
    },
    template: `<Dropdown v-bind:items="items" />`,
  };
};
