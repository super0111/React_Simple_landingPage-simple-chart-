import Slider from './components/Sidebar';
import Header from './components/Header';
import Notification from './components/home/Notification';
import Grid from '@mui/material/Grid';
import MonthProgress from './components/home/MonthProgress';
import useStyles from './components/styles/App';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.body}>
        <Grid className={classes.homeBody} container>
          <Grid item xs={0} sm={2} lg={2}>
            <Slider/>
          </Grid>
          <Grid item xs={12} sm={10} lg={10} className={classes.pl30}>
            <div className={`${classes.home} ${classes.p30}`} >
              <Header />
              <div className={classes.divider}/>
              <Grid direction={{xs:'column', sm:'row', lg:'row'}} container spacing={2}>
                <Grid item xs={12} sm={12} lg={8}>
                  <MonthProgress className={classes.mainBody}/>
                </Grid>
                <Grid item xs={12} sm={10} lg={4} className={classes.pl10}>
                  <Notification/>
                </Grid>
              </Grid>
            </div>
          </Grid>
      </Grid>
    </div>
  );
}

export default App;
