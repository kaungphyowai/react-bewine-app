import React from 'react'
import NavBar from './components/NavBar'
import Explore from './components/Explore'
import QuickContact from './components/QuickContact'
import { Grid } from '@material-ui/core'
const App = () => {

  return (
    <Grid container direction="column" justify="flex-start" alignItems="center"> 
      <Grid item container>
      <NavBar></NavBar>

      </Grid>
      <Grid item container>
      <Explore />
      </Grid>
      <Grid item container>
      <QuickContact />

      </Grid>

    </Grid>
    
  )
}

export default App
