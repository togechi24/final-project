namespace SpriteKind {
    export const strayBullet = SpriteKind.create()
}
function bossAttacks () {
    for (let index = 0; index <= 4; index++) {
        bossProjectilePattern(60, 1)
    }
}
// Chances of creating jellyfish enemies or not
function createEnemy1 (chance: number) {
    if (chance <= 25) {
        createJellyfish()
    }
}
// The ship's main attack or projectile with a cooldown
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (canShoot) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 9 . . . . . . . 
            . . . . . . . 9 9 9 . . . . . . 
            . . . . . . 9 5 f 5 9 . . . . . 
            . . . . 9 f 5 . f . 5 f 9 . . . 
            . . . 9 5 . . . 5 . . . 5 9 . . 
            . . . . . . 5 . 5 . . 9 . . . . 
            . . . . 9 . . . 5 . . . . . . . 
            . . . . . . . . 5 . . . 5 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 9 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 9 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, 0, -50)
        canShoot = false
    } else {
        canShoot = true
    }
})
// Creates jellyfishes that rains down at different x values
function createJellyfish () {
    jellyfish = sprites.createProjectileFromSide(enemies[randint(0, 1)], 0, 70)
    jellyfish.setKind(SpriteKind.Enemy)
    jellyfish.x = randint(10, 150)
}
// Creates starts that are shot from left to the right at different heights
function createStar () {
    star = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . b 5 5 5 b . . . . . 
        . . . . . b b 5 5 5 b b . . . . 
        . . b b b b 5 5 5 1 1 b b b b . 
        . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b d d 5 5 5 5 5 d d b . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c 5 5 d d b d d 5 5 c . . 
        . . . c 5 d d c c c d d 5 c . . 
        . . . c c c c . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 95, 0)
    star.setKind(SpriteKind.strayBullet)
    star.y = randint(10, 100)
}
// A function that  checks how many kills the user has and changes the elvels once the user has reached a certain point
function enemyCounter () {
    if (info.score() == 20) {
        changeLevel(1)
    } else if (info.score() == 40) {
        changeLevel(2)
    }
}
// A function that contains the 3 different levels
function changeLevel (level: number) {
    if (level == 0) {
        scene.setBackgroundImage(img`
            ffffffffffffff9bbbd66666688686888ddddde88888ccbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffdbbdd66666888888bdddbdbddccd8bbcbbb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffff999966666686888bddbbbbbbbbbccc8bcc8b9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffff9996969669686666dbbdbbbbbbbbbccc8bbc869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffff9996999666668668dbdbbbbbbbbbbcccc8bcc66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffd996996666668668dbbbbbbbbbbbbcccc88bc66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffff99996dd6666688868bdbbbbbbbbbbbccccc88886ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff99b966dd6666688688bbbbbbbbbbbbbccccccc8889fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff99b966966666688688bbbbbbbbbbbbbbcccccc8886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff99bbb69666666886868bbbe88bbbbbcccccccc8886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff99bbbe9666666888888888888bbbbbcccccccc8886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff9bbbbbcc96668888888dddbbd8cbbbbcccccc88886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff9bbcccccc6666886888888ddbd88bbbccccc88888bfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffbbbcccccc6666888888888888888bbbccccc88888bfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff9dbbbbcccb666888888888888888bccccccc888886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff99bbbbccb6666888888888888888bcbcccc8888886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffff9dbcbccb6666888888888888888bbccccc88c8889fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffff99bbbccc6666888888888888888bccccc888d888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffff99bbbcc66666688888888888888bcccc8888d888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffff9bbccc66bb6888888888888888bcccc888bd886ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffff99bbcc6666bd88888888888888bcccc88888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffff96bbc66666bd8868888888888bbcc88888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffff99ebc66666db8868688888888bbcc8888896ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffff96ccc6966666b86668888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff99c69666666dd8668888888888888886ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff69969666d6dd88688888888888b8866ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff96669666d886666888888888dd869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffff96669dd6866688888888888d866ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffff969966666888888888818869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffff9996668181888881669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff9616161881886119ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff996116999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        levels = 0
    } else if (level == 1) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff9999bbbbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff99ddbd66668ccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff999ddbbbd688811cccccb999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffd6ddddbb666188888811818ccccbeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffddd9ddd66ddd68888888888888cccccc99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffddd9ddd66ddd68888888888888cccccc99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffdbbb966996d6886688888ccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffdbb9996666666688888888ccccbbc8bccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffdbb9996666666688888888ccccbbc8bccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffff99bb996666666668888888ccc888888bbbb88888ccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffdbbb996666666666688888bbbb888888cccc88888bc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffbbbbbdd9966688868888888888888b888888888ccccc86699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffdbbbbbd69966666686888888888bddbeb888888888bccc88cc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffff99bdbbdd666666666886888688ddddddddd888888888bccbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffff99bdbbdd666666666886888688ddddddddd888888888bccbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffddd9999666666666888888888bddddbbbbbdbbccccccbbbbcccbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffddd99996966666666668888bbdddddbbbdbbbbbbbbbcc8bccbb88bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffff9999999966966666888686bbbdddbbbdbbbbbbbbbbbbbcc88ccccc886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffff9999999966966666888686bbbdddbbbdbbbbbbbbbbbbbcc88ccccc886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffff9999969966966666888666bbddbbddbdbbbbbbbbbbbbcccc8bbbccc869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffff9d999969966666666666866bbddbbbbbbbbbbbbbbbbbbccccc888bbcc66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffff99999969969666666666886bbddbbbbbbbbbbbbbbbbbbccccc888bbbc86ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffff9999999ddd6696666866888bbbbbbbbbbbbbbbbbbbbbbcccccc888888889fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffff9999999ddd6696666866888bbbbbbbbbbbbbbbbbbbbbbcccccc888888889fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffff999996ddddd696666888888bbbbbbbbbbbbbbbbbbbbbbbccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff9bbb9966996666666688886888bbbbbbbbbbbbbbbbbbbbbcccccccccc8886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff9bbbbb669996666666888868888bbbbbbbbbbbbbbbbbccbcccccccccc88869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff9bbbbb669996666666888868888bbbbbbbbbbbbbbbbbccbcccccccccc88869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff9dbbbbb699966666666888688888bbbbe8888bbbbbbbccccccccccccc88869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff9bbbcccc6696666666888886888888888d888ebbbbbbccccccccccbb888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff9bbbbbbccc9996666866688688888d888bbbd8bbbbbbccccccccccbb888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff9bbbcccccccc966666888888888888dddbbbb88bbbbbbbcccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff9bbbcccccccc966666888888888888dddbbbb88bbbbbbbcccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff9bbbccccccccc66666888868888888ddddddbd8bbbbbbbcccccc88888888b9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff9bbbcccbcccccb66668886888888888888888888bbbbbbcccccc88888888b9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff9bbbbbbbcccccb6666688888888888888888888bbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff9bbbbbbcccccb66666688888888888888888888bbbbcccccccc8888888886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff9bbbbbbcccccb66666688888888888888888888bbbbcccccccc8888888886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff9bbbbbbbccccb66666888888888888888888888bbbbcbbccccc8888888886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffff9dbbbcbccccb66666888888888888888888888bbbbbccccccc888ccc8889fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffff99bbbbccccbc66666688888888888888888888bbbbccccccc8888ddd888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffff99bbbbccccbc66666688888888888888888888bbbbccccccc8888ddd888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffff69bbbbbcccc666666666888668888888888888bbbbcccccc88888dd8888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffff999bbbcccc966ddbb888888888888888888888ccbbcccccc888bb888886ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffff69bbbbccc96966bb8888888888888888888888bbbbcccc8888bbcc8869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffff9999dcccc6666666b66d888888888888888888bbbccccc88888888889fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffff9999dcccc6666666b66d888888888888888888bbbccccc88888888889fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffff6996bbbc6666666bbbd888868888888888888bbbbccc888888888d69fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffff9669cbbc6696666666bb888888888888888888bbbcc8888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffff996cccc96966666666b88886688888888888888888888888886699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffff996cccc96966666666b88886688888888888888888888888886699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffff99ccb96666666666db88886888888888888888888888888899ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffff699cc69666666666d888866888888888888888888888866ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffff966cc969966666d6d88888688888888888888888b888666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff6c6666966666d88886666688888888888888dd8869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff969666996ddd688886688888888888888888d8866fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff969666996ddd688886688888888888888888d8866fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff9666666666666688888888888888688888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffff96699666666888888888888888811188869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffff96699666666888888888888888811188869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffff999999668888188888888888866699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff9996161186181118888616699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffff99996166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff99999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        levels = 1
    } else if (level == 2) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffff99dd99bbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff999ddbddd661168bccccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff999ddbddd661168bccccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffff999dddbbbd666888811111ccccccb99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffff999666ddbbbbb66888811181888ccccccbbc999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffd669ddddbbbb66618888118888888818ccccccccee9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffddd996ddd6b66dbd688888888888888888888cccccccc99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffdbbb966666666ddbb668888688888888ccccccccccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fddbbbb966666966dd6886688888888cccccccccccccccccccccc699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fddbbbb966666966dd6886688888888cccccccccccccccccccccc699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fddbbbb966666966dd6886688888888cccccccccccccccccccccc699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            bbbb99966696666666688888888888cccccbbbccc8bccccccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            bbb99996666666666688888888888cbbccce8bbbbcbcccccccbbccccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            b99996666666666666888888888bbccb8888888bbbbbbbb88888bccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            d999ddd6666666886688886888bbbcb88888888888bc88888bcc8bcc886c99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            bdddd996666668886688888888888888888b88888888888888cc8cccc886cc99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            bddd699666666666886888888888888bbbbbbebbb888888888888bccc8c866cc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            bddd699666666666886888888888888bbbbbbebbb888888888888bccc8c866cc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            d6666666666666888868886888888ddddddddddee888888888888bcccbbccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            6666666666666886888888888bddddddddddbbdddccccccdd88b8ebbccbbbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            6666666666666886888888888bddddddbbbbbbdbbbbccccccccb8bbbbccc88bbbb9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            966966666666666688888bbbbddddddbbbbddbbbbbbbbbbbbcccc8bbcccbbb88bbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            666966666666686888888bbddddbbbbbdddbbbbbbbbbbbbccccccc88bbcccc888bc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            69996666666888688868bbdddddddbbbdddbbbbbbbbbbbbbbcbccc888bcccccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            69996666666888688868bbdddddddbbbdddbbbbbbbbbbbbbbcbccc888bcccccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            6996666666d888686666bddbbbbdddbbdddbbbbbbbbbbbbbbccccccc88bbccccc8869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            6996666666d888686666bddbbbbdddbbdddbbbbbbbbbbbbbbccccccc88bbccccc8869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            6996666666d666886668bddbbbdbbbbbbbbbbbbbbbbbbbbbbcccccccc88bcccccc866fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            66666666666666886668bddddbbbbbbbbbbbbbbbbbbbbbbbbcccccccc888bbbbccc6699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            96666666666666888868bddbbbbddbbbbbbbbbbbbbbbbbbbbccccccccc8888bbbcc8699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            96666666668888888868ddbdddbbbbbbbbbbbbbbbbbbbbbbbcccccccccc888888888666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            66669666668886888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcccccc8888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            d6669666668888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbccccccccccc8888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            d66666666666688866888bbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccc88888889ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            666666666688888866888bbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcccccccccccccc8888886ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            6666666666888888668888bbbbbbbbbbbbbbbbbbbbbbbbbcccbcccccccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            6666666666666888668688888bbbbbeb8888bbbbbbbbbbbcccccccccccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            6666666666688888888888888888888888888bbbbbbbbbbccccccccccccccccc888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            66666666666888888868888888888888ddd88ebbbbbbbbbcccccccccccccbbbb888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            66666666666888888868888888888888ddd88ebbbbbbbbbcccccccccccccbbbb888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            99966666888666888868888888ddd88dbbbd88bbbbbbbbbccccccccccccceebb888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            9999666688866888888888888dddddbbbbbd88cbbbbbbbbbbbcccccccccc8888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            c9996666666888888888888888888ddbbbbb888bbbbbbbbbbbcccccccccc8888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            c9996666666888888888888888888ddbbbbb888bbbbbbbbbbbcccccccccc8888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ccc66666668888866688888888888ddddddbdd888bbbbbbbbcccccccccc8888888888bbb9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccc666666888888888888888888888d888888888bbbbbbbbcccccccccc8888888888bbb9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ccccb6666688886888888888888888888888888888bbbbbbbcccccccccc888888888888b9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccbb666666668888888888888888888888888888bbbbbbcccccccccccc88888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccbb666666668888888888888888888888888888bbbbbbcccccccccccc88888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccb6666666668888888888888888888888888888bbbbbbccccccccccc888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cbbb6666666668888888888888888888888888888bbbbbbccccccccccc88888888888886ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cbb66666668888888888888888888888888888888bbbbbbbbccccccccc88888888888886ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cbb66666668888888888888888888888888888888bbbbbbccccccccccc8888ccc8888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            bcc66666666668868888888888888888888888888bbbbbbccccccccc888888ddd888866fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            bcc66666666668868888888888888888888888888bbbbbbccccccccc888888ddd888866fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            c6696666666666868888688888888888888888888bbbbbbccccccc888888bbdd8888866fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            c6696bb6668888888888688888888888888888888bbbcccccccccc88888bbbdd8888699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            96666ddbbb8888888888888888888888888888888ccbcccccccccc88888bcc8888886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            9666966bbbb8888888888888888888888888888888bbbbbcccccc888888bcccc88869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            9666966bbbb8888888888888888888888888888888bbbbbcccccc888888bcccc88869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            6666666dbbbddd8888888886688888888888888888bbcccccccc88888888888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            6666666666bbb6d888888886688888888888888888bbcccccccc8888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            6666666666dbbbd688868688888888888888888888bbccccccc8888888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            6666666666dbbbd688868688888888888888888888bbccccccc8888888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            c666666666666dbb888688888688888888888888888bbbbcccc8888888888899b69fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            66699666666666bbbb8688888888888888888888888bbbbcc888888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            966696666666666bbb86886666888888888888888888bbb8888888888888886699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            999666666666666dbbb6888666888888888888888888888888888888888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            9666666666666666ddbb88866688888888888888888888888888888888886699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            c66696666666666666dd888886688888888888888888888888888888888666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            c66696666666666666dd888886688888888888888888888888888888888666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            c9966996669666d666dd8888886888888888888888888888888bb888886699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        levels = 2
    }
}
// Chances of creating stars and/or squid enemies or not
function createEnemy2 (chance: number) {
    if (chance <= 3) {
        createStar()
    } else if (chance <= 25) {
        createSquid()
    }
}
function bossProjectilePattern (spd: number, ang: number) {
    projectile2 = sprites.createProjectileFromSprite(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................2...............
        ...............242..............
        ..............24442.............
        .............2445442............
        ............2445a5442...........
        ...........2445aaa5442..........
        ..........2445aaaaa5442.........
        .........8669aaaaaaa5442........
        ..........8669aaaaa9668.........
        ...........8669aaa9668..........
        ............8669a9668...........
        .............8669668............
        ..............86668.............
        ...............868..............
        ................8...............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, boss, spd * Math.cos(ang / 50), spd * Math.sin(ang / 50))
    projectile2.setFlag(SpriteFlag.AutoDestroy, true)
}
// Initialization of the user's character/ship 
function shipSetup () {
    ship = sprites.create(img`
        .cc...........cc.
        cccc...a.a...cccc
        cacc...a.a...ccac
        caac..aa.aa..caac
        cacc...a.a...ccac
        ccac...a.a...cacc
        .cacc..a.a..ccac.
        .ccac69d6d96cacc.
        .ccac9666669cacc.
        .cccc6969696cccc.
        ..ccc6696966ccc..
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
    // To set the ship be able to shoot at the very beginning 
    canShoot = true
    info.setLife(4)
    info.setScore(0)
}
// Creates squids that rains down at different x values
function createSquid () {
    squid = sprites.createProjectileFromSide(enemies[randint(2, 3)], 0, 80)
    squid.setKind(SpriteKind.Enemy)
    squid.x = randint(10, 150)
}
// The user/ship gains 1 health point when it touches a powerup, but has a max health of 3
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    scene.cameraShake(2, 100)
    buffs.destroy()
    ship.startEffect(effects.hearts, 500)
    if (info.life() < 4) {
        info.changeLifeBy(1)
    }
})
// The projectile from the ship destroys itself and the enemies when they touch each other. The amount of kills goes up by 1.
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    if (levels == 0) {
        otherSprite.destroy(effects.spray, 400)
    } else if (levels == 1) {
        otherSprite.destroy(effects.fire, 400)
    }
    info.changeScoreBy(1)
})
// The user/ship takes damage when it touches a star
sprites.onOverlap(SpriteKind.Player, SpriteKind.strayBullet, function (sprite, otherSprite) {
    scene.cameraShake(4, 300)
    animation.runImageAnimation(
    star,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . b 5 5 5 b . . . . . 
        . . . . . b b 5 5 5 b b . . . . 
        . . b b b b 5 5 5 1 1 b b b b . 
        . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b d d 5 5 5 5 5 d d b . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c 5 5 d d b d d 5 5 c . . 
        . . . c 5 d d c c c d d 5 c . . 
        . . . c c c c . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . b b . . . . . . . 
        . . . . . . b d d b . . . . . . 
        . . . . . b d 5 5 d b . . . . . 
        . . . . b b 5 5 5 5 b b . . . . 
        . . . . b 5 5 5 5 5 5 b . . . . 
        b b b b b 5 5 5 5 1 1 d b b b b 
        b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
        b d d 5 5 5 5 5 5 1 1 1 5 d d b 
        . b d d 5 5 5 5 5 5 5 5 d d b . 
        . . b b 5 5 5 5 5 5 5 5 b b . . 
        . . c b 5 5 5 5 5 5 5 5 b c . . 
        . . c 5 5 5 5 d d 5 5 5 5 c . . 
        . . c 5 5 d b b b b d 5 5 c . . 
        . . c 5 d b c c c c b d 5 c . . 
        . . c c c c . . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b 5 5 b . . . . . . 
        . . . b b b 5 5 1 1 b b b . . . 
        . . . b 5 5 5 5 1 1 5 5 b . . . 
        . . . . b d 5 5 5 5 d b . . . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . c 5 d d d d 5 c . . . . 
        . . . . c 5 d c c d 5 c . . . . 
        . . . . c c c . . c c c . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . b . . . . . . . 
        . . . . . . b d d c . . . . . . 
        . . . . . b 1 1 d d c . . . . . 
        . . . . b 1 1 1 d 1 1 b . . . . 
        . . . . c 1 1 1 d 1 1 1 c c . . 
        b b b c d 1 1 c c 1 1 d 1 1 b b 
        b d 1 1 d d b c c c b d 1 1 1 b 
        b 1 1 1 1 c c . . c d d 1 1 1 b 
        b 1 1 1 1 c c . . b 1 1 d d c . 
        . b 1 1 d d b c b b 1 1 b c c . 
        . . c b d d b 1 1 b b d b c . . 
        . . c 1 1 d d 1 1 1 d d d b . . 
        . b d 1 1 1 d 1 1 d 1 1 1 d b . 
        . b d 1 1 1 d b b d 1 1 1 1 b . 
        . . b 1 1 d c c b b d 1 1 d b . 
        . . b b b b . . . b b b b b b . 
        `,img`
        . . . . . b b . . . . . . . . . 
        . . . . b 5 b b . . . . . . . . 
        . . b b 5 5 5 b b b . . . . . . 
        . b 5 5 5 5 5 5 5 b . . b . . . 
        . . b b 5 5 5 b b . . b 5 b . . 
        . . b 5 5 b 5 5 b . b 5 5 5 b . 
        . . b 5 b b b 5 b . . b 5 b . . 
        . . b b . . b b b . . b b b . . 
        . b 5 b b . . . . . b 5 b . . . 
        b 5 5 5 b b . . . b b 5 b b . . 
        . b 5 b b 5 b . b 5 5 5 5 5 b . 
        . b b b 5 5 5 b b b 5 5 5 b b . 
        . . b 5 5 5 5 5 b b 5 b 5 b . . 
        . . . b 5 5 5 b . . b b b . . . 
        . . . b 5 b 5 b . . . . . . . . 
        . . . b b b b b . . . . . . . . 
        `],
    200,
    false
    )
    star.destroy()
    ship.startEffect(effects.warmRadial, 500)
    info.changeLifeBy(-1)
})
// The user/ship takes damage when it touches the enemies and the enemies then disappear
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 300)
    if (levels == 0) {
        otherSprite.destroy(effects.spray, 400)
    } else if (levels == 1) {
        otherSprite.destroy(effects.fire, 400)
    }
    ship.startEffect(effects.warmRadial, 500)
    info.changeLifeBy(-1)
})
let buffs: Sprite = null
let squid: Sprite = null
let boss: Sprite = null
let projectile2: Sprite = null
let levels = 0
let star: Sprite = null
let jellyfish: Sprite = null
let ship: Sprite = null
let projectile: Sprite = null
let canShoot = false
let enemies: Image[] = []
// The sprites of the enemies
enemies = [
img`
    . . . . 8 . 9 . 8 . . . 8 . . . 
    . . . 9 8 . 9 . 8 . . . 8 9 . . 
    . . . 8 9 . 9 8 . . . 8 9 . . . 
    . . . 8 9 . . 8 9 . . 8 9 . . . 
    . . . . 8 9 . 8 8 9 . . 8 9 . . 
    . . . . 8 9 . . 9 . . 9 8 . . . 
    . . . 9 8 . . 9 8 . . 9 . 8 . . 
    . . . 9 8 . . 9 8 . . 9 8 8 . . 
    . . . 8 8 8 8 8 8 8 9 . 8 . . . 
    . 8 8 8 f f f f f 8 8 8 8 8 8 . 
    . 8 8 f f f 9 f f f f f f f 8 . 
    . . 8 8 9 f f f f f 9 f f 8 8 . 
    . . . 8 f f f f f f f f f 8 . . 
    . . . 8 8 f 9 f f f f 9 f 8 . . 
    . . . . 8 8 f f f f f f 8 . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    `,
img`
    . . . . . 8 . . 9 . . . . . . . 
    . . . . 8 . . . 9 8 . 8 . . . . 
    . . . . 8 . 8 . 8 . . . 8 . . . 
    . . . 8 . . 8 8 1 . . 8 . . . . 
    . . . 8 . 8 . 8 9 . . 8 . . . . 
    . . . . 8 8 . 9 8 . 8 . . . . . 
    . . . . 8 . . 1 8 9 8 . . . . . 
    . . . 8 . 8 1 8 9 1 . 8 . . . . 
    . . . 8 . 8 9 8 9 9 9 . 8 . . . 
    . . . 8 . 8 8 8 8 8 8 . 8 . . . 
    . . . 8 8 f f f 9 f f 8 8 . . . 
    . . 8 f f 9 f f f f f f f 8 . . 
    . . 8 f f f f f f f 9 f f 8 . . 
    . . . 8 f f 9 f f f f f 8 . . . 
    . . . . 8 f f f f 9 f 8 . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 . . 2 4 . . . . . 
    . . . 5 4 . 2 . 2 2 . 5 . . . . 
    . . . . . . 2 . 2 . . . . . . . 
    . . . . . 2 2 4 2 2 . . . . . . 
    . . . . . 2 f f f 2 . . . . . . 
    . . . . . 2 f f f 2 . . . . . . 
    . . . . . 2 f f f 2 . . . . . . 
    . . . 5 4 2 f f f 2 4 5 . . . . 
    . . . . 2 f f f f f 2 . . . . . 
    . . . . 2 f f f f f 2 . . . . . 
    . . . . . 2 f f f 2 . . . . . . 
    . . . . . . 2 f 2 . . . . . . . 
    . . . . . 2 f f f 2 . . . . . . 
    . . . . . . 4 f 4 . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    `,
img`
    ....1.....15.....
    1..5........5.1..
    .5..1.......1.5..
    .5..5......5...1.
    5..5.......5...5.
    5..42.......4.5..
    .1...22...22..5..
    .5.....2.2...5...
    ..5...22422...5..
    ..5.222fff222.5..
    ..42..2fff2..24..
    ......2fff2......
    .......222.......
    ...4222fff2224...
    ..5fffffffffff5..
    ...422fffff224...
    ......24f42......
    ........5........
    `,
img`
    .......................................................................................................dddddddddddddddddd.......................................
    ....................................................................................................ddddddddddddddddddddd.......................................
    ..............................................................................................ddddddffffffffffffffffffffffdd....................................
    ............................................................................................dddfffffffffffffffffffffffffffffddd.................................
    ........................................................................................ddddffffffffffffffffffffffffffffffffffddd...............................
    ....................................................................................ddddffffffffffffffffffffffffffffffffffffffffd...............................
    ..................................................................................dddffffffffffffffffffffffffffffffffffffffffffffd..............................
    ................................................................................dddfffffffffffffffffffffffffffffffffffffffffffffffd.............................
    ...............................................................................ddffffffffffffffffffffffffffffffffffffffffffffffffffd............................
    .............................................................................ddffffffffffffffffffffffffffffffffffffffffffffffffffffd............................
    ...........................................................................ddfffffffffffffffffffffffffffffffffffffffffffffffffffffffd...........................
    .........................................................................dddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffd..........................
    ........................................................................ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd.........................
    ......................................................................ddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................
    .....................................................................ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd........................
    .....................................................................dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd.......................
    ....................................................................ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd.......................
    ...................................................................ddfffffffffffffffffffffffffffffffffffffffffffffffccccccccccccffffffffd.......................
    ..................................................................ddffffffffffffffffffffffffffffffffffffffffffffffccccfffffffccccffffffffd......................
    .................................................................ddfffffffffffffffffffffffffffffffffffffffffffffccccffffffffffffcffffffffd......................
    ................................................................ddffffffffffffffffffffffffffffffffffffffffffffccccfffffffffffffffcffffffff......................
    ...............................................................ddffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffcffffffffd.....................
    ...............................................................dffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffcfffffffd.....................
    ..............................................................ddfffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffcffffffffd....................
    ..............................................................dffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffcffffffffd....................
    ..............................................................dfffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffcffffffffd....................
    .............................................................ddfffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffcffffffffd....................
    .............................................................dffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffcffffffffd....................
    .............................................................dffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffccfffffffd....................
    ............................................................ddfffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffcfffffffd....................
    ............................................................ddfffffffffffffffffffffffffffffffffffffffffffcffffffffffccccccfffffffffcfffffffd....................
    ............................................................dffffffffffffffffffffffffffffffffffffffffffffcfffffffffccccffccffffffffcfffffffd....................
    ............................................................dffffffffffffffffffffffffffffffffffffffffffffcfffffffffcffffffcfffffffccfffffffd....................
    ...........................................................dffffffffffffffffffffffffffffffffffffffffffffcfffffffffccffffffcfffffffccfffffffd....................
    ...........................................2...............dffffffffffffffffffffffffffffffffffffffffffffcffffffffccffffffccfffffffccfffffffd....................
    ..........................................222..............dffffffffffffffffffffffffffffffffffffffffffffcffffffffcfffffffccfffffffccfffffffd....................
    ..........................................2f2.............ddffffffffffffffffffffffffffffffffffffffffffffcffffffffcfffffffccfffffffccfffffffd....................
    .........................................22f2.............dfffffffffffffffffffffffffffffffffffffffffffdfccffffffccffffffcccfffffffcffffffffd....................
    .........................................2ff22............dfffffffffffffffffffffffffffffffffffffffffffd8fcffffffcffffffccccfffffffcffffffffd....................
    ........................................22fff2............dfffffffffffffffffffffffffffffffffffffffffffd8fcffffffcfffffffffffffffffcffffffffd....................
    ........................................2ffff2........aaaddfffffffffffffffffffffffffffffffffffffffffffd8fcffffffcfffffffffffffffffcfffffffd.....................
    ........................................2fffff2......aaffdffffffffffffffffffffffffffffffffffffffffffffd88ccfffffcffffffffffffffffccfffffffd.....................
    ........................................2fffff2......affdddfffddddddddddfffffffffffffffffffffffffffffdd88fcfffffccfffffffffffffffccfffffffd.....................
    ........................................2ffffff2....afffffdddd1111111fffdffffffddddddddddddffffffffffd8f88cfffffccfffffffffffffffcfffffffd......................
    ........................................2ffffff22...ffffffff11111111111ffdfffdddffff1111111ddddffffffd8ff8cffffffcffffffffffffffccfffffffd......................
    ........................................2fffffff2.aafffffff1111111111111ffddddffff11111111111fdddffffd8fff8ffffffccfffffffffffffccffffffd.......................
    ........................................2fffffff2aaffffffff1111111111111fffffffff1111111111111ffdddddd8fff8fffffffcccffffffffffccfffffffd.......................
    .........................................2fffffffaafffffff1111fffffff1111ffffffff1111111111111fffffff88fff88ffffffffcccfffffffcccfffffffd.......................
    .........................................2fffffffaaaffffff1111fffffff1111fffffff1111fffffff1111ffffff8fffff8fffffffffccccccccccffffffffd........................
    .........................................2fffffffffaafffff1111ff222ff1111fffffff1111fffffff1111fffffa8fffff88ffffffffffffffffffffffffff.........................
    .........................................2ffffffffffffffff1111ff222ff1111fffffff1111ff888ff1111fffffafffffff8fffffffffffffffffffffffffd.........................
    .........................................22affffffffffffff1111ff222ff1111fffffff1111ff888ff1111fffffafffffff8ffffffffffffffffffffffffdd.........................
    ..........................................aaafffffffffffff1111fffffff1111fffffff1111ff888ff1111ffffaafffffff8fffffffffffffffffffffffdd..........................
    ...........................................aafffffffffffff1111fffffff1111fffffff1111fffffff1111ffffaffffffff8ffffffffffffffffffffffdd...........................
    ............................................affffffffffffff1111111111111ffffffff1111fffffff1111ffffaffffffff8ffffffffffffffffffffffd............................
    .............................................aaffffffffffff1111111111111fffffffff1111111111111ffffffffffffffafffffffffffffffffffffd.............................
    ...............................................aaaffffffffff11111111111ffffffffff1111111111111fffffffffffffaafffffffffffffffffffdd..............................
    .................................................aafffffffffff1111111fffffffffffff11111111111ffffffffffffffafffffffffffffffffffdd...............................
    .................................................aafffffffffffffffffffffffffffffffff1111111ffffffffffffffaaafffffffffffffffffdd.................................
    .................................................aaffffffffffffffffffffffffffffffffffffffffffffffffffffffaaffffffffffffffffddd..................................
    ................................................aaaffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffffffffffffffd....................................
    ...............................................aafafffffffffffffffffffffffffffffffffffffffffffffffffffffaaffffffffffffffdddd....................................
    ..............................................affffafffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffddd.......................................
    ............................................aafffffaffffffffffffffffffffffffffffffffffffffffffffffffffffaafffffffffdddd.........................................
    .......................................aaaaaafffffffafffffffffffffffffffffffffffffffffffffffffffffffffffadddddddddd.............................................
    .....................................aaaffffffffffffaaafffffffffffffffffffffffffffffffffffffffffffffffffaaffffffffaa............................................
    ...................................aaffffffffffffffffaaffffffffffffffffffffffffffffffffffffffffffffffffaaffffffffffaaa..........................................
    ..................................aafffffffffffffffffafafffffffffffffffffffffffffffffffffffffffffffffffafffffffffffffaa.........................................
    .................................88fffffffffffffffffafffaaffffffffffffffffffffffffffffffffffffffffaaaaaffffffffffffffffaa.......................................
    ...............................88ffffffffffffffffffaffffafaaafffffffffffffffffffffffffffffffffffaa...affffffffffffffffffaaa.....................................
    .............................88fffffffffffffffffffafffffaffffaaaaaaaafffffffffffffffffffffffaaaa......afffffffffffffffffffaa....................................
    ............................88ffffffffffffffffffaaffffffaffffffffffffaaaaaffffffffffffffaaaafffa.......afffffffffffffffffffa....................................
    ...........................88fffffffffffffffaaaaaaffffffaffffffffffffa....aaaaaaaaaaaaaafffffffa.......aafffffffffffffffffff2...................................
    ..........................88ffffffffffffffaaa...afffffffaffffffffffffa....afffffffaffffffffffffa........aaffffffffffffffffff22..................................
    ........................888fffffffffffaaaaaa....affffffaaffffffffffffa....afffffffaffffffffffffa..........affffffffffffffffff2..................................
    ........................8ffffffffff888.........aaffffffafffffffffffffa...aaffffffffafffffffffffa...........aafffffffffffffffff2.................................
    .......................8ffffffff888............afffffffaffffffffffffa...affffffffffafffffffffffa.............affffffffffffffff2.................................
    ......................8ffff888888.............2fffffffafffffffffffffa...affffffffffafffffffffffa..............aaaffffffffffffff2................................
    ......................8f888..................2ffffffffaffffffffffffaa...affffffffffaaffffffffffa.................aaffffffffffff2................................
    .....................8888...................22ffffffffaffffffffffffa....afffffffffa.affffffffffa..................a2fffffffffff22...............................
    .....................88...................22fffffffffaffffffffffffaa....afffffffffa.affffffffffa...................22fffffffffff2...............................
    .....................8..................222ffffffff2fafffffffffffaa.....afffffffffa.afffffffffffa...................2fffffffffff2...............................
    ......................................222fffffff222.afffffffffffaa.......affffffffaa.affffffffffa....................2ffffffffff2...............................
    ...................................222ffffffff222..affffffffffffa........afffffffffa.affffffffff88....................2fffffffff2...............................
    ..................................2222222222222...8fffffffffffffa........afffffffff2..affffffffff8....................2fffffffff2...............................
    .................................................88ffffffffffffa.........afffffffff2...8ffffffffff88..................22ffffffff2...............................
    ................................................8fffffffffffffaa.........affffffffff2..8fffffffffff88..................2ffffffff2...............................
    ..............................................88fffffffffffffaa...........2fffffffff2...8fffffffffff88..................2fffffff2...............................
    ............................................88ffffffffffff8888............2fffffffff2....8ffffffffffff88................2fffffff2...............................
    ...........................................8fffffffffffff88...............22fffffffff2...8ffffffffffffff888.............22ffffff2...............................
    .........................................88ffffffffffff888.................22ffffffff2....8fffffffffffffff8888...........2fffff2................................
    ........................................88fffffffffff888....................22fffffff22....8ffffffffffffffffff8..........2fffff2................................
    .......................................88fffffffff8888........................22ffffff2.....88fffffffffffffffff88........2fff22.................................
    ......................................88fffffff8888............................222ffff22......88888ffffffff888888.......2fff22..................................
    ....................................88fff888888..................................222fff2...........888888888............2f222...................................
    ......................................888...........................................22222..............................222......................................
    .......................................................................................222.............................2........................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `
]
// The sprites of the "power-ups"/health items
let powerups = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . 7 1 1 1 1 7 . . . . . 
    . . . . . 7 1 7 7 1 7 . . . . . 
    . . . . . 7 1 1 1 1 7 . . . . . 
    . . . . . 7 1 7 7 1 7 . . . . . 
    . . . . . 7 1 1 1 1 7 . . . . . 
    . . . . . 7 1 7 7 1 7 . . . . . 
    . . . . . 7 1 1 1 1 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 . 7 7 7 . . . . 
    . . . . 7 1 1 1 7 1 1 1 7 . . . 
    . . . . 7 1 1 1 7 1 1 1 7 . . . 
    . . . . 7 1 1 1 1 1 1 1 7 . . . 
    . . . . . 7 1 1 1 1 1 7 . . . . 
    . . . . . 7 1 1 1 1 1 7 . . . . 
    . . . . . . 7 1 1 1 7 . . . . . 
    . . . . . . . 7 1 7 . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
shipSetup()
// To start the first level 
changeLevel(0)
effects.starField.startScreenEffect()
game.onUpdateInterval(500, function () {
    if (levels == 0) {
        // Spawns jellyfish enemies when it is the first level
        for (let index = 0; index <= 2; index++) {
            createEnemy1(randint(0, 30))
            enemyCounter()
        }
    } else if (levels == 1) {
        // Spawns squid enemies and stars when its level 2
        for (let index = 0; index <= 1; index++) {
            createEnemy2(randint(0, 30))
            enemyCounter()
        }
    } else if (levels == 2) {
        // Spawns the boss
        boss = sprites.create(img`
            ..............................................................................................................
            .....................................................................ddddddddddddddddd........................
            ...............................................................ddddddffffffffffffddfdddd......................
            .............................................................dddffffffffffffffffffddffddddd...................
            ..........................................................dddffffffffffffffffffffffddfffffddd.................
            ......................................................ddddffffffffffffffffffffffffffdddfffffd.................
            .....................................................ddfffffffffffffffffffffffffffffffddfffffd................
            ....................................................dffffffffffffffffffffffffffffffffffddfffffd...............
            ...................................................dffffffffffffffffffffffffffffffffffffddffffd...............
            ..................................................ddffffdddddddddddddffffffffffffffffffffddfffd...............
            ................................................ddddddddfffffffffffffdddddffffffffffffffffddfffd..............
            ..............................................dddffffffffffffffffffffffffdddfffffffffffffffddfffd.............
            ............................................dddfffffffffffffffffffffffffffffddffffffffffffffddfffd............
            ...........................................dffffffffffffffffffffffffffffffffffdddffffffffffffdffffd...........
            ...........................................dffffffffffffffffffffffffffffffffffffdddffffffffffdfffffd..........
            ..........................................ddffffffffffffffffffffffffffffffffffffffdffffffffffdfffffd..........
            .........................................ddffffffffffffffffffffffffffffffffffffffcccccccccccffdffffd..........
            .......................................ddffffffffffffffffffffffffffffffffffffccccfffffffffffcfdfffffd.........
            ......................................ddfffffffffffffffffffffffffffffffffffffccffffffffffffffcfffffffd........
            .....................................dfffffffffffffffffffffffffffffffffffffccfffffffffffffffffcffffffd........
            ....................................ddffffffffffffffffffffffffffffffffffffccffffffffffffffffffcffffffd........
            ....................................dffffffffffffffdddddddddddddddffffffffcfffffffffffffffffffcffffffd........
            ....................................dfffffffdddddddffffffffffffffddddffffccfffffffffffffffffffcfffffdd........
            ....................................dffdddddffffffffffffffffffffffffddfffcffffffffffffffffffffcffffddd........
            ...................................dffdfffffffffffffffffffffffffffffffdffcffffffffffffffffffffcffffdfd........
            ...................................ddddfffffffffffffffffffffffffffffffddccffffffffffffffffffffcffddffd........
            ...................................dffffffffffffffffffffffffffffffffffffcffffffffcccccffffffffcdddfffd........
            ...................................dffffffffffffffffffffffffffffffffffffcfffffffcccccccfffffffcffffffd........
            ...................................dfffffffffffffffffffffffffffffffffffcfffffffccfffffccffffffcffffffd........
            .....................2.............dfffffffffffffffffffffffffffffffffffcffffffccffffffccffffffcffffffd........
            ....................222............dfffffffffffffffffffffffffffffffffffcffffffcffffffcccffffffcffffffd........
            ....................2f2...........ddfffffffffffffffffffffffffffffffffffcffffffcffffffcccffffffcffffffd........
            ....................2f2...........dffffffffffffffffffffffffffffffffffdfccffffccffffffcccffffffcffffffd........
            ...................2fff2..........dffffffffffffffffffffffffffffffffffd8fcffffcffffffffffffffffcffffffd........
            ...................2fff22.....aaaddfdddddddffffffffffffffffffffffffffd8fcffffcffffffffffffffffcffffffd........
            ...................2ffff22..aaffffdd1111111dddffffffdddddddddffffffff8f88cfffccffffffffffffffcffffffd.........
            ...................2fffff22.afffffff11111111ffdfffddff1111111dddfffff8ff8cffffcfffffffffffffccffffffd.........
            ...................2ffffff2affffff11111111111ffddddff111111111fdddfff8fff8ffffccffffffffffffccfffffd..........
            ...................2ffffff2fffffff11111111111fffffff11111111111ffdddd8fff8fffffcccfffffffffccffffffd..........
            ...................2fffffffafffff111fffffff111ffffff11111111111ffffff8fff88ffffffcccffffffcccffffffd..........
            ...................2fffffffafffff111fffffff111fffff111fffffff111fffffaffff8fffffffcccccccccfffffffd...........
            ...................2fffffffaaffff111ff222ff111fffff111fffffff111fffffaffff88ffffffffffffffffffffffd...........
            ...................2fffffffffffff111ff222ff111fffff111ff888ff111fffffafffff8fffffffffffffffffffffd............
            ....................2ffffffffffff111ff222ff111fffff111ff888ff111fffffafffff8ffffffffffffffffffffdd............
            ....................aafffffffffff111fffffff111fffff111ff888ff111ffffaffffff8fffffffffffffffffffdd.............
            .....................aaffffffffff111fffffff111fffff111fffffff111ffffaffffff8ffffffffffffffffffdd..............
            ......................afffffffffff11111111111ffffff111fffffff111ffffaffffff8ffffffffffffffffffd...............
            .......................aaaaafffffff111111111ffffffff11111111111fffffffffffaaffffffffffffffffdd................
            ...........................affffffff1111111ffffffffff111111111ffffffffffffaffffffffffffffffdd.................
            ...........................affffffffffffffffffffffffff1111111fffffffffffaaaffffffffffffffdd...................
            .........................aaafffffffffffffffffffffffffffffffffffffffffffaaffffffffffffdddd.....................
            ........................affaffffffffffffffffffffffffffffffffffffffffffffaffffffffffdd.........................
            ......................aafffafffffffffffffffffffffffffffffffffffffffffffaafffffffdddd..........................
            ................aaaaaaafffffaffffffffffffffffffffffffffffffffffffffffffadddddddd..............................
            ..............aafffffffffffffaafffffffffffffffffffffffffffffffffffffffaaffffffffaaa...........................
            .............aaffffffffffffffafaffffffffffffffffffffffffffffffffffffffafffffffffffaa..........................
            ...........88fffffffffffffffafffaafffffffffffffffffffffffffffffffffaaaffffffffffffffa.........................
            .........88ffffffffffffffffaffffafaaaaaaaaaffffffffffffffffffffffaa..ffffffffffffffffaa.......................
            ........88ffffffffffffffffafffffaffffffffffaaaafffffffffffaaaaaaa.....affffffffffffffffa......................
            .......8ffffffffffffffaaaaafffffaffffffffffa...aaaaaaaaaaaffffffa.....aaffffffffffffffff2.....................
            ......8fffffffffffffaaa...afffffaffffffffffa...afffffaffffffffffa......aafffffffffffffff22....................
            .....8fffffffffffaaaaa....affffaaffffffffffa...afffffaffffffffffa........afffffffffffffff2....................
            ....8fffffffff888........aaffffafffffffffffa..aafffffaffffffffffa.........aaffffffffffffff2...................
            ...8fffffff888...........afffffaffffffffffa..afffffffaffffffffffa...........afffffffffffff2...................
            ..8ffff88888............2fffffafffffffffffa..afffffffaffffffffffa............afffffffffffff2..................
            .8ff888..............222ffffffaffffffffffaa..afffffffaafffffffffa.............aafffffffffff2..................
            ..88...............22ffffff22afffffffffaa....afffffffaaffffffffffa...............2ffffffffff2.................
            .................222ffffff2.afffffffffaa......affffffa.afffffffffa................2fffffffff2.................
            ..............222fffffff222affffffffffa.......affffffa.afffffffff88................2ffffffff2.................
            .................2222222...ffffffffffa........affffff2...8fffffffff88..............22fffffff2.................
            ..........................8fffffffffaa........afffffff2..8ffffffffff8...............22ffffff2.................
            ........................88ffffffffffa..........2ffffff2...8ffffffffff................2ffffff2.................
            ......................88ffffffffff88...........2ffffff2....8fffffffff88..............2ffffff2.................
            .....................8fffffffffff88............22ffffff2...8fffffffffff888...........2ffffff2.................
            ....................8ffffffffff888..............22fffff2....8ffffffffffff88888.......2fffff2..................
            ...................8fffffffff888.................22ffff22....fffffffffffffffff88.....2fffff2..................
            ..................88fffffff888.....................2ffff2....88ffffffffffffff88......2fff22...................
            .................88ffffff88.........................2fff22.....88888ffffff8888.......2ff22....................
            ...............88fff88888...........................22fff2..........8888888.........2ff22.....................
            .................888..................................22222.........................222.......................
            .........................................................222........................2.........................
            ..............................................................................................................
            ..............................................................................................................
            ..............................................................................................................
            ..............................................................................................................
            ..............................................................................................................
            ..............................................................................................................
            ..............................................................................................................
            ..............................................................................................................
            ..............................................................................................................
            `, SpriteKind.Enemy)
        boss.setPosition(75, 21)
    }
})
// Creates buffs that that rains down at different x values
game.onUpdateInterval(3000, function () {
    buffs = sprites.createProjectileFromSide(powerups[randint(0, 1)], 0, 70)
    buffs.setKind(SpriteKind.Food)
    buffs.x = randint(10, 150)
})
