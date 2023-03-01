function removeExternalBrackets(inputString) {
    let counter = 0; // Ccounter of the open brackets still not matched
    inputString = inputString.trim();
    /* 
    * Check if the input is a pathological input counting the number of open and closed brackets.
    * If the number of opening and closing brackets is not the same, the input is considered pathological.
    * If the first bracket encountered is a closing bracket, the input is considered pathological.
    * If the input is a pathological input, the function returns the input string.
    */
    for(let i = 0; i < inputString.length; i++) {
        inputString.charAt(i) === "(" ? counter++ : counter += 0;
        inputString.charAt(i) === ")" ? counter-- : counter += 0;

        if(counter < 0 ){ // First bracket encountered is a closng brackets
            return inputString;
        }
    }

    if(counter) { // The number of opening and closing brackets is not the same
        return inputString;
    }

    /*
    * Iterates the string to remove external matching brackets 
    * until one of the first and last characters is a string.
    */
    while (inputString.startsWith("(") && inputString.endsWith(")")) { 

        inputString = inputString.slice(1, -1); // Remove external brackets
    }

    /*
    * Iterates over each character in the string, if at some point the number of closing brackets
    * exceeds the number of opening brackets, adds again the removed outer brackets.
    * This is done for examples like the following: "(ab)(ab)" => "ab)(ab" => "(ab)(ab)"
    */
    counter = 0;
    for(let i = 0; i < inputString.length; i++) {
        inputString.charAt(i) === "(" ? counter++ : counter += 0; // Keep trak of the n. of open brackets
        
        if (inputString.charAt(i) === ")") {

            if(counter) {
                counter--;
            }
            else {
                return "(" + inputString + ")";
            }
        }
    }

    return inputString;    
}

function repairBrackets(inputString) {
    let counter = 0; // Counter of the open brackets still not matched

    inputString = inputString.trim();
    let tempString = inputString; // Temporary variable to work with input

    /*
    * Counts the number of open and closed brackets.
    * During iteration, as soon as the number of closing brackets is greater than the number of opening brackets,
    * add an opening bracket to the first character of the string.
    * At the end of the iteration, if the number of opening brackets is greater than the number of closing brackets,
    * add as many closing brackets as the difference counted, at the end of the string.
    */
    for(let i = 0; i < inputString.length; i++) {
        inputString.charAt(i) === "(" ? counter++ : counter += 0;
        inputString.charAt(i) === ")" ? counter-- : counter += 0;

        if (counter < 0) {
            tempString = "(" + tempString;
            counter++;
        }
    }
    inputString = tempString;
    if(counter > 0 ) {
        for (counter; counter > 0; counter--) {
            inputString = inputString + ")";            
        }
    }

    /*
    * Iterates the string to remove external matching brackets 
    * until one of the first and last characters is a string.
    */
    while (inputString.startsWith("(") && inputString.endsWith(")")) { 

        inputString = inputString.slice(1, -1); //Remove external brackets
    }

    /*
    * Iterates over each character in the string, if at some point the number of closing brackets
    * exceeds the number of opening brackets, adds again the removed outer brackets.
    * This is done for examples like the following: "(ab)(ab)" => "ab)(ab" => "(ab)(ab)"
    */
    counter = 0;
    for(let i = 0; i < inputString.length; i++) {
        inputString.charAt(i) === "(" ? counter++ : counter += 0; //keep trak of the n. of open brackets
        
        if (inputString.charAt(i) === ")") {

            if(counter) {
                counter--;
            }
            else {
                return "(" + inputString + ")";
            }
        }
    }

    return inputString;    
}