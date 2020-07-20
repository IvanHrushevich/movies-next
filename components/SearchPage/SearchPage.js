import Layout from '../Layout/Layout';
import { Content, SearchPanel } from '../../containers';

export const SearchPage = ({ movies }) => (
  <Layout>
    <SearchPanel />
    <Content />
  </Layout>
);
