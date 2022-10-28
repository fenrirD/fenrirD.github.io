import {ReactElement} from "react";

import Html from '@site/static/img/svg/html.svg'
import Css from '@site/static/img/svg/css.svg'
import Js from '@site/static/img/svg/js.svg'
import JQuery from '@site/static/img/svg/jqeury.svg'
// import OpenLayers from '@site/static/img/svg/openlayers.svg'
import ReactIcon from '@site/static/img/svg/react.svg'
import TypeScript from '@site/static/img/svg/typescript.svg'
import Vue from '@site/static/img/svg/vue.svg'
import Docker from '@site/static/img/svg/docker.svg'
import Java from '@site/static/img/svg/java.svg'
import Spring from '@site/static/img/svg/spring.svg'
import Kubernetes from '@site/static/img/svg/kubernetes.svg'
import PostgresSQL from '@site/static/img/svg/postgreSQL.svg'


import Git from '@site/static/img/svg/git.svg'
import Svn from '@site/static/img/svg/svn.svg'
import Github from '@site/static/img/svg/github.svg'


import React from "react";
import {CareerType, FontSizeType, GridItemType} from "@site/src/type";
// @ts-ignore
import fwLogo from '@site/static/img/logo_w.png'


function createGridData(title: string, svg: () => ReactElement, fontSize: FontSizeType = "lg"): GridItemType {
  return {
    title,
    svg,
    fontSize
  }
}


const frontEnds = [
  createGridData('HTML', () => <Html/>),
  createGridData('CSS', () => <Css/>),
  createGridData('JS', () => <Js/>),
  createGridData('JQuery', () => <JQuery/>),
  createGridData('React', () => <ReactIcon/>),
  createGridData('Typescript', () => <TypeScript/>),
  createGridData('Vue.JS', () => <Vue/>),
]

const backEnds = [
  createGridData('Java', () => <Java/>),
  createGridData('Docker', () => <Docker/>),
  createGridData('Spring', () => <Spring/>),
  createGridData('PostgresSQL', () => <PostgresSQL/>),
  createGridData('Kubernetes', () => <Kubernetes/>),
]

const etc = [
  createGridData('Git', () => <Git/>),
  createGridData('Svn', () => <Svn/>),
  createGridData('Github', () => <Github/>),
]


const careers: CareerType[] = [
  {
    companyName: '(주)포스웨이브',
    companyTerm: '2019.03 ~ 현재',
    companyLogo: fwLogo,
    projects: [
      {
        projectName: '현대 오토에버 DKC2 클라우드 환경 인프라 구축',
        projectTerm: '2022.07 ~ 현재',
        projectDetail: '현대 오토에버에서 개발한 DKC2 중국 환경의 클라우드 인프라 구축 사업에 TA로 참여 중입니다.',
        skills: ['Git', 'k8s', 'Docker', 'Jenkins', 'ELK'],
        responsibilities: ['ELK 환경 구성 및 설치', 'Docker Swarm 구성 및 설치 자동화 스크립트 작성', 'Docker Swarm에 사용하는 Service 목록을 Portainer API를 통해 자동화 스크립트 작성', 'Jenkins Pipeline CI/CD 작성']
      },
      {
        projectName: '사내 솔루션 개발 AppGi_3.0',
        projectTerm: '2022년 03월 ~ 2022년 07월',
        projectDetail: 'SKC의 Multi-Cloud 기반 AI DevOps플랫폼에 Forcewave의 공간 분석 솔루션(geowave)과 3D Map 플랫폼(geoMETA.js)를 합친 솔루션에 프론트엔드 담당으로 프로젝트에 참여 했습니다.',
        skills: ['Vue.js', 'typescript', 'Git', 'Docker', 'k8s'],
        responsibilities: ['AppGi 3.0의 공간 분석 컴포넌트 개발', '공통 모듈 리팩토링', 'Jenkins CI/CD 자동화', 'geowave, geomMETA 솔루션 연계', 'Docker build 작성']
      },
      {
        projectName: '사내 기술 블로그 개발',
        projectTerm: '2022년 03월 ~ 2022년 04월',
        projectDetail: '포스웨이브에서 임직원들의 요구로 모든 권한을 위임받아 기획, 개발을 담당했습니다. 개발은 Docusaurus, GithubPages를 사용했습니다.',
        skills: ['React.js', 'typescript', 'GIT', 'Docusaurus', 'githubActions'],
        responsibilities: ['블로그 기획 및 개발', 'Github Actions 사용한 배포 자동화', 'Chrome Lighthouse 사용하여 SEO 최적화', '유지 보수및 추가 개발']
      },
      {
        projectName: 'AI 통합 플랫폼 - Infra Management 사업',
        projectTerm: '2021년 10월 ~ 2021년 12월',
        projectDetail: '기존의 AWS로 구성된 SKC의 Multi-Cloud 기반 AI DevOps 플랫폼의 클라우드 환경을 GCP, NCP, OCI 등 클라우드 환경에 맞게 이관하는 프로젝트에 참여했습니다. 전반적인 클라우드 환경과 k8s에 대해 얕게 지식을 얻었습니다.',
        skills: ['k8s', 'GCP', 'AWS', 'NCP', 'OCI','Helm'],
        responsibilities: ['AWS 기준으로 작성된 Pod 각 클라우드 정책에 맞게 변경', '변경된 사항에 대해 메뉴얼 작성']
      },
      {
        projectName: '솔루션 개발 - geoMETA.js',
        projectTerm: '2021년 05월 ~ 2021년 10월',
        projectDetail: 'GeoMETA.js는 포스웨이브에서 TerriaMap과 DeckGL 오픈 소스를 활용하여 3차원 및 2차원 지구(맵)에서 공간 데이터 분석을 하기위한 웹 솔루션으로 유지보수 및 추가 개발을 담당하였습니다.',
        skills: ['React.js', 'Git', 'TerriaMap','Cesium.js', 'DeckGL', 'Docker'],
        responsibilities: ['전반적인 버그 수정 및 코드 리팩토링', 'UI/UX 개선', '3D, 2D Map 스타일 미적용 버그 수정','DockerFile 작성', '배포 스크립트 작성']
      },
      {
        projectName: 'LH 공간정보기반 자산관리정보시스템',
        projectTerm: '2020년 07월 ~ 2021년 03월',
        projectDetail: '기구축된 공간정보기반 자산관리정보시스템을 고도화및 추가 개발을 진행하고, 특정 시스템을 모바일환경으로 구축하는 프로젝트에 참여했습니다.',
        responsibilities: ['지가정보시스템 Backend, Frontend 추가 개발 및 리팩토링', '전반적인 산출물 작성', 'ReactNative의 Native 기능 및 Webview 통신 개발', 'Jenkins CI/CD 자동화 구축','DockerFile 작성', 'CentOS7 서버 환경 구축(Postgres, SVN, WEB/WAS 등)'],
        skills: ['JAVA', 'Spring', 'ReactNative','JQuery', 'PostgresSQL', 'OpenLayers', 'Jenkins', 'SVN']
      },
      {
        projectName: 'LH 개발사업분석플랫폼',
        projectTerm: '2019년 09월 ~ 2020년 02월',
        projectDetail: 'LH에서 사업성 분석을 할 때, 기존에는 지역 본부 별로 엑셀을 사용하여 대략적인 비용 분석을 해서 계산을 했는데, 공간 분석과 연계되어 분석 플랫폼을 구축하는 프로젝트에 참여했습니다.',
        responsibilities: ['공통 모듈 개발 및 개선', '개발 환경 구축(Postgres, SVN, WEB/WAS, MapR)', '전반적인 산출물 작성'],
        skills: ['JAVA', 'Spring', ,'JQuery', 'PostgresSQL', 'OpenLayers', 'SVN']
      }
    ]
  },
]


export {frontEnds, careers, backEnds, etc}