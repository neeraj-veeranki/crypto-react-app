import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Header from './components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CurrencyCodeInput from './components/CurrencyCodeInput';
import CurrencyList from './components/CurrencyList';
import AlertComponent from './components/Alert';
import ApiConfig from './services/ApiConfig';


const BASE_URL = ApiConfig.apiBaseUrl;
const api_key = ApiConfig.apiKey;
const targetCurrencies =  ApiConfig.targetCurrencies;

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const style = useStyles;
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [showCurrencyData, setShowCurrencyData] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cryptoCode, setcryptoCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorType, setErrorType] = useState('');
  const [currencyData, setcurrencyData] = useState([{}]);


  function handleCryptoCodeChange(e) {
    setBtnDisabled(false);
    setcryptoCode(e.target.value);
  }

  function processCurrencyValues(data) {
    if(data && data.error) {
      setErrorType('error');
      setErrorMessage('Currency conversion for this currency is not available now.');  
      setShowErrorMessage(true);
    } else {
    const setCurrencyData = [];
    const currency = Object.keys(data.rates);
    const quotes = Object.values(data.rates);
    currency.forEach((currencyCode, index) => {
      setCurrencyData.push({
        'currency': currencyCode,
        'quote': quotes[index]
      })
    });
    setcurrencyData(setCurrencyData);
    setShowCurrencyData(true);
  }
  }
  async function getQuotes() {
    setShowErrorMessage(false);
    setShowCurrencyData(false);
    const apiurl = BASE_URL+`/latest?access_key=${api_key}&symbols=${targetCurrencies}&base=${cryptoCode}&amount=1`
    const fetchCurrencyValues = await fetch(apiurl);
    const currencyValues = await fetchCurrencyValues.json();
    processCurrencyValues(currencyValues);
  }
  return (
    <div className={style.root}>
    <Header></Header>
    <Grid  container
    spacing={8}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}>
    <Grid item xs={12}>
    <CurrencyCodeInput
    cryptoCode={cryptoCode}
    onChangeCryptoCode={handleCryptoCodeChange}
    />
    </Grid>
    <Grid
    item xs={12}
    >
    <Button data-testid="submit-btn" disabled={btnDisabled} variant="contained" color="primary" onClick={getQuotes}>
      Show Quotes
    </Button>
    </Grid>
    <Grid
    item xs={12}
    >
    {showCurrencyData ?<CurrencyList currencyData={currencyData}></CurrencyList> : ''}
    </Grid>
    <Grid
    item xs={12}
    >
    {showErrorMessage ?<AlertComponent errorMessage={errorMessage} errorType={errorType}></AlertComponent> : ''}
    </Grid>
    </Grid>
    </div>
  );
}

export default App;
