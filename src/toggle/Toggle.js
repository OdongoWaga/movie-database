import React from 'react';
import {connect} from 'react-redux';
 import {toggleMessage} from './actions';
 import {bindActionCreators} from 'redux';


const Toggle = ({messageVisibility, toggleMessage}) => (
    <div>
    {messageVisibility &&
     <h1> Now You See Me! </h1> 
    }
  <button onClick ={toggleMessage}> Toggle Me </button> 
    

    </div>

);
 






const mapStateToProps = state => ({
    messageVisibility: state.toggle.messageVisibility,
}); 

const mapDispatchToProps = (dispatch) => bindActionCreators ({
    toggleMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)
 