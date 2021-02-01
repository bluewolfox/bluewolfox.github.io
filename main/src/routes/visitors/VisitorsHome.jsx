import React, { useState } from 'react'

import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  wrap: {
    display: "flex",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    paddingBottom: 20
  },
  subTitle: {
    textAlign: "center"
  },
  subWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
  }
})

const useInput = () => {
  const [val, setVal] = useState("")
  const onChangeVal = (event) => {
    const { target: { value } } = event
    setVal(value)
  }

  return { val, setVal, onChangeVal }
}

const useCheck = () => {
  const [checked, setChecked] = useState(false)
  const onChangeCheck = () => {
    setChecked(!checked);
  }
  return { checked, onChangeCheck }
}

const VisitorsHome = () => {
  const classes = useStyles();
  const { val, setVal, onChangeVal } = useInput();
  const { checked, onChangeCheck } = useCheck();
  const onSubmit = (e) => {
    e.preventDefault();
    setVal("")
  }

  return (
    <div className={classes.wrap}>
      <form onSubmit={onSubmit}>
        <h1 className={classes.title}>방문 목적이 무엇인가요?</h1>
        <div className={classes.subWrap}>
          <p>저에게 따로 말씀하시고 싶으시면 오른쪽 스위치버튼을 눌러주세요</p>
          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={onChangeCheck}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label={!!checked ? "비공개적!" : "공개적!"}
          />
        </div>
        <div className={classes.subWrap}>
          <TextField fullWidth variant="outlined" value={val} onChange={onChangeVal} />
          <Button fullWidth onClick={onSubmit}>접수</Button>
        </div>
      </form>
    </div>
  )
}

export default VisitorsHome;