import './seasonDisplay.css';
import React from 'react';

let seasonConfig = {
    summer: {
        text: 'Venky it is summer',
        iconName: 'sun'
    },
    winter: {
        text: 'Venky it is winter',
        iconName: 'snowflake'
    }
}

const getSeason = (lattitude, month) => {
    if(month > 2 && month < 9) {
       return lattitude > 0 ? 'summer': 'winter'
    }
    else {
        return lattitude > 0 ? 'winter': 'summer' 
    }
};

const SeasonDisplay = (props) => {
   const season = getSeason(props.latitude, new Date().getMonth());
   let {text, iconName} = seasonConfig[season]
  
    return(
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon `}/>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
    </div>
    )
};

export default SeasonDisplay;