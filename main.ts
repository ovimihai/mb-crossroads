input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(0)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(90)
})
let tren = 0
basic.showIcon(IconNames.Scissors)
basic.forever(function () {
    tren = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (tren < 5) {
        basic.showIcon(IconNames.Rollerskate)
        servos.P0.setAngle(0)
    } else {
        basic.showIcon(IconNames.No)
        servos.P0.setAngle(90)
    }
})
