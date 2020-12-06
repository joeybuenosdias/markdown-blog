export default function Index() {
    return (
        <div>
            I am the Home page
        </div>
    )
}

Index.getInitialProps = () => {
    return {
        title: 'Sookies Blog',
        subtitle: 'I like fish',
    }
}