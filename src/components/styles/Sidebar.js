import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    slider : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        backgroundColor: "black",
        borderRadius: "30px",
        margin: "-5px",
        height: "678px",
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            height: 1485,
          },
        ['@media (max-width:985px)']: { // eslint-disable-line no-useless-computed-key
            height: 1485,
        },
        ['@media (max-width:895px)']: { // eslint-disable-line no-useless-computed-key
            height: 1485,
        },
        ['@media (max-width:894px)']: { // eslint-disable-line no-useless-computed-key
          height: 1485,
        },
        ['@media (max-width:823px)']: { // eslint-disable-line no-useless-computed-key
          height: 1512,
        },
        ['@media (max-width:689px)']: { // eslint-disable-line no-useless-computed-key
            height: 1484,
        },
        ['@media (max-width:702px)']: { // eslint-disable-line no-useless-computed-key
          height: 1512,
        },
        ['@media (max-width:668px)']: { // eslint-disable-line no-useless-computed-key
            height: 1512,
        },
        ['@media (max-width:644px)']: { // eslint-disable-line no-useless-computed-key
          height: 1536,
      },
        ['@media (max-width:601px)']: { // eslint-disable-line no-useless-computed-key
          display: "none"
        }
      },
      dFlexColumn : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      },
      textGray: {
        color: "rgb(97 97 97)",
      },
      textWhite : {
        color: "white!important",
      },
      sliderTitle : {
        margin: "40px 0",
        fontSize: "18px",
        color: "white",
        fontWeight: 500,
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
      position : {
        position: "absolute",
        bottom: "50px",
      },
}));
export default useStyles;