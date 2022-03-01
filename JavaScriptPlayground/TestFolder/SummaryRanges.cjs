exports.sumRanges = function (intArray) {

    if (!Array.isArray(intArray))
        throw `input is not an array (${typeof intArray})`;

    let toReturn = new Array();

    let currentValue = null;
    let firstValue = null;

    // needs to be a function callback - not a lambda
    // doesn't need to encompass all args in callback
    intArray.forEach(
        function (value, index) {

            if (index === 0) {
                currentValue = value;
                firstValue = value;
            }
            else if (currentValue - value === -1) // 1 - 2 === -1
                currentValue = value;
            else {

                toReturn.push(
                    currentValue === firstValue ? 
                        // same value
                        `[${firstValue}]`
                        :
                        // range
                        `[${firstValue} -> ${currentValue}]`
                )

                // update step
                currentValue = value;
                firstValue = value;

            }

            // last value
            if (index === this.length - 1)
                toReturn.push(
                    currentValue === firstValue ?
                        // last value is not part of range
                        `[${value}]`
                        :
                        // last value is part of range (currentValue is equal to it)
                        `[${firstValue} -> ${currentValue}]`
                )

        },
        intArray
    );

    console.log(toReturn);

    return toReturn;

}