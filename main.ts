datalogger.setColumnTitles(
"X",
"-1023 -666",
"-666 -333",
"-333 -5",
"-5 5",
"5 333",
"333 666",
"666"
)
basic.forever(function () {
    if (input.acceleration(Dimension.X) >= -1023 && input.acceleration(Dimension.X) < -666) {
        datalogger.log(datalogger.createCV("X", input.acceleration(Dimension.X)))
        datalogger.log(datalogger.createCV("-1023 -666", "S"))
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
    }
    if (input.acceleration(Dimension.X) >= -666 && input.acceleration(Dimension.X) < -333) {
        datalogger.log(datalogger.createCV("X", input.acceleration(Dimension.X)))
        datalogger.log(datalogger.createCV("-666 -333", "S"))
        basic.showLeds(`
            . # . . .
            . . # . .
            . . . # .
            . . # . .
            . # . . .
            `)
    }
    if (input.acceleration(Dimension.X) >= -333 && input.acceleration(Dimension.X) < -5) {
        datalogger.log(datalogger.createCV("X", input.acceleration(Dimension.X)))
        datalogger.log(datalogger.createCV("-333 -5", "S"))
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . # . . .
            . . . . .
            `)
    }
    if (input.acceleration(Dimension.X) >= -5 && input.acceleration(Dimension.X) <= 5) {
        datalogger.log(datalogger.createCV("X", input.acceleration(Dimension.X)))
        datalogger.log(datalogger.createCV("-5 5", "S"))
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # . # .
            . . . . .
            `)
    }
    if (input.acceleration(Dimension.X) > 5 && input.acceleration(Dimension.X) <= 333) {
        datalogger.log(datalogger.createCV("X", input.acceleration(Dimension.X)))
        datalogger.log(datalogger.createCV("5 333", "S"))
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            . . . . #
            . . . . .
            `)
    }
    if (input.acceleration(Dimension.X) > 333 && input.acceleration(Dimension.X) <= 666) {
        datalogger.log(datalogger.createCV("X", input.acceleration(Dimension.X)))
        datalogger.log(datalogger.createCV("333 666", "S"))
        basic.showLeds(`
            . . . # .
            . . # . .
            . # . . .
            . . # . .
            . . . # .
            `)
    }
    if (input.acceleration(Dimension.X) > 666) {
        datalogger.log(datalogger.createCV("X", input.acceleration(Dimension.X)))
        datalogger.log(datalogger.createCV("666", "S"))
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
    }
})
