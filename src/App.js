import React from 'react'
import NavBar from './components/NavBar'
import Explore from './components/Explore'
import QuickContact from './components/QuickContact'
import { Grid } from '@material-ui/core'
import AboutUs from './components/AboutUs'
import HowWeWork from './components/HowWeWork'
import MeetOurFamilyBusiness from './components/MeetOurFamilyBusiness'
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
      <Grid item container>
        <AboutUs /> 
      </Grid>
      <Grid item container>
        <HowWeWork /> 
      </Grid>
      <Grid item container>
        <MeetOurFamilyBusiness />
        </Grid>
    </Grid>
    
  )
}

export default App
