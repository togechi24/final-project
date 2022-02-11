function shipSetup () {
    ship = sprites.create(img`
        .cc...........cc.
        cccc...a.a...cccc
        caac...a.a...caac
        caac..aa.aa..caac
        cacc...a.a...ccac
        ccac...a.a...cacc
        ccacc..a.a..ccacc
        .ccac69d6d96cacc.
        .ccac9666669cacc.
        ccccc6969696ccccc
        .cccc6696966cccc.
        ...ac996c699ca...
        ..a..ccccccc..a..
        ...a..aacaa..a...
        ....acaacaaca....
        ....ccaa.aacc....
        .......c.c.......
        .................
        `, SpriteKind.Player)
    controller.moveSprite(ship, 100, 100)
    ship.setStayInScreen(true)
}
let ship: Sprite = null
shipSetup()
let enemies = [0, 1]
effects.starField.startScreenEffect()
