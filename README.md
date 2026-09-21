# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [X] Add a weekly task goal calculator.

## Weekly Task Goals
This tool calculates weekly performance goals including bonus performance tasks. The program takes input from the user to provide data for 3 variables (userName, dailyGoal, & bonusTasks). The daily goal is multiplied by 5 and combined with the bonus data to create the weekly goal. Data validation is performed these steps and the results are put to output.

## Imperial/Metric Converter
This is a units conversion tool to convert US/Imperial units (mi, ft, in) to Metric Units (km, m, cm)
    
    ###Logic & Pseudocode
    BEGIN

    DISPLAY "Metric Converter" to screen

    LET value1 = DISPLAY "Enter a value: "


    //Select units option to be converted
    DISPLAY dropdown for units1 with options (in, ft, yd, mi, cm, m, km)

    //Select units to be displayed after conversion
    DISPLAY dropdown for units2 with options (cm, m, km, in, ft, yd, mi) " 

    // Define unit conversions
    Symbol	When You Know	Multiply By	To Find			Symbol
    in	inch		2.54		centimeter		cm
    ft	foot		30.48		centimeter		cm
    yd	yard		0.91		meter			m
    mi	mile		1.61		kilometer		km
    cm	centimeter	0.39		inch			in
    cm	centimeter	0.0328		foot			ft
    m	meter		1.09		yard			yd
    km	kilometer	0.62		mile			mi

    IF units1 === "in"
        IF units2 === "cm"
            result = value1 * 2.54
    ELSE IF units1 === "ft"
        IF units2 === "cm"
            result = value1 * 30.48
    ELSE IF units1 === "yd"
        IF units2 === "m"
            result = value1 * 0.91
    ELSE IF units1 === "mi"
        IF units2 === "km"
            result = value1 * 1.61
    ELSE IF units1 === "cm"
        IF units2 === "in"
            result = value1 * 0.39
    ELSE IF units1 === "cm"
        IF units2 === "ft"
            result = value1 * 0.0328
    ELSE IF units1 === "m"
        IF units2 === "yd"
            result = value1 * 1.09
    ELSE IF units1 === "km"
        IF units2 === "mi"
            result = value1 * 0.62
        

    //Display converted to user
    DISPLAY value1 + " " + units1 + " is " + result + " " + units2


    END