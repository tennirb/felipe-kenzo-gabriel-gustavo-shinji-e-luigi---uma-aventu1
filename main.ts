let Fernando = sprites.create(assets.image`myImage`, SpriteKind.Player)
let statusbar = statusbars.create(10, 3, StatusBarKind.Energy)
statusbar.attachToSprite(Fernando)
controller.moveSprite(Fernando, 100, 100)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(Fernando)
story.startCutscene(function () {
    story.printCharacterText("Fernando tenta construir uma cabana em seu quintal, e quando foi dormir dentro dela, choveu e teve uma gripe forte, agora seu pai quer o colocar no grupo  de escoteiros, junto com seu irmão Toninho.", "Narrador")
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
        . . . . . . f e e . . . . . . . 
        . . . . . . f e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . 6 e 8 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . 9 9 6 6 . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . . e . . e . . . . . . 
        . . . . . . e . . e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . f e e . . . . . . . 
        . . . . . . f e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . 6 e 8 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . 9 9 6 6 . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . . e . . e . . . . . . 
        . . . . . . e . . . e . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . f e e . . . . . . . 
        . . . . . . f e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . 6 e 8 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . 9 9 6 6 . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . . e . . e . . . . . . 
        . . . . . . e . . e e . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . f e e . . . . . . . 
        . . . . . . f e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . 6 e 8 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . 9 9 6 6 . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . . e . . e . . . . . . 
        . . . . . . e . . . e . . . . . 
        `],
    300,
    characterAnimations.rule(Predicate.MovingLeft)
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
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e f . . . . . . . 
        . . . . . . e e f . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . 6 e 8 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . 6 6 9 9 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . e . . e . . . . . . . 
        . . . . . e . . e . . . . . . . 
        `,img`
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
        . . . . . 6 6 9 9 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . e . . e . . . . . . . 
        . . . . e . . e . . . . . . . . 
        `,img`
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
        . . . . . 6 6 9 9 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . e e . e . . . . . . . 
        . . . . e e . . e . . . . . . . 
        `,img`
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
        . . . . . 6 6 9 9 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . e e . e . . . . . . . 
        . . . . e e . . e . . . . . . . 
        `,img`
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
        . . . . . 6 6 9 9 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . e . . e . . . . . . . 
        . . . . e . . e . . . . . . . . 
        `,img`
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
        . . . . . 6 6 9 9 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . e . . e . . . . . . . 
        . . . . e . . e e . . . . . . . 
        `],
    300,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
