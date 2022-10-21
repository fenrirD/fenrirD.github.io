import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Github from '@site/static/img/svg/icons8-github-96.svg'
import Gmail from '@site/static/img/icon/icons8-gmail-48.svg'
import Notion from '@site/static/img/icon/icons8-notion-48.svg'
// @ts-ignore
import wolf from '@site/static/img/icon/icons8-animal-microdots-premium-96.png'
// import wolf2 from '@site/static/img/icon/icons8-wolf-flaticons-lineal-color-96.png'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  // console.log(github)


  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{height:'100vh'}}>
      <div className="container">
        <div>
          <div >
            <img src={wolf} className={styles.avatar}/>
          </div>
        </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
        <div>
          <div className={styles.navLinkIconArea}>
            <Link className={styles.navLink} to='https://github.com/fenrirD' href="_blank">
              <div className={styles.imageWrapper}>
                <Github />
              </div>
            </Link>
            <div className={styles.navLink} onClick={()=>{
              navigator.clipboard.writeText("fenrir4504@gmail.com")
              toast("복사")
            }}>
              <div className={styles.imageWrapper}>
                <Gmail />
              </div>
            </div>
            <Link className={styles.navLink} to='https://cooked-sorrel-a41.notion.site/699896a9e3ec43c1abc7426153427605' href="_blank">
              <div className={styles.imageWrapper}>
                <Notion />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <button>dd!</button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
       <HomepageHeader />

       {/*<main>*/}
         {/*<HomepageFeatures />*/}
       {/*</main>*/}
      <ToastContainer/>
    </Layout>
  );
}
