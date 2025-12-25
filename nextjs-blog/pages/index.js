import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, My name is Brittani Lovelace. I am a aspiring software developer.I have a passion for creating innovative solutions and learning new technologies.
          I can speak English fluently. If you would like to contact me, please reach out on <a href='https://www.linkedin.com/in/brittani-lovelace'>LinkedIn</a> and <a href='https://github.com/blovelace84'>GitHub</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}