import { useRouter } from "next/router"

export async function getStaticPaths() {

  return {
    paths: [
      {
        params: {
          title: 'aaa',
        },
      },
      {
        params: {
          title: 'bbb'
        },
      }
    ],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const content = {
    'aaa': { content: 'Hello World' },
    'bbb': { content: 'This is Content' }
  }
  return {
    props: {
      // title: context.params.title,
      content: content[context.params.title].content
    },
  }
}

export default function Title({ content }) {
  const router = useRouter()
  const { title } = router.query

  return <div>
    <h1>Hello World</h1>
    <p>This is a dynamic {title} page</p>
    <p>{content}</p>
  </div>
}