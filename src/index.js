import React from 'react';
import ReactDOM  from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spinner from './spinner';

class App extends React.Component {
    constructor(props) {
        super(props);
    };
    
    state = { latitude: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude: position.coords.latitude})
            },
            (err) => {
                this.setState({errorMessage: err.message})
            }
        )
    };

    renderContent() {
        if(this.state.errorMessage && !this.state.latitude){
            return <div>Error : {this.state.errorMessage}</div>
          };
    
          if(!this.state.errorMessage && this.state.latitude){
          return <div><SeasonDisplay latitude={this.state.latitude}/></div>
          };
    
          return <Spinner message="please accept the location request"/>
        }

    componentDidUpdate() {
        console.log('component has just updated - re rendered');
    }

    render() {
        return(
        <div className="border red">
            {this.renderContent()}
        </div>
        )
        }
    }

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)