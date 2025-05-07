enum Mode {
    mode1,
    dia,
    noite
}
namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
modes.whenModeChanged(Mode.noite, function () {
    Notification.notify("Fernando nem percebeu que o por do Sol chegou, ficou com medo e se perdeu na floresta.")
    Notification.waitForNotificationFinish()
    Notification.notify("Procure 6 folhas de árvores e construa abrigo.")
    Notification.waitForNotificationFinish()
    tiles.setCurrentTilemap(tilemap`level0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile1`)
})
let Toninho = sprites.create(assets.image`myImage`, SpriteKind.NPC)
let Fernando = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(Fernando, 100, 100)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(Fernando)
scaling.scaleToPixels(Toninho, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
story.startCutscene(function () {
    story.cancelSpriteMovement(Fernando)
    story.setPagePauseLength(200, 1000)
    story.printCharacterText("Fernando tenta construir uma cabana no quintal de sua casa, ele não sabia que ia chover no dia que dormiu dentro da cabana e teve uma gripe forte. Seu pai achou melhor colocá-lo no grupo de escoteiros com seu irmão Toninho.", "Narrador")
})
timer.after(2500, function () {
    Notification.notify("O fernando, pode pegar 5 gravetos para mim por favor. - Diz Toninho.", 1, assets.image`myImage`)
    Notification.waitForNotificationFinish()
    Notification.notify("Vou pegar lá! - Diz Fernando.")
    tiles.setCurrentTilemap(tilemap`level1`)
    timer.after(3500, function () {
        sprites.destroy(Toninho)
    })
})
timer.after(90000, function () {
    modes.setMode(Mode.noite)
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
        . . . . . . 9 9 6 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . d e d . . . . . . . 
        . . . . . . e e e . . . . . . . 
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
