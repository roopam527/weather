import React from 'react';
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

const average = (data) =>{
    return _.round(_.sum(data)/data.length);
}

export default (props) =>{
    return(
        <div>
            <Sparklines height={120} width={180} data={props.temps} >
                        <SparklinesLine color={props.color}/>
                        <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <div> {average(props.temps)}{props.units}</div>
        </div>
    )
}