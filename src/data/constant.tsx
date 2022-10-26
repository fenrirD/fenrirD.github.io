import {ReactElement} from "react";

import Html from '@site/static/img/svg/html.svg'
import Css from '@site/static/img/svg/css.svg'
import Js from '@site/static/img/svg/js.svg'
import JQuery from '@site/static/img/svg/jqeury.svg'
import React from "react";

export interface GridItemType {
  readonly title: string
  readonly svg:()=>ReactElement,
  readonly fontSize: FontSizeType

}

type FontSizeType = "sm" | "md" | "lg"

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



export {frontEnds}