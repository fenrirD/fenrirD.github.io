import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {frontEnds} from "@site/src/data/constant";
import GridList from "@site/src/components/GridList";
import fwLogo from '@site/static/img/logo_w.png'

const SkillsSection = () => {
  return (
    <section className={styles.features} style={{flexDirection:'column', backgroundColor:'#f9c51d'}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h1>Skills</h1>
      </div>
      <GridList data={frontEnds}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h2>| FRONTEND</h2>
        </div>
      </GridList>
      <GridList data={frontEnds}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h2>| BACKEND</h2>
        </div>
      </GridList>
      <GridList data={frontEnds}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h2>| ETC</h2>
        </div>
      </GridList>
    </section>
  )
}

const CareerSection = () => {
  return (
    <section style={{backgroundColor:"#f5f5f5"}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h1>CAREER</h1>
      </div>
      <div className="container" style={{display:'flex', flexDirection:'row'}}>
        <div style={{flex:1, borderRight:'2px solid gray', margin: '0 auto'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div className={styles.careerImg}>
              <img src={fwLogo} />
            </div>
          </div>
        </div>
        <div style={{display:'flex', flex:2, paddingLeft:'3rem'}}>
          <div>
            <h3>(주) 포스웨이브</h3>
            <h4>2019.03 ~ 현재</h4>
          </div>

        </div>
      </div>
    </section>
  )
}

export default function HomepageFeatures(): JSX.Element {

  return (
    <>
      <SkillsSection/>
      <CareerSection/>
    </>
  );
}
