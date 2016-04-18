var exponentialMovingAVG= function(dataObjArray, focusPriceIndex, timePeriods){
	var result = false;

	try {
		// Smoothing factor
		var alpha = parseFloat(2.0 / (1 + timePeriods));

		if(focusPriceIndex < dataObjArray.length){
			if(focusPriceIndex > timePeriods-1){
				if(focusPriceIndex-1 > -1){

					exponentialMovingAVG(dataObjArray, (focusPriceIndex-1), timePeriods);
					//console.log('prevEMA#' + (focusPriceIndex-1) + ' : ' + dataObjArray[focusPriceIndex-1].ema);

					dataObjArray[focusPriceIndex].ema = (dataObjArray[focusPriceIndex].data * alpha) + (dataObjArray[focusPriceIndex-1].ema * (1 - alpha));
					//console.log('EMA ' + dataObjArray[focusPriceIndex].date + ' : ' + dataObjArray[focusPriceIndex].ema);
					focusPriceIndex -= 1;
				}
			} else if(focusPriceIndex == timePeriods - 1){
				var sma = simpleMovingAVG(dataObjArray, timePeriods);

				if(sma!=false) {
					dataObjArray[focusPriceIndex].ema = sma;
					result = sma;
				} else {
					dataObjArray[focusPriceIndex].ema = 0;
				}
			} 
		}
	} catch(err) {
		result = false;
		console.log("EMA Error : " + err);
	}

	return result;
};
