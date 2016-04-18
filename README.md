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

## Using the function with object array

Sometime you may use the data based on date/time, you can call `exponentialMovingAVGWithObject` function to calculate EMA. The data object format is `{ date:NO_FIX_DATE_FORMAT, data:?, ema:? }`. Output from calculate will assign to `Array[index].ema`.
```
<!DOCTYPE html>
<html>	
	<head>		
		<meta charset="UTF-8">		
		<title>Test</title>
		<script src="js/maths.js"></script>
		<script>
			var prices = [
				{date:'2010-03-24', data:22.27, ema:null}, 
				{date:'2010-03-25', data:22.19, ema:null}, 
				{date:'2010-03-26', data:22.08, ema:null}, 
				{date:'2010-03-29', data:22.17, ema:null}, 
				{date:'2010-03-30', data:22.18, ema:null}, 
				{date:'2010-03-31', data:22.13, ema:null}, 
				{date:'2010-04-01', data:22.23, ema:null}, 
				{date:'2010-04-05', data:22.43, ema:null}, 
				{date:'2010-04-06', data:22.24, ema:null}, 
				{date:'2010-04-07', data:22.29, ema:null}, 
				{date:'2010-04-08', data:22.15, ema:null}, 
				{date:'2010-04-09', data:22.39, ema:null}, 
				{date:'2010-04-12', data:22.38, ema:null}, 
				{date:'2010-04-13', data:22.61, ema:null}, 
				{date:'2010-04-14', data:23.36, ema:null}, 
				{date:'2010-04-15', data:24.05, ema:null}, 
				{date:'2010-04-16', data:23.75, ema:null}, 
				{date:'2010-04-19', data:23.83, ema:null}, 
				{date:'2010-04-20', data:23.95, ema:null}, 
				{date:'2010-04-21', data:23.63, ema:null}, 
				{date:'2010-04-22', data:23.82, ema:null}, 
				{date:'2010-04-23', data:23.87, ema:null}, 
				{date:'2010-04-26', data:23.65, ema:null}, 
				{date:'2010-04-27', data:23.19, ema:null}, 
				{date:'2010-04-28', data:23.10, ema:null}, 
				{date:'2010-04-29', data:23.33, ema:null}, 
				{date:'2010-04-30', data:22.68, ema:null}, 
				{date:'2010-05-03', data:23.10, ema:null}, 
				{date:'2010-05-04', data:22.40, ema:null}, 
				{date:'2010-05-05', data:22.17, ema:null}
			];
			
			exponentialMovingAVG(prices, 29, 10);
			console.log(prices);
		</script>
	</head>	
	<body>		
	</body>
</html>
```

You can across check the result with You can see more detail from [StockCharts](http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:moving_averages)

## Note

 - Thank you for knowledge from [StockCharts](http://stockcharts.com/school/doku.php?id=chart_school) and [Investopedia](http://www.investopedia.com/university/stocks/). You can see more detail from their webside.
 - EMA method need to use SMA method to calculate the data, you can get SMA method from [sma.js](https://github.com/patharanordev/Simple-Moving-Average) 
