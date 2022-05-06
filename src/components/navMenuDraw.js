import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useStyles from './styles/NavDraw';
import { BiHomeAlt, BiDoughnutChart, BiTask, BiUser } from "react-icons/bi";
import { FiLogOut, FiSettings } from "react-icons/fi";

const NavMenuDraw = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <IconButton
        style={{color:"black"}}
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}
        >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
      <Drawer
        className={classes.drawer}
        style={{ opacity: "0.6!important", backgroundColor: "#7eaaf8!important", }}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.dFlex}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <div className={classes.drawTitle}>Menu</div>   
        </div>
        <Divider />
        <List>
          <div className={classes.dFlexColumn}>
            <h5 className={`${classes.sliderTitle} ${classes.textBlack}`} >SemangQa</h5>
            <img className={classes.sliderImg} src='/images/avatar.png' />
            <h5 className={`${classes.sliderUserName} ${classes.textBlack}`}>Mark Havelar</h5>
            <span className={classes.sliderText}>Graphic Designer</span>
            <div className={classes.flexColumn}>
              <div className={`${classes.alignItemsCenter} ${classes.sliderNavMargin}`}>
                <BiHomeAlt className={classes.textGray}/>
                <div className={classes.sliderNav}>Home</div>
              </div>
              <div className={`${classes.alignItemsCenter} ${classes.sliderNavMargin}`}>
                <BiDoughnutChart className={classes.textGray}/>
                <span className={classes.sliderNav}>Dashboard</span>
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
                <BiUser className={classes.textGray} />
                <span className={classes.sliderNav}>Profile</span>
              </div>
              <div className={`${classes.alignItemsCenter} ${classes.mt30}`}>
                <FiLogOut className={classes.textGray}/>
                <div className={classes.sliderNav}>Log Out</div>
              </div>
            </div>
          </div>
        </List>
      </Drawer>
    </div>
  );
}
export default NavMenuDraw;