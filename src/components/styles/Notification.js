import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    dFlexColumn : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      },
      divider9 : {
        marginTop: "0.25rem!important",
        marginBottom: '1rem!important',
      },
      justifyEnd : {
        display: "flex",
        justifyContent: "flex-end",
      },
      yellowField : {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1.5rem!important",
        backgroundColor: "rgb(245, 235, 222)",
        borderRadius: 50,
        width: "80%",
        padding: "5px 10px",
      },
      dFlex : {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      yellowFieldIcon : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 35,
        height: 35,
        background: "black",
        borderRadius: "50%",
        marginRight: 5,
      },
      textWhite : {
        color: "white",
      },
      mt30 : {
        marginTop: 30,
      },
      notifyName : {
        fontSize: "14px!important",
      },
      notifyTime : {
        fontSize: "12px!important",
      },
      pinkFieldIcon : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 35,
        height: 35,
        background: "black",
        borderRadius: "50%",
        marginRight: 5,
      },
      rightPink : {
        backgroundColor: "rgb(243, 243, 243)",
      },
      divider10 : {
        marginTop: "1rem!important",
        marginBottom: '1rem!important',
      },
      divider11 : {
        marginTop: "1rem!important",
        marginBottom: '1rem!important',
      },
      pinkField : {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem!important",
        backgroundColor: "rgb(239, 226, 241)",
        borderRadius: 50,
        width: "80%",
        padding: "5px 10px",
      },
      rightYellow : {
        backgroundColor: "rgb(240, 234, 234)",
      },
}));
export default useStyles;