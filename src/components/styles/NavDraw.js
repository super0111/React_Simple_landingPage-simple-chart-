import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = "100%";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
    
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        background: 'none'
      },
      drawTitle : {
        marginRight : 30,
      },
      drawerPaper: {
        width: drawerWidth,
        background: '#bcd2d6;',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
      dFlex: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
      menuIcon : {
        fontSize: 25
      },
      dFlexColumn : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      },
      textWhite : {
        color: "white",
      },
      sliderTitle : {
        margin: "30px 0",
        fontSize: "20px",
        color: "white",
        fontWeight: 500,
      },
      textGray: {
        color: "rgb(97 97 97)",
      },
      sliderText : {
        fontSize: "13px",
        color: "rgb(97 97 97)",
      },
      sliderUserName : {
        fontSize: "15px",
        margin: "10px 0 2px 0",
        color: "white",
      },
      textBlack: {
        color: "black!important"
      },
      sliderImg : {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 50,
      },
      alignItemsCenter : {
        display: 'flex',
        alignItems: "center",
      },
      sliderNavMargin : {
        marginTop: "26px",
      },
      sliderNav : {
        fontSize: "15px",
        color: "rgb(97 97 97)",
        marginLeft: "10px",
      },
      mt30 : {
        margin: "30px 0",
      },
}));
export default useStyles;