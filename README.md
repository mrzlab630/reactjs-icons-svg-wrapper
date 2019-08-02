## Icons collection And svg Wrapper for React Js


### [DEMO](https://reactjs.org/)
<br>
<br>

## Development

**yarn install / npm install**
<br>
**yarn start / npm start**
<br>
open **http://localhost:3000**
<br>
<br>

## how to use it.

```

import React from 'react';
import {
        Icon,
            ScissorsIcon} from './components/Icons';

const comp = () => {
           
           
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
           
                 return (<>
                             <ul>
                            {
                                renderIcons
                            }
                             </ul>
           
                             <p>OR you can do that:</p>
           
                             <ScissorsIcon size={'5%'}/>
                         </>);
                       };
```

<br>
<br>

## Props

* style = {}
* color = '#000'
* size = '100%'
* className = ''



<br>
<br>


## how to add my svg.

* go to src/components/Icons
* add file: MySvg.js
* add cod to MySvg.js:

```
import React from 'react';
import IconWrapper from './IconWrapper';

const MySvg = props => {

    return <IconWrapper
        viewBox = {'0 0 1792 1792'}
        data = {"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z"}
        {...props} />;
};

export default MySvg;

```
where
<br>
data={} -- < path d="****" /> 
<br>
and 
<br>
viewBox -- viewBox="* * **** ****"
<br>
from svg

* add import MySvg from './MySvg' to index.js
* add to export{MySvg, ...}  to index.js
* add import {MySvg,... } from './' to Icon.js
* add switch case "my-svg": return <MySvg {...props} />;
* FIN.

<br>
<br>

## Donation
If this project help you reduce time to develop, you can give me a cup of coffee :)
<br><br>
[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3FYLY9YVBTSEL)
<br>
<br>

## License

The MIT License.

<br>
<br>

## By

**mrZ** - mrz@mrzlab630.pw