import SearchControl from '../components/UI/SearchControl/SearchControl';

export default {
  title: 'SearchControl',
  component: SearchControl,
};

export const withText = () => <SearchControl onSearchClick={() => {}} />;

export const withEmoji = () => <button>Click me please</button>;
