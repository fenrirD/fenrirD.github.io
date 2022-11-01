import React from 'react';
import styles from './styles.module.css';
import {careers, frontEnds, backEnds, etc} from "@site/src/data/constant";
import GridList from "@site/src/components/GridList";
// @ts-ignore
import fwLogo from '@site/static/img/logo_w.png'
import Career from "@site/src/components/Career";

const SkillsSection = () => {
  return (
    <section className={styles.features} style={{flexDirection: 'column', backgroundColor: '#f9c51d'}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h1>📎 SKILLS</h1>
      </div>
      <GridList data={frontEnds}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h2>| FRONTEND</h2>
        </div>
      </GridList>
      <GridList data={backEnds}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h2>| BACKEND</h2>
        </div>
      </GridList>
      <GridList data={etc}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h2>| ETC</h2>
        </div>
      </GridList>
    </section>
  )
}

export default function HomepageFeatures(): JSX.Element {

  return (
    <>
      <SkillsSection/>
      <Career companies={careers}/>
    </>
  );
}
