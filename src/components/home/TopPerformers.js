import Grid from '@mui/material/Grid';
import useStyles from '../styles/TopPerformers';

const topPerformers = [
    { url: "/images/5fc067e39f17d.png", title: "Mark Nail", text: "Graphic Designer", mail: "@mark_naillo", progress: "57" },
    { url: "/images/5fc068e2b7aa1.png", title: "Mercy Gelaro", text: "Copy Writer", mail: "@mercygelarore", progress: "32" },
    { url: "/images/5fc0689e0168c.png", title: "Valley Amtonyo", text: "Ui Designer", mail: "@valleyamtonyo", progress: "45" }
]

const TopPerformers = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.topPerform}  container spacing={2}>
          <Grid item xs={12} lg={8}>
            <h5 className={classes.topPerformsTitle}>Top Performers</h5>
            {topPerformers.map((topPerformer) => (
              <div key={topPerformer.title} className={classes.topPerformsItem}>
                <img className={classes.topPerformersImg} src='/images/5fc067e39f17d.png' />
                <div className={classes.justifyContentStart}>
                  <span className={classes.topPerformsItemTitle}>{topPerformer.title}</span>
                  <span className={classes.topPerformsItemText}>{topPerformer.text}</span>
                </div>
                <span className={classes.topPerformsItemText}>{topPerformer.mail}</span>
                <span className={classes.Progress}>{topPerformer.progress}%</span>
              </div>
            ))}
          </Grid>
          <Grid item xs={0} sm={1} lg={1}></Grid>
          <Grid className={classes.homeBodyUpgrade} item xs={10} sm={6} lg={3}>
            <div className=''>
              <div className={`${classes.textWhite} ${classes.upgradeTitle}`}>Upgrade<br/> Your Crowd</div>
              <span className={classes.upgradetext}>Pro plan for better results</span>
              <div className={classes.justifyEnd}>
                <div className={classes.nowClass}>
                  <img className={classes.nowClassImg} src="/images/now icon.png" />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
    );
}

export default TopPerformers;