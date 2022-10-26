import {GridItemType} from "@site/src/data/constant";

declare module '@site/src/components/GridList' {
  import type {ReactNode} from 'react';

  export interface Props {
    readonly children?: ReactNode;
    readonly data: GridItemType[]
  }
  export default function GridList(props: Props): JSX.Element;
}