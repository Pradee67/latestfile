import React from 'react';
import Styles from '../Styles/update.css'

const Updating = () => {
  return (
    <>
    <div>
    <h2>Updating</h2>
    <p>When a component updates, shouldComponentUpdate() gets called after componentWillReceiveProps(), but still before the rendering begins. It automatically receives two arguments: nextProps and nextState.

    shouldComponentUpdate() should return either true or false. The best way to use this method is to have it return false only under certain conditions. If those conditions are met, then your component will not update.</p>
    </div> </>
     )
}

export default Updating