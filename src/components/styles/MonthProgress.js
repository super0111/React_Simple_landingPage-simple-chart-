import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    homeBodyTitle : {
        fontSize: 20,
        color: "rgb(27 27 27)",
        marginBottom: 15,
        fontWeight: 700,
        marginRight: 20,
      },
      homeBodyGraph : {
        display: "flex",
        justifyContent: "space-between!important",
      },
      number: {
        fontSize: 19,
        color: "rgb(27 27 27)",
        fontWeight: 700,
        ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
          fontSize: 15,
        }
      },
      numberText : {
        color: "rgb(78, 79, 81)",
        fontSize: 15,
        ['@media (max-width:555px)']: { // eslint-disable-line no-useless-computed-key
          display: "none"
        }
      },
      justifyContentBetween : {
        display: "flex",
        justifyContent: "space-between",
      },
}));
export default useStyles;