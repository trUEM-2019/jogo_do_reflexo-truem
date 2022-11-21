input.onButtonPressed(Button.A, function () {
    if (jogar) {
        jogar = false
        if (UD) {
            basic.showArrow(ArrowNames.West)
            Player1 += 1
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        } else {
            basic.showArrow(ArrowNames.West)
            Player1 += -1
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (jogar) {
        jogar = false
        if (UD) {
            basic.showArrow(ArrowNames.East)
            Player2 += 1
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        } else {
            basic.showArrow(ArrowNames.East)
            Player2 += -1
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
        }
    }
})
let UD = false
let jogar = false
jogar = false
let Player1 = 0
let Player2 = 0
basic.showIcon(IconNames.Yes)
basic.pause(2000)
basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.clearScreen()
        basic.showString("P1")
        basic.showNumber(Player1)
        basic.pause(2000)
        basic.clearScreen()
        basic.showString("P2")
        basic.showNumber(Player2)
        basic.pause(2000)
    } else {
        basic.clearScreen()
        basic.pause(randint(1000, 5000))
        UD = Math.randomBoolean()
        jogar = true
        if (UD) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
        basic.pause(2000)
    }
})
