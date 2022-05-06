import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    body : {
        display: "flex!important",
        justifyContent: "center!important",
        alignItems: "center",
        padding: "1.5rem!important",
      },
      homeBody : {
        display: "flex",
          border: "10px solid black",
          borderRadius: "30px",
          width: "1050px!important",
          height: 690,
          ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
              height: "auto",
              width: "auto!important",
            },
        },
        pl30 : {
            paddingLeft: "30px",
        },
        home : {
            display: "flex",
            flexDirection: "column",
            },
        p30 : {
            padding: "20px",
          },
        divider : {
            margin: "3px 0 !important",
            color: "rgb(184, 185, 185)",
          },
        mainBody : {
            width: "60%!important",
          },
        pl10 : {
        paddingLeft: "10px",
        },
}));
export default useStyles;