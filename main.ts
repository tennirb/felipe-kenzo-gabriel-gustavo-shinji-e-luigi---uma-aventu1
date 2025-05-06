let Fernando = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(Fernando, 100, 100)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(Fernando)
story.printCharacterText("Fernando inicia sua aventura no acampamento de escoteiros.", "Narrador")
forever(function () {
    characterAnimations.loopFrames(
    Fernando,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . . f 1 f e f 1 f . . . . . 
        . . . . e 1 f e f 1 e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . 6 e 8 . . . . . . . 
        . . . . e e 9 9 9 6 e . . . . . 
        . . . e e 9 9 9 6 e e . . . . . 
        . . e e . 9 9 9 9 e e e . . . . 
        . . . . . 9 9 9 9 e e e . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d . d d . . . . . . 
        . . . . . e e . e e . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    Fernando,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . e e f f f e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . 6 e 8 . . . . . . . 
        . . . . e e 9 9 9 6 e . . . . . 
        . . . e e 9 9 9 6 e e . . . . . 
        . . e e . 9 9 9 9 e e e . . . . 
        . . . . . 9 9 9 9 e e e . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d . d d . . . . . . 
        . . . . . e e . e e . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingUp)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    Fernando,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . . f 1 f e f 1 f . . . . . 
        . . . . e 1 f e f 1 e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . 6 e 8 . . . . . . . 
        . . . . e e 9 9 9 6 e . . . . . 
        . . . e e 9 9 9 6 e e . . . . . 
        . . e e . 9 9 9 9 e e e . . . . 
        . . . . . 9 9 9 9 e e e . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d . d d . . . . . . 
        . . . . . e e . e e . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    Fernando,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e f . . . . . . . 
        . . . . . . e e f . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . 6 e 8 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . 9 9 6 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . d e d . . . . . . . 
        . . . . . . e e e . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
