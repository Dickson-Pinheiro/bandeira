import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import Home from './components/landing/'
import QuemSomos from './components/quem-somos'
import Abratem from './components/portfolio/Abratem'
import Tw from './components/portfolio/Tw'
import Uabcam from './components/portfolio/Uabcam'
import Orcamento from './components/orcamento'
import Ebooks from './components/ebooks'
import Lending from './components/landingPage'
import Download from './components/landingPage/formDownload/form'

export default ()=>{
    return(
      <BrowserRouter>

        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/quem-somos' component={QuemSomos}/>
            <Route path='/abratem' component={Abratem} />
            <Route path='/tw' component={Tw} />
            <Route path='/uabcam' component={Uabcam} />
            <Route path='/orcamento' component={Orcamento} />
            <Route exact path='/ebooks' component={Ebooks} />
            <Route path= '/ebooks/download' component={Lending} />
            <Route path='/' component={Download} />
        </Switch>
      </BrowserRouter>  

    )
}