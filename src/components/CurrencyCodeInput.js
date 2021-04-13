import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100ch',
      },
    },
    selectDropdown: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
  }));

export default function CurrencyCodeInput(props) {
    const {
        cryptoCode,
        onChangeCryptoCode,
      } = props
    const classes = useStyles();
    return (
        <div>
        <NativeSelect
        data-testid="select-option-BTC"
          className={classes.selectDropdown}
          value={cryptoCode}
          name="cryptocode"
          onChange={onChangeCryptoCode}
        >
          <option  value="" disabled>
            Select Cryptocurrency
          </option>
          <option  value="BTC">BTC</option>
          <option value="BNB">BNB</option>
          <option value="ETH">ETH</option>
        </NativeSelect>
        </div>
    )
}
