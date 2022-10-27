import React from "react";
import styles from "./styles.module.css";
import {Props} from "@site/src/components/GridList";
import {frontEnds} from "@site/src/data/constant";

const GridList = (props:Props) => {
  console.log(props)
  return (
    <div className="container">
      {props.children}
      <div className={styles.gridRow}>
        {
          frontEnds.map(({svg, title},idx)=>{
            return (
              <div style={{justifyContent:'center', alignContent:'center'}} className={styles.test} key={`${title}_${idx}`}>
                {svg()}
                <span>{title}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default GridList