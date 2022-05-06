import { FcStatistics } from "react-icons/fc";
import { BiSearch, BiChevronLeft, BiChevronRight, BiBell, BiDotsVerticalRounded } from "react-icons/bi";
import useStyles from './styles/Header';
import NavMenuDraw from "./navMenuDraw";

const Header = () => {
    const classes = useStyles();
    return (
      <div className={classes.header}>
        <div className={classes.headerLeft}>
            <div className={classes.sliderBar}><NavMenuDraw /></div>
            <div className={classes.alignItemsCenter}>
                <span className={classes.headerStats}>Stats, monthly updates</span>
                <FcStatistics className={classes.headerIcon} />
            </div>
            <BiSearch className={classes.searchIcon}/>
        </div>
        <div className={classes.headerRight}>
            <div className={classes.dFlex}>
                <div >
                    <BiChevronLeft  className={classes.allowIcon} />
                    <BiChevronRight  className={`${classes.allowIcon} ${classes.iconActive}`}  />
                </div>
                <span  className={classes.headerStats}>Today, 05 Aug</span>
            </div>
            <div className={classes.dFlex}>
                <BiBell className={classes.notifyIcon}/>
                <BiDotsVerticalRounded />
            </div>
        </div>
      </div>
    );
  }
  
  export default Header;