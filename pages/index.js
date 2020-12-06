export default function Index() {
	return (
		<div>
			I am the Home page
		</div>
	);
}

Index.getInitialProps = () => ({
	title: 'Sookies Blog',
	subtitle: 'I like fish',
});
