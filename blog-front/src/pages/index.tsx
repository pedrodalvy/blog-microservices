import HomeTemplate, { HomeTemplatePops } from 'templates/HomeTemplate';

export default function Home(props: HomeTemplatePops) {
  return <HomeTemplate {...props} />;
}

export async function getServerSideProps() {
  const postsResponse = await fetch('http://localhost:3103/posts');
  const posts = await postsResponse.json();

  return { props: { posts } };
}
