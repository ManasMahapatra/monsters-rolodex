import React from 'react';
import './search-box.style.css';

export const SearchBox = ({placeholder, handleChange}) => (
  // {/* e rrturns an object while, e.target returns the html element triggering it, and e.Value
  //   contains the current value attribute of the HTML element */}
  //
  // {/* setState is a async method, and hence when it executes we can't expect it to work it right away. If we want to do Something
  // right after setting state , it needs to go inside a callback */}
  //
  // {/* Reach creates synthetic event, jjst like HTML events, but the original one if intercepted by ReactDOM engine, and looks up
  //   into state */}
  <input className="search" type="search" placeholder={placeholder} onChange={handleChange}/>

)
