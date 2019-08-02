import React from 'react';
import {Icon,ScissorsIcon} from './components/Icons';
import './assets/css/App.css';




const App = () => {


    const iconsList = ["align-justify",
                        "chain-broken",
                        "table",
                        "th-large",
                        "bold",
                        "align-center",
                        "columns",
                        "eraser",
                        "file-text-o",
                        "header",
                        "list",
                        "outdent",
                        "repeat",
                        "scissors"
                    ];





    const renderIcons = iconsList.map((itm,idx) =>(
                                                        <li key={idx}>
                                                        <Icon name={itm} color={'#00456b'} size={'5%'}/>
                                                        </li>
                                                        ));


              return (<div className={`App`}>

                  <h1>Icons collection And svg Wrapper for React Js</h1>

                  <ul>
                 {
                     renderIcons
                 }
                  </ul>

              </div>);
            };

export default App;
