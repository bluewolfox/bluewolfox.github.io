import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  layout: {
    display: "flex",
    width: "100%",
    height: "100vh",
    position:"relative"
  }
})

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      {props.children}
    </div>
  )
}

export default Layout