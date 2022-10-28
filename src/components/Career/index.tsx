import React from "react";
import styles from "./styles.module.css";
import {Props} from "@site/src/components/Career";
import {CareerType, ProjectType} from "@site/src/type";
import clsx from "clsx";

type CompanyInfoType = {
  companyName?: string,
  companyTerm?: string,
  companyLogo?: string,
}


const CompanyInfo = ({companyName, companyTerm}: CompanyInfoType) => {
  return (
    <div>
      <div className={styles.companyName}>{companyName}</div>
      <div className={styles.companyTerm}>
        {companyTerm}
      </div>
    </div>
  )
}

const CompanyLogo = ({companyLogo}: CompanyInfoType) => {
  return (
    <div className={styles.companyLogoSection}>
      <div className={styles.careerImg}>
        <img src={companyLogo} className={styles.img}/>
      </div>
    </div>
  )
}


const Responsibility = ({responsibilities}:{responsibilities:string[]}) =>{
  return (
    <div className={styles.projectContent}>
      <div className={styles.projectHeader}>📌 담당 업무</div>
      <ul>
        {responsibilities.map((responsibility, idx)=>
          <li key={`responsibility_${idx}`}>{responsibility}</li>
        )}
      </ul>
    </div>
  )
}

//TODO badge Componet를 따로 만들면?
const Skill = ({skills}: { skills: string[] }) => {
  const BADGES = ['primary', 'success', 'info', 'warning'];
  return (
    <div className={styles.projectContent}>
      <div className={styles.projectHeader}>💻 관련기술</div>
      <div className={styles.projectSkills}>
        {skills.map((skill, idx) =>
          <div key={`skill_${idx}`}>
            <span className={`badge badge--${BADGES[idx % BADGES.length]}`}>{skill}</span>
          </div>
        )}
      </div>
    </div>
  )
}

const ProjectSection = ({projects}: { projects: ProjectType[] }) => {

  return (
    <div>
      {projects.map(({projectName, projectDetail, projectTerm, responsibilities, skills}, idx) => {
        return (
          <div key={`p_${idx}`}>
            <div className={styles.projectName}>
              ▎ {projectName}
            </div>
            <div className={styles.projectTerm}>{projectTerm}</div>
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>🔍 상세 내용</div>
              <div>{projectDetail}</div>
            </div>
            <Skill skills={skills}/>
            <Responsibility responsibilities={responsibilities} />
          </div>
        )
      })}
    </div>
  )
}

const Career = (props: Props) => {
  const {companies} = props
  console.log(props, "?")
  return (
    <section className={styles.careerSection}>
      <div className={styles.careerTitle}>
        <h1>📃 CAREER</h1>
      </div>
      {companies.map(({companyName, companyTerm, companyLogo, projects}, idx) =>
        (
          <div className={clsx(styles.careerContainer, "container")} key={`p_${idx}`}>
            <CompanyLogo companyLogo={companyLogo}/>
            <div className={styles.companyInfoSection}>
              <CompanyInfo companyName={companyName} companyTerm={companyTerm}/>
              <ProjectSection projects={projects}/>
            </div>
          </div>
        )
      )}
    </section>
  )
}

export default Career