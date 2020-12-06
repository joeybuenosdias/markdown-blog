import Document, {
	Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content="A site for my programming portfolio" />
					<meta charset="utf-8" />
					<meta name="robots" content="noindex, nofollow" />
					<meta name="viewport" container="width-device-width" />
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