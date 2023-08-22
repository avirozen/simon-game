function showUserList () {
    for (let value of user_list) {
        if (value == 0) {
            drawA()
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (value == 1) {
            drawB()
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
}
function addComplist () {
    comp_list.push(randint(0, 1))
    showCompList()
}
function drawA () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
        `)
    user_list.push(0)
}
input.onButtonPressed(Button.A, function () {
    drawA()
})
function drawB () {
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # #
        # . . . #
        # # # # .
        `)
    user_list.push(1)
}
input.onButtonPressed(Button.AB, function () {
    mistake = false
    for (let index = 0; index <= comp_list.length; index++) {
        if (comp_list[index] != user_list[index]) {
            mistake = true
        }
    }
    if (mistake) {
        basic.showIcon(IconNames.No)
        user_list = []
        showCompList()
    }
    if (!(mistake)) {
        basic.showIcon(IconNames.Yes)
        user_list = []
        addComplist()
    }
})
input.onButtonPressed(Button.B, function () {
    drawB()
})
function showCompList () {
    for (let value of comp_list) {
        if (value == 0) {
            drawA()
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (value == 1) {
            drawB()
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
    basic.showIcon(IconNames.Heart)
}
let mistake = false
let user_list: number[] = []
let comp_list: number[] = []
comp_list = []
addComplist()
user_list = []
basic.forever(function () {
	
})
