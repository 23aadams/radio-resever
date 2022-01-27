radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(signal, -95, -42, 0, 9),
    9
    )
    basic.pause(200)
    music.playTone(392, music.beat(BeatFraction.Half))
})
let signal = 0
radio.setGroup(1)
