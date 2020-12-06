import PropTypes from 'prop-types';

import '../styles/globals.css';
import '../styles/vars.css';

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

App.propTypes = {
	Component: PropTypes.func.isRequired,
	// eslint-disable-next-line react/require-default-props
	pageProps: PropTypes.object,
};
