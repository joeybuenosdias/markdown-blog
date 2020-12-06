export default function PostTemplate(props) {
    console.log('props', props)
    return (
        <div>
            Post template
        </div>
    )
}

PostTemplate.getInitialProps = async (context) => {
    const { slug } = context.query

    return { slug }
}