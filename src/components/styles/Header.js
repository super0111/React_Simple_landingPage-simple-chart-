import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    header : {
        display: "flex",
        justifyContent: "space-between",
    },
    headerLeft : {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        width: "60%",
      },
    sliderBar : {
    display: "none",
    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        display: "block",
        color: "black",
        fontSize: "14px",
        margin: "0 10px 0 -15px"
        },
    },
    alignItemsCenter : {
        display: 'flex',
        alignItems: "center",
    },
    headerStats : {
        color: "rgb(33 33 33)",
        fontSize: 16,
        fontWeight: 700,
        marginRight: 5,
        ['@media (max-width:601px)']: { // eslint-disable-line no-useless-computed-key
          display: "none"
        }
    },
    headerIcon : {
    fontSize : 14,
    ['@media (max-width:601px)']: { // eslint-disable-line no-useless-computed-key
        fontSize : 25,
        marginRight: 10
        }
    },
    searchIcon : {
        fontSize: 20,
      },
    headerRight : {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        width: "36%",
        ['@media (max-width:894px)']: { // eslint-disable-line no-useless-computed-key
            width: "40%",
        },
        ['@media (max-width:823px)']: { // eslint-disable-line no-useless-computed-key
            width: "45%",
        },
        ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
            width: "65%",
        },
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
        },
    },
    dFlex : {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    allowIcon : {
        fontSize: 28,
        color: "rgb(110, 113, 116)",
        margin: "0 5px",
    },
    iconActive : {
        color: "rgb(59, 58, 58)!important",
      },
    notifyIcon : {
        fontSize: 20,
        marginRight: 5,
    },
    
}));
export default useStyles;