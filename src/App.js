import React from 'react';
import {Icon,ScissorsIcon} from './components/Icons';
import './App.css';




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
                  <ul>
                 {
                     renderIcons
                 }
                  </ul>

                  <p>OR or you can do that:</p>

                  <ScissorsIcon size={'5%'}/>
              </div>);
            };

export default App;
