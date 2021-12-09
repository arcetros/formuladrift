import { fetchAPI } from '/lib/api'

export default function Team({ team }) {
  console.log(team)
  return <h1>test</h1>
}

export async function getStaticPaths() {
  const res = await fetchAPI('/teams')

  return {
    paths: res.map((item) => ({
      params: {
        team: item.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const res = await fetchAPI(`/teams?slug=${params.team}`)

  return {
    props: { team: res[0] },
    revalidate: 1,
  }
}
