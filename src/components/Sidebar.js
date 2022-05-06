
import * as React from 'react';
import { BiHomeAlt, BiDoughnutChart, BiTask, BiUser } from "react-icons/bi";
import { FiLogOut, FiSettings } from "react-icons/fi";
import useStyles from './styles/Sidebar';

const Slider = () => {
    const classes = useStyles();
    return (
        <div className={classes.slider}>
          <div className={classes.dFlexColumn}>
            <h5 className={classes.sliderTitle} >SemangQa</h5>
            <img className={classes.sliderImg} src='/images/avatar.png' />
            <h5 className={classes.sliderUserName}>Mark Havelar</h5>
            <span className={classes.sliderText}>Graphic Designer</span>
            <div className={classes.flexColumn}>
              <div className={`${classes.alignItemsCenter} ${classes.sliderNavMargin}`}>
                <BiHomeAlt className={classes.textGray}/>
                <div className={classes.sliderNav}>Home</div>
              </div>
              <div className={`${classes.alignItemsCenter} ${classes.sliderNavMargin}`}>
                <BiDoughnutChart className={classes.textWhite}/>
                <span className={`${classes.sliderNav} ${classes.textWhite}`}>Dashboard</span>
              </div>
              <div className={`${classes.alignItemsCenter} ${classes.sliderNavMargin}`}>
                <BiTask className={classes.textGray}/>
                <span className={classes.sliderNav}>Task</span>
              </div>
              <div className={`${classes.alignItemsCenter} ${classes.sliderNavMargin}`}>
                <FiSettings className={classes.textGray}/>
                <span className={classes.sliderNav}>Settings</span>
              </div>
              <div className={`${classes.alignItemsCenter} ${classes.sliderNavMargin}`}>
                <BiUser className={classes.textGray}/>
                <span className={classes.sliderNav}>Profile</span>
              </div>
              <div className={`${classes.alignItemsCenter} ${classes.position}`}>
                <FiLogOut className={classes.textGray}/>
                <div className={classes.sliderNav}>Log Out</div>
              </div>
            </div>
          </div>
        </div>
    );
  }
  
  export default Slider;