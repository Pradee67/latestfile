import React from 'react';
import Styles from '../Styles/unmount.css'

const Unmounting = () => {
  return (
    <>
    <div>
    <h2>Unmounting</h2>
    <p>React supports one unmounting lifecycle method, componentWillUnmount, which will be called right before a component is removed from the DOM.

    componentWillUnmount() is used to do any necessary cleanup (canceling any timers or intervals, for example) before the component disappears.</p>
    </div> </> )
}

export default Unmounting