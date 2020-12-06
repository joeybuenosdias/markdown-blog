export default function Index() {
	return (
		<div>
			I am the Home page
			I want to map through all the content here
		</div>
	);
}

Index.getInitialProps = () => ({
	title: 'Sookies Blog',
	subtitle: 'I like fish',
});
