controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(60, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(30, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(130, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(100, 100)
})
info.onLifeZero(function () {
    game.over(false, effects.confetti)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
let right: Sprite = null
let down: Sprite = null
let up: Sprite = null
let left: Sprite = null
let lane = 0
let speed = 0
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a0008000202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020201010101010101010101`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.vehicle.roadHorizontal,sprites.dungeon.darkGroundCenter], TileScale.Sixteen))
effects.blizzard.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 5 1 1 1 5 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 5 1 1 1 1 5 1 1 1 . . . 
    . . 1 1 5 5 5 5 5 5 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(80, 100)
speed += 40
info.setScore(0)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    speed += 1
})
game.onUpdateInterval(500, function () {
    lane = randint(1, 4)
    if (lane == 1) {
        left = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . 1 8 1 1 1 1 1 1 . 
            . . . . . . 1 8 8 8 8 8 8 8 1 . 
            . . . . . 1 8 8 8 8 8 8 8 8 1 . 
            . . . . . . 1 8 8 8 8 8 8 8 1 . 
            . . . . . . . 1 8 1 1 1 1 1 1 . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        left.setVelocity(0, speed)
        left.setPosition(30, 8)
    } else if (lane == 2) {
        up = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . 1 8 1 . . . . . . 
            . . . . . . 1 8 8 8 1 . . . . . 
            . . . . . 1 8 8 8 8 8 1 . . . . 
            . . . . 1 8 8 8 8 8 8 8 1 . . . 
            . . . . 1 1 1 8 8 8 1 1 1 . . . 
            . . . . . . 1 8 8 8 1 . . . . . 
            . . . . . . 1 8 8 8 1 . . . . . 
            . . . . . . 1 8 8 8 1 . . . . . 
            . . . . . . 1 8 8 8 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        up.setVelocity(0, speed)
        up.setPosition(60, 8)
    } else if (lane == 3) {
        down = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 8 8 8 1 . . . . . 
            . . . . . . 1 8 8 8 1 . . . . . 
            . . . . . . 1 8 8 8 1 . . . . . 
            . . . . . . 1 8 8 8 1 . . . . . 
            . . . . . . 1 8 8 8 1 . . . . . 
            . . . . 1 1 1 8 8 8 1 1 1 . . . 
            . . . . 1 8 8 8 8 8 8 8 1 . . . 
            . . . . . 1 8 8 8 8 8 1 . . . . 
            . . . . . . 1 8 8 8 1 . . . . . 
            . . . . . . . 1 8 1 . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        down.setVelocity(0, speed)
        down.setPosition(100, 8)
    } else {
        right = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . . 1 8 1 . . . . 
            . . . 1 1 1 1 1 1 1 8 8 1 . . . 
            . . . 1 8 8 8 8 8 8 8 8 8 1 . . 
            . . . 1 8 8 8 8 8 8 8 8 8 8 1 . 
            . . . 1 8 8 8 8 8 8 8 8 8 1 . . 
            . . . 1 1 1 1 1 1 1 8 8 1 . . . 
            . . . . . . . . . 1 8 1 . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        right.setVelocity(0, speed)
        right.setPosition(130, 8)
    }
})
