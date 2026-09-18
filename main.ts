radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8) {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(8)
})
