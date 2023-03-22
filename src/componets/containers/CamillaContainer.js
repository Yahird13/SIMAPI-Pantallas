import React from 'react'
import { turnOffAlert } from '../buttons/Button';
import Button from '../buttons/Button';

export default function CamillaContainer(props) {
    const { camillas } = props;
  return (
    <div style={{
      margin: 3, 
      display: 'grid',
      gridTemplateColumns: 'repeat(5, auto)',
      gridTemplateRows: 'repeat(2, auto)',
      gap: 'auto',
      alignItems: 'center',
      gridAutoColumns: 'minmax(min-content, max-content)',}}>
        {camillas ? camillas.map((item, index) => {
            return (
                <Button key={index} textCamilla={`camilla ${item.paciente} (${index+1})`} camilla={true} style={{margin: 5}} onClick={() => {turnOffAlert()}} alert={item.estado} id={item.idCamilla}/>
            );
          }) : null}
    </div>
  )
}
