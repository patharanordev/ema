# Exponential Moving Average


Exponential moving averages reduce the lag by applying more weight to recent prices. The weighting applied to the most recent price depends on the number of periods in the moving average. There are three steps to calculating an exponential moving average. First, calculate the simple moving average. An exponential moving average (EMA) has to start somewhere so a simple moving average is used as the previous period's EMA in the first calculation. Second, calculate the weighting multiplier. Third, calculate the exponential moving average. 

The formula below is for a 10-day EMA:
```
SMA: 10 period sum / 10 
Multiplier: (2 / (Time periods + 1) ) = (2 / (10 + 1) ) = 0.1818 (18.18%)
EMA: {Close - EMA(previous day)} x multiplier + EMA(previous day). 
```

A 10-period exponential moving average applies an 18.18% weighting to the most recent price. A 10-period EMA can also be called an 18.18% EMA. A 20-period EMA applies a 9.52% weighing to the most recent price (2/(20+1) = .0952). Notice that the weighting for the shorter time period is more than the weighting for the longer time period. In fact, the weighting drops by half every time the moving average period doubles. 

If you want to us a specific percentage for an EMA, you can use this formula to convert it to time periods and then enter that value as the EMA's parameter:
```
Time Period = (2 / Percentage) - 1
3% Example:  Time Period = (2 / 0.03) - 1 = 65.67 time periods
```

## Using the function with array

An example below, I added `exponentialMovingAVG` function to maths.js. So you will see I call it via the file.
```
var maths = require('./func/maths.js');

var prices = [
	22.27, 22.19, 22.08, 22.17, 22.18,
	22.13, 22.23, 22.43, 22.24, 22.29,
	22.15, 22.39, 22.38, 22.61, 23.36,
	24.05, 23.75, 23.83, 23.95, 23.63,
	23.82, 23.87, 23.65, 23.19, 23.10,
	23.33, 22.68, 23.10, 22.40, 22.17
];

var result = [];
maths.exponentialMovingAVG(prices, 29, 10, result);

console.log(result);
```

You can across check the result with You can see more detail from [StockCharts](http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:moving_averages)

## Using the function with object array

An example below, I added `exponentialMovingAVGWithObject` function to maths.js. So you will see I call it via the file.
```
<!DOCTYPE html>
<html>	
	<head>		
		<meta charset="UTF-8">		
		<title>Test</title>
		<script src="js/maths.js"></script>
		<script>
			var prices = [
				{date:0, data:22.27, ema:null}, 
				{date:0, data:22.19, ema:null}, 
				{date:0, data:22.08, ema:null}, 
				{date:0, data:22.17, ema:null}, 
				{date:0, data:22.18, ema:null}, 
				{date:0, data:22.13, ema:null}, 
				{date:0, data:22.23, ema:null}, 
				{date:0, data:22.43, ema:null}, 
				{date:0, data:22.24, ema:null}, 
				{date:0, data:22.29, ema:null}, 
				{date:0, data:22.15, ema:null}, 
				{date:0, data:22.39, ema:null}, 
				{date:0, data:22.38, ema:null}, 
				{date:0, data:22.61, ema:null}, 
				{date:0, data:23.36, ema:null}, 
				{date:0, data:24.05, ema:null}, 
				{date:0, data:23.75, ema:null}, 
				{date:0, data:23.83, ema:null}, 
				{date:0, data:23.95, ema:null}, 
				{date:0, data:23.63, ema:null}, 
				{date:0, data:23.82, ema:null}, 
				{date:0, data:23.87, ema:null}, 
				{date:0, data:23.65, ema:null}, 
				{date:0, data:23.19, ema:null}, 
				{date:0, data:23.10, ema:null}, 
				{date:0, data:23.33, ema:null}, 
				{date:0, data:22.68, ema:null}, 
				{date:0, data:23.10, ema:null}, 
				{date:0, data:22.40, ema:null}, 
				{date:0, data:22.17, ema:null}
			];
			
			exponentialMovingAVGWithObject(prices, 29, 10);
			console.log(prices);
		</script>
	</head>	
	<body>		
	</body>
</html>
```

## Note

 - Thank you for knowledge from [StockCharts](http://stockcharts.com/school/doku.php?id=chart_school) and [Investopedia](http://www.investopedia.com/university/stocks/). You can see more detail from their webside.
 - EMA method need to use SMA method to calculate the data, you can get SMA method from [sma.js](https://github.com/patharanordev/Simple-Moving-Average) 
