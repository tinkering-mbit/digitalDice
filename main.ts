input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(Math.randomRange(1, 6))
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
