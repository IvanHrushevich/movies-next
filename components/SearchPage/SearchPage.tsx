import { FunctionComponent } from 'react';

import { Content, SearchPanel } from '../../containers';
import Layout from '../Layout/Layout';

const SearchPage: FunctionComponent = () => (
  <Layout>
    <SearchPanel />
    <Content />
  </Layout>
);

export default SearchPage;
