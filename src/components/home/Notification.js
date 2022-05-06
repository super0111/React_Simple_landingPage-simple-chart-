import { BiEdit, BiCalendar, BiPhone, BiDotsVerticalRounded } from "react-icons/bi";
import { FaRegHandSpock } from "react-icons/fa";
import { GiBarbecue } from "react-icons/gi";
import useStyles from '../styles/Notification';

const Notification = () => {
    const classes = useStyles();
    return (
      <div className={classes.flexColumn}>
        <div className={classes.mt30}>
          <div className={classes.divider9}>
            <span>09.00 am</span> ----------------------------
          </div>
          <div className={classes.justifyEnd}>
            <div className={classes.yellowField}>
              <div className={classes.dFlex}>
                <div className={classes.yellowFieldIcon}>
                  <FaRegHandSpock className={classes.textWhite} />
                </div>
                <div className={classes.flexColumn}>
                  <span className={classes.notifyName}>Meet the John</span>
                  <span className={classes.notifyTime}>09.00-09.30</span>
                </div>
              </div>
              <BiDotsVerticalRounded />
            </div>
          </div>
          <div className={classes.justifyEnd}>
            <div className={classes.pinkField}>
              <div className={classes.dFlex}>
                <div className={classes.pinkFieldIcon}>
                  <GiBarbecue className={classes.textWhite} />
                </div>
                <div className={classes.flexColumn}>
                  <span className={classes.notifyName}>Goes to Caffe</span>
                  <span className={classes.notifyTime}>09.30-10.30</span>
                </div>
              </div>
              <BiDotsVerticalRounded />
            </div>
          </div>
        </div>
        <div>
          <div className={classes.divider10}>
            <span>10.00 am</span> ----------------------------
          </div>
          <div className={classes.justifyEnd}>
            <div className={`${classes.pinkField} ${classes.rightPink}`}>
              <div className={classes.dFlex}>
                <div className={classes.pinkFieldIcon}>
                  <BiEdit className={classes.textWhite} />
                </div>
                <div className={classes.flexColumn}>
                  <span className={classes.notifyName}>Update task</span>
                  <span className={classes.notifyTime}>10.00-10.15</span>
                </div>
              </div>
              <BiDotsVerticalRounded />
            </div>
          </div>
          <div className={classes.justifyEnd}>
            <div className={classes.pinkField}>
              <div className={classes.dFlex}>
                <div className={classes.pinkFieldIcon}>
                  <BiPhone className={classes.textWhite} />
                </div>
                <div className={classes.flexColumn}>
                  <span className={classes.notifyName}>Call Data for work</span>
                  <span className={classes.notifyTime}>10.15-10.45</span>
                </div>
              </div>
              <BiDotsVerticalRounded />
            </div>
          </div>
          <div className={classes.justifyEnd}>
            <div className={classes.yellowField}>
              <div className={classes.dFlex}>
                <div className={classes.yellowFieldIcon}>
                  <BiCalendar className={classes.textWhite} />
                </div>
                <div className={classes.flexColumn}>
                  <span className={classes.notifyName}>Shedule for assign</span>
                  <span className={classes.notifyTime}>10.45-11.00</span>
                </div>
              </div>
              <BiDotsVerticalRounded />
            </div>
          </div>
        </div>
        <div>
          <div className={classes.divider11}>
            <span>11.00 am</span> ----------------------------
          </div>
          <div className={classes.justifyEnd}>
            <div className={`${classes.yellowField} ${classes.rightYellow}`}>
              <div className={classes.dFlex}>
                <div className={classes.yellowFieldIcon}>
                  <FaRegHandSpock className={classes.textWhite} />
                </div>
                <div className={classes.flexColumn}>
                  <span className={classes.notifyName}>Send some work</span>
                  <span className={classes.notifyTime}>11.00-11.30</span>
                </div>
              </div>
              <BiDotsVerticalRounded />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Notification;