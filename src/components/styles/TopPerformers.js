import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    topPerform : {
        width: "100%!important",
        marginTop: "1.5rem!important",
        ['@media (max-width:430px)']: { // eslint-disable-line no-useless-computed-key
          marginTop: "0.01rem!important",
        }
      },
      topPerformsTitle : {
        fontSize: 18,
        color: "rgb(49, 48, 48)",
        margin: "0 0 25px 0",
        fontWeight: 700,
      },
      topPerformsItem : {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1.5rem!important",
          marginBottom: "1.5rem!important",
      },
      topPerformersImg : {
        width: 35,
        height: 35,
        borderRadius: 10,
      },
      justifyContentStart : {
        display: "flex",
        flexDirection : "column",
        justifyContent: "flex-start",
      },
      topPerformsItemTitle : {
        fontWeight: 700,
        ['@media (max-width:430px)']: { // eslint-disable-line no-useless-computed-key
          fontSize: "13px"
        }
      },
      topPerformsItemText : {
        color: "rgb(78, 79, 81)",
        fontSize: "14px!important",
        ['@media (max-width:430px)']: { // eslint-disable-line no-useless-computed-key
          fontSize: "12px!important"
        }
      },
      Progress : {
        fontSize: "16px!important",
        color: "black!important",
        ['@media (max-width:430px)']: { // eslint-disable-line no-useless-computed-key
          fontSize: "14px!important"
        }
      },
      homeBodyUpgrade : {
        width: 200,
        backgroundColor: "black",
        borderRadius: 20,
        marginTop: "20px !important",
        marginBottom: "20px !important",
        marginLeft: 20,
      },
      textWhite : {
        color: "white",
      },
      upgradeTitle : {
        fontSize: 16,
        margin: "10px 0 20px 0",
      },
      upgradetext : {
        color: "rgb(78, 79, 81)",
        fontSize: 15,
      },
      justifyEnd : {
          display: "flex",
          justifyContent: "flex-end",
      },
      nowClass : {
        borderRadius: "50%",
        marginTop: 38,
        marginRight: 7,
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
          marginRight: 20,
        },
      },
      nowClassImg : {
        width: 70,
        height: 70,
      },
}));
export default useStyles;