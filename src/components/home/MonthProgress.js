import Grid from '@mui/material/Grid';
import Charts from './Chart/customChart'
import TopPerformers from './TopPerformers';
import useStyles from '../styles/MonthProgress';

const MonthProgress = () => {
    const classes = useStyles();
    return (
      <Grid container>
        <h5 className={classes.homeBodyTitle}>Monthly Progress</h5>
        <Grid className={classes.homeBodyGraph} container>
          <Grid item xs={3}>
            <div className={classes.number}>16</div>
            <span className={classes.numberText}>Team Members</span>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.number}>24</div>
            <span className={classes.numberText}>Attachments</span>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.number}>32</div>
            <span className={classes.numberText}>Access Credits</span>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.number}>40</div>
            <span className={classes.numberText}>Likes</span>
          </Grid>
        </Grid>
        <Grid>
          <div className={classes.justifyContentBetween}>
            <Charts />
          </div>
        </Grid>
        <TopPerformers />
      </Grid>
    );
  }
  
  export default MonthProgress;