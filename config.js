// Everything is explained here:
// https://github.com/askmike/gekko/blob/master/docs/Configuring_gekko.md

var config = {};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                           NORMAL ZONE
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Gekko currently only supports Exponential Moving Averages
config.tradingMethod = 'Exponential Moving Averages';

// Exponential Moving Averages settings:
config.EMA = {
  // timeframe per candle
  interval: 60, // in minutes
  // EMA weight (α)
  // the higher the weight, the more smooth (and delayed) the line
  short: 12,
  long: 34,
  // amount of candles to remember and base initial EMAs on
  candles: 200,
  // the difference between the EMAs (to act as triggers)
  sellTreshold: -0.15,
  buyTreshold: 0.15
};

// Monitor the live market
config.normal = {
  enabled: true,
  exchange: 'MtGox', // 'MtGox', 'BTCe', 'Bitstamp' or 'cexio'
  currency: 'USD',
  asset: 'BTC',
  tradingEnabled: true,
  key: '7fbd4d69-bd75-4d2b-8d6a-16a9022aad6c',
  secret: 'nVmAJhxVkVronRPw3VmWl5yxUeU0kO4ErU7tzvc1IqyM9VF950C1nDdRY/b3ppw7BKgiw9XdGo5D/eDMHLIl1g==',
  username: 0, // your username, only fill in when using bitstamp or cexio
}

// want Gekko to send a mail on buy or sell advice?
config.mail = {
  enabled: false,
  sendMailOnStart: true,
  email: '', // only works for Gmail or Google apps accounts at the moment

  // You don't have to set your password here, if you leave it blank we will ask it
  // when Gekko's starts.
  //
  // NOTE: Gekko is an open source project < https://github.com/askmike/gekko >,
  // make sure you looked at the code or trust the maintainer of this bot when you
  // fill in your email and password.
  //
  // WARNING: If you have NOT downloaded Gekko from the github page above we CANNOT
  // garantuee that your email address & password are safe!
  password: ''
}

// do you want Gekko to calculate the profit of its own advice?
config.profitCalculator = {
  enabled: true,
  // report the profit in the currency or the asset?
  reportInCurrency: true,
  // start balance, on what the current balance is compared with
  simulationBalance: {
    // these are in the unit types configured in the watcher.
    asset: 0.32936254,
    currency: 1.000000,
  },
  // only want report after a sell? set to `false`.
  verbose: true,
  // how much fee in % does each trade cost?
  fee: 0.6
}

config.simulationBalance = {
    // these are in the unit types configured in the watcher.
    asset: 0.32936254,
    currency: 1.000000
  }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                           ADVANCED ZONE
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Backtesting strategies against historical data
//
// Test a strategy on historical data
//
// Read here: https://github.com/askmike/gekko/blob/master/docs/Backtesting.md
//
//          NOTE: THIS FEATURE HAS NOT BEEN PROPERELY TESTED YET, IT IS NOT
//                ADVISED TO MAKE REAL WORLD DECISIONS BASED ON THE RESULTS
//                UNTIL THE CODE HAS BEEN PROVED SOLID.
config.backtest = {
  candleFile: 'mtgox-hourly-candles.csv',
  from: 0,
  to: 100
}

// For when you want to monitor a market but want to act (trade) on a different one
// (or different ones).
//
// Check: https://github.com/askmike/gekko/blob/master/docs/Configuring_gekko.md

// monitor what market?
config.watch = {
  exchange: 'MtGox',
  currency: 'USD',
  asset: 'BTC'
}

// real trading
config.traders = [
  {
    exchange: 'MtGox',
    key: '7fbd4d69-bd75-4d2b-8d6a-16a9022aad6c',
    secret: 'nVmAJhxVkVronRPw3VmWl5yxUeU0kO4ErU7tzvc1IqyM9VF950C1nDdRY/b3ppw7BKgiw9XdGo5D/eDMHLIl1g==',
    currency: 'USD',
    asset: 'BTC',
    enabled: false
  },
  {
    exchange: 'BTCe',
    key: '',
    secret: '',
    currency: 'USD',
    asset: 'BTC',
    enabled: false
  },
  {
    exchange: 'Bitstamp',
    user: '',
    password: '',
    currency: 'USD',
    asset: 'BTC',
    enabled: false
  },
  {
    exchange: 'cex.io',
    key: '',
    secret: '',
    currency: 'BTC',
    asset: 'GHS',
    enabled: false
  }
];

config.debug = true; // for additional logging / debugging

module.exports = config;

