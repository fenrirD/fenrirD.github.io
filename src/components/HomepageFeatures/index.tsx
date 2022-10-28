import React from 'react';
import clsx from 'clsx';
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

const CareerSection = () => {
  return (
    <section className={styles.careerSection}>
      <div style={{display: 'flex', justifyContent: 'center', paddingTop:'2rem',marginBottom:'1.5rem'}}>
        <h1>📃 CAREER</h1>
      </div>
      <div className={clsx(styles.careerContainer, "container")}>
        <div className={styles.companyLogoDiv}>
            <div className={styles.careerImg}>
              <img src={fwLogo} className={styles.img}/>
            </div>
        </div>
        <div style={{display: 'flex', flex: 2, paddingLeft: '3rem', flexDirection: 'column'}}>
          {/*타이틀*/}
          <div style={{borderBottom: '3px solid gray', width: '100%'}}>
            <div className={styles.companyName}>(주)포스웨이브</div>
            <div className={styles.companyTerm}>
              2019.03 ~ 현재
            </div>
          </div>
          {/* 플젝 */}
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className={styles.projectName}>
              ▎ 현대 오토에버 DKC2 클라우드 환경 인프라 구축
            </div>
            <div className={styles.projectTerm}>2022.07 ~ 현재</div>
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>🔍 상세 내용</div>
              <div>현대 오토에버에서 개발한 DKC2 중국 환경의 클라우드 인프라 구축 사업에 TA로 참여 중입니다.</div>
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>💻 관련기술</div>
              <div className={styles.projectSkills}>
                <div>
                  <span className="badge badge--primary">GIT</span>
                </div>
                <div>
                  <span className="badge badge--success">k8s</span>
                </div>
                <div>
                  <span className="badge badge--info">Docker</span>
                </div>
                <div>
                  <span className="badge badge--warning">Jenkins</span>
                </div>
              </div>
            </div>

            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>📌 담당 업무</div>
              <ul>
                <li>ELK 환경 구성 및 설치</li>
                <li>Docker Swarm 구성 및 설치 자동화 스크립트 작성</li>
                <li>Docker Swarm에 사용하는 Service 목록을 Portainer API를 통해 자동화 스크립트 작성</li>
                <li>Jenkins Pipeline CI/CD 작성</li>
              </ul>
            </div>
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
      {/*<CareerSection/>*/}
      <Career companies={careers}/>
    </>
  );
}
