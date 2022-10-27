import {ReactElement} from "react";

import Html from '@site/static/img/svg/html.svg'
import Css from '@site/static/img/svg/css.svg'
import Js from '@site/static/img/svg/js.svg'
import JQuery from '@site/static/img/svg/jqeury.svg'
import React from "react";
import {CareerType, FontSizeType, GridItemType} from "@site/src/type";



function createGridData(title:string, svg:()=>ReactElement, fontSize:FontSizeType="lg"):GridItemType {
  return {
    title,
    svg,
    fontSize
  }
}


const frontEnds = [
  createGridData('HTML',()=><Html/> ),
  createGridData('CSS',()=><Css/> ),
  createGridData('JS',()=><Js/> ),
  createGridData('JQuery',()=><JQuery/> ),
  createGridData('JQuery',()=><JQuery/> ),
  createGridData('JQuery',()=><JQuery/> ),
  createGridData('JQuery',()=><JQuery/> ),
  createGridData('JQuery',()=><JQuery/> )
]

const careers:CareerType[] = [{
  companyName:'(주)포스웨이브',
  companyTerm:'2019.03 ~ 현재',
  companyLogo:'',
  projects: [{
    projectName: '현대 오토에버 DKC2 클라우드 환경 인프라 구축',
    projectTerm: '2022.07 ~ 현재',
    projectDetail: '현대 오토에버에서 개발한 DKC2 중국 환경의 클라우드 인프라 구축 사업에 TA로 참여 중입니다.',
    skills:['GIT', 'k8s', 'Docker', 'Jenkins', 'ELK'],
    responsibilities:['ELK 환경 구성 및 설치','Docker Swarm 구성 및 설치 자동화 스크립트 작성','Docker Swarm에 사용하는 Service 목록을 Portainer API를 통해 자동화 스크립트 작성', 'Jenkins Pipeline CI/CD 작성']
  }]

}]



export {frontEnds, careers}