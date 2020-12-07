import Document, {
	Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content="A site for my programming portfolio" />
					<meta charSet="utf-8" />
					<meta name="robots" content="noindex, nofollow" />
					<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
