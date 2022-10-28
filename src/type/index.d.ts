import {GridItemType} from "@site/src/data/constant";
import {ReactElement} from "react";

declare module '@site/src/components/GridList' {
  import type {ReactNode} from 'react';

  export interface Props {
    readonly children?: ReactNode;
    readonly data: GridItemType[]
  }
  export default function GridList(props: Props): JSX.Element;
}

declare module '@site/src/components/Career' {
  import type {ReactNode} from 'react';
  export interface Props {
    readonly children?: ReactNode;
    readonly companies: CareerType[]
  }
  export default function Career(props: Props): JSX.Element;
}

export interface GridItemType {
  readonly title: string
  readonly svg:()=>ReactElement,
  readonly fontSize: FontSizeType

}

type FontSizeType = "sm" | "md" | "lg"

export interface ProjectType {
  readonly projectName: string,
  readonly projectTerm: string,
  readonly projectDetail: string,
  readonly skills: string[],
  readonly responsibilities:string[],
}

export interface CareerType {
  readonly companyName: string,
  readonly companyTerm: string,
  readonly companyLogo: string,
  readonly projects: ProjectType[]
}