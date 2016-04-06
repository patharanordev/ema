
var exponentialMovingAVG = function(dataArray, focusPriceIndex, timePeriods, resultArr){
	var result = -1;

	try {
		// Smoothing factor
		var alpha = parseFloat(2.0 / (1 + timePeriods));

		if(focusPriceIndex < dataArray.length){
			if(focusPriceIndex > timePeriods-1){
				if(focusPriceIndex-1 > -1){
					var prevEMA = 0;
					prevEMA = this.exponentialMovingAVG(dataArray, (focusPriceIndex-1), timePeriods, resultArr);

					if(prevEMA > -1){
						result = (dataArray[focusPriceIndex] * alpha) + (prevEMA * (1 - alpha));

						if(resultArr instanceof Array)
							resultArr.push(result);

						focusPriceIndex -= 1;
					} else {
						result = -1;
					}
				}
			} else if(focusPriceIndex == timePeriods - 1){
				result = this.simpleMovingAVG(dataArray, timePeriods);

				if(resultArr instanceof Array) {
					for(var i=0;i<focusPriceIndex;i++){
						resultArr.push(0);
					}

					resultArr.push(result);
				}
			} 
		}
	} catch(err) {
		result = -1;
		console.log("EMA Error : " + err);
	}

	return result;
};