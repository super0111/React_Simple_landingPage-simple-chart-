import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    customChart : {
        backgroundColor: "rgb(255, 255, 220)",
        padding: 10,
        marginTop: 10,
      },
      justifyContentBetween : {
        display: "flex",
        justifyContent: "space-between",
      },
      dFlex : {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      graphType : {
        color: "rgb(78, 79, 81)",
        fontSize: 15,
      },
      calendarText : {
        fontSize: 13,
        fontWeight: 500,
        marginLeft: 5,
      },
      calendarBg : {
        display: "flex",
        justifyContent: 'space-Between',
        alignItems: "center",
        backgroundColor: "rgb(233, 233, 213)",
        padding: 3,
        borderRadius: 3,
      },
      canvas : {
        width: "500px!important",
        height: "150px!important",
        ['@media (max-width:800px)']: { // eslint-disable-line no-useless-computed-key
            display: "block",
            height: 150,
            width: "400px!important",
        },
        ['@media (max-width:640px)']: { // eslint-disable-line no-useless-computed-key
          display: "block",
          height: 150,
          width: "360px!important",
        },
        ['@media (max-width:480px)']: { // eslint-disable-line no-useless-computed-key
          display: "block",
          height: 140,
          width: "330px!important",
        },
        ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key
          display: "block",
          height: 140,
          width: "280px!important",
        },
        ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
          display: "block",
          height: 120,
          width: "230px!important",
        },
        ['@media (max-width:590px)']: { // eslint-disable-line no-useless-computed-key
          // display: "none!important",
        },
      },
}));
export default useStyles;