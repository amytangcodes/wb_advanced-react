import PropTypes from 'prop-types';
import Page from '../components/Page';

export default function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
