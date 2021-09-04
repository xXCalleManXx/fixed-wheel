import React, { CSSProperties } from 'react';
import styles from '../styles/Wheel.module.css';

const WheelPart = ({style, color, text}: {style?: CSSProperties, color: string, text: string}) => {
  return (
    <div style={style} className={styles.wheelPartParent}>
      <div className={styles.wheelPart} style={{backgroundColor: color}}><p>{text}</p></div>
    </div>
  )
}

class Wheel extends React.Component<any, {rotated: boolean, point: number, endWheelPartIndex: number}> {

  constructor(props: any) {
    super(props);
    this.state = {
      rotated: false,
      point: this.randomNumber(360),
      endWheelPartIndex: 2,
    }
  }

  randomNumber(max: number) {
    return Math.floor(Math.random() * (max + 1));
  }

  endRotationPoint(index: number, currentPos: number) {
    let endPos = currentPos - currentPos % 360 + 360;
    endPos += index * 90 - 1 - this.randomNumber(88);
    endPos += 360 * 10;
    return endPos;
  }

  render() {
    const {point, endWheelPartIndex} = this.state;
    return (
      <>
        <h1 onClick={() => this.setState({point: this.endRotationPoint(endWheelPartIndex, point)})}>Tryk på mig!</h1>
        <div className={styles.wheelPoint}>|</div>
        <div className={styles.wheel} style={{transform: `rotate(${point}deg)`}}>
          <WheelPart color={'#EA4654'} text={'Gavekort'}/>
          <WheelPart color={'#E60013'} style={{transform: 'rotate(90deg)'}} text={'Ørering'}/>
          <WheelPart color={'#B3000F'} style={{transform: 'rotate(180deg)'}} text={'Drikkedunk'}/>
          <WheelPart color={'#660008'} style={{transform: 'rotate(270deg)'}} text={'Cykel'}/>
        </div>
      </>
    );
  }

}

export default Wheel;