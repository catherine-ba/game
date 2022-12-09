namespace SpriteKind {
    export const PlaceOne = SpriteKind.create()
    export const PlaceTwo = SpriteKind.create()
    export const PlaceThree = SpriteKind.create()
    export const PlaceFour = SpriteKind.create()
    export const gap = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.PlaceOne, function (sprite, otherSprite) {
    level_1()
})
function mainMenu () {
    scene.setBackgroundImage(assets.image`space background`)
    makeMySprite()
    mySprite2 = sprites.create(assets.image`purple planet`, SpriteKind.PlaceOne)
    mySprite2.setPosition(118, 22)
    mySprite3 = sprites.create(assets.image`pink planet`, SpriteKind.PlaceTwo)
    mySprite3.setPosition(26, 87)
    mySprite4 = sprites.create(assets.image`yellow planet`, SpriteKind.PlaceThree)
    mySprite4.setPosition(8, 23)
    mySprite5 = sprites.create(assets.image`blue planet`, SpriteKind.PlaceFour)
    mySprite5.setPosition(128, 81)
    number = 0
    numberOfJumps = 0
    maxNumberOfJumps = 2
    tiles.setCurrentTilemap(tilemap`level13`)
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        numberOfJumps = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    state = 2
    mySprite.destroy()
    game.showLongText("YOU DIED", DialogLayout.Bottom)
    respawn()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (state == 0) {
        state += 1
    } else if (state == 1) {
    	
    } else if (state == 2) {
        if (game2 == 1) {
            if (level == 1) {
                level_1()
                makeMySprite()
                tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
                mySprite.ay = 500
                scene.cameraFollowSprite(mySprite)
                controller.moveSprite(mySprite, 100, 0)
                spriteChoice()
                state = 1
            } else if (level == 2) {
                level_2()
                makeMySprite()
                tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
                mySprite.ay = 500
                scene.cameraFollowSprite(mySprite)
                controller.moveSprite(mySprite, 100, 0)
                spriteChoice()
                state = 1
            } else if (level == 3) {
                level_3()
                makeMySprite()
                tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
                mySprite.ay = 500
                scene.cameraFollowSprite(mySprite)
                controller.moveSprite(mySprite, 100, 0)
                spriteChoice()
                state = 1
            } else if (level == 4) {
                level_4()
                makeMySprite()
                tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
                mySprite.ay = 500
                scene.cameraFollowSprite(mySprite)
                controller.moveSprite(mySprite, 100, 0)
                spriteChoice()
                state = 1
            } else if (level == 5) {
                level_5()
                makeMySprite()
                tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
                mySprite.ay = 500
                scene.cameraFollowSprite(mySprite)
                controller.moveSprite(mySprite, 100, 0)
                spriteChoice()
                state = 1
            }
        }
    }
})
function level_3 () {
    scene.setBackgroundImage(assets.image`purple planet background`)
    tiles.setCurrentTilemap(tilemap`level3`)
    game2 = 1
    level = 3
    nextLevel()
    controller.moveSprite(mySprite, 100, 0)
    game.showLongText("Level 3", DialogLayout.Top)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    mySprite.ay = 500
    mySprite.setStayInScreen(false)
    scene.cameraFollowSprite(mySprite)
}
function respawn () {
    if (state == 2) {
        if (game2 == 1) {
            if (level == 1) {
                scene.setBackgroundImage(assets.image`purple planet background`)
                game.showLongText("Press A to return to Main Menu and B to restart the level", DialogLayout.Bottom)
            } else if (level == 2) {
                scene.setBackgroundImage(assets.image`purple planet background`)
                game.showLongText("Press A to return to Main Menu and B to restart the level", DialogLayout.Bottom)
            } else {
            	
            }
        } else if (game2 == 2) {
        	
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (state == 0) {
        number += 1
        if (number == 5) {
            number = 1
        }
        spriteChoice()
    } else if (state == 1) {
        if (numberOfJumps < maxNumberOfJumps) {
            numberOfJumps += 1
            mySprite.vy = -150
        }
        if (number == 1) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`Purple`,
            100,
            false
            )
        } else if (number == 2) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim`,
            200,
            false
            )
        } else if (number == 3) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim0`,
            200,
            false
            )
        } else if (number == 4) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim1`,
            200,
            false
            )
        }
    } else if (state == 2) {
        game.reset()
    } else if (state == 3) {
        mySprite.ay = 300
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    state = 2
    mySprite.destroy()
    game.showLongText("YOU DIED", DialogLayout.Bottom)
    respawn()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (state == 1) {
        if (number == 1) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim5`,
            200,
            false
            )
        } else if (number == 2) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim6`,
            200,
            false
            )
        } else if (number == 3) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim9`,
            200,
            false
            )
        } else if (number == 4) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim2`,
            200,
            true
            )
        }
    } else {
    	
    }
})
function level_2 () {
    scene.setBackgroundImage(assets.image`purple planet background`)
    tiles.setCurrentTilemap(tilemap`level2`)
    game2 = 1
    level = 2
    nextLevel()
    controller.moveSprite(mySprite, 100, 0)
    game.showLongText("Level 2", DialogLayout.Top)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    mySprite.ay = 500
    mySprite.setStayInScreen(false)
    scene.cameraFollowSprite(mySprite)
}
function level_1 () {
    scene.setBackgroundImage(assets.image`purple planet background`)
    tiles.setCurrentTilemap(tilemap`level1`)
    game2 = 1
    level = 1
    nextLevel()
    controller.moveSprite(mySprite, 100, 0)
    game.showLongText("Level 1", DialogLayout.Top)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    mySprite.ay = 500
    mySprite.setStayInScreen(false)
    scene.cameraFollowSprite(mySprite)
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (state == 1) {
        if (number == 1) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`purple still`,
            500,
            true
            )
        } else if (number == 2) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim10`,
            200,
            true
            )
        } else if (number == 3) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim11`,
            200,
            true
            )
        } else if (number == 4) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`blue still`,
            500,
            true
            )
        }
    } else {
    	
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (state == 1) {
        if (number == 1) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`purple still`,
            500,
            true
            )
        } else if (number == 2) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim10`,
            200,
            true
            )
        } else if (number == 3) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim11`,
            200,
            true
            )
        } else if (number == 4) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`blue still`,
            500,
            true
            )
        }
    } else {
    	
    }
})
function makeMySprite () {
    mySprite = sprites.create(assets.image`Character1`, SpriteKind.Player)
    mySprite.setStayInScreen(true)
    controller.moveSprite(mySprite)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    nextLevel()
    scene.cameraFollowSprite(mySprite)
    level += 1
    if (level == 2) {
        level_2()
    } else if (level == 3) {
        level_3()
    } else if (level == 4) {
        level_4()
    } else if (level == 5) {
        level_5()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (state == 1) {
        if (number == 1) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim4`,
            200,
            false
            )
        } else if (number == 2) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim7`,
            200,
            false
            )
        } else if (number == 3) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim8`,
            200,
            false
            )
        } else if (number == 4) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim3`,
            200,
            true
            )
        }
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    respawn()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PlaceThree, function (sprite, otherSprite) {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
})
function nextLevel () {
    sprites.destroyAllSpritesOfKind(SpriteKind.PlaceOne)
    sprites.destroyAllSpritesOfKind(SpriteKind.PlaceTwo)
    sprites.destroyAllSpritesOfKind(SpriteKind.PlaceFour)
    sprites.destroyAllSpritesOfKind(SpriteKind.PlaceThree)
    mySprite.ay = 500
}
function level_1_20 () {
    controller.moveSprite(mySprite, 0, 100)
    game2 = 2
    state = 3
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
        ffffff1ffffffffff4ffffffffffffffffffffffffffff1ffffffffff4ffffffffffffffffffffffffffff1ffffffffff4ffffffffffffffffffffffffffff1ffffffffff4ffffffffffffffffffffff
        ffffffffffffffff454ffffffffffffffffffff5ffffffffffffffff454ffffffffffffffffffff5ffffffffffffffff454ffffffffffffffffffff5ffffffffffffffff454ffffffffffffffffffff5
        fffffffffffffffff4fffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffff4ffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff1fffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1fffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff
        fffffffffffffffffffffffff454fffffffffffffffffffffffffffffffffffff454fffffffffffffffffffffffffffffffffffff454fffffffffffffffffffffffffffffffffffff454ffffffffffff
        fff3fffffffffffffffffffff555fffffffffffffff3fffffffffffffffffffff555fffffffffffffff3fffffffffffffffffffff555fffffffffffffff3fffffffffffffffffffff555ffffffffffff
        ff535ffffffffffffffffffff454ffffffffffffff535ffffffffffffffffffff454ffffffffffffff535ffffffffffffffffffff454ffffffffffffff535ffffffffffffffffffff454ffffffffffff
        f33333ffffffffffff44fffffffffffffffffffff33333ffffffffffff44fffffffffffffffffffff33333ffffffffffff44fffffffffffffffffffff33333ffffffffffff44ffffffffffffffffffff
        ff353fffffffffffff44ffffffffffffffffffffff353fffffffffffff44ffffffffffffffffffffff353fffffffffffff44ffffffffffffffffffffff353fffffffffffff44ffffffffffffffffffff
        ff5f5fffffffffffffffffffffffffffff4fffffff5f5fffffffffffffffffffffffffffff4fffffff5f5fffffffffffffffffffffffffffff4fffffff5f5fffffffffffffffffffffffffffff4fffff
        fffffffffffffffffffffffffffffffff454fffffffffffffffffffffffffffffffffffff454fffffffffffffffffffffffffffffffffffff454fffffffffffffffffffffffffffffffffffff454ffff
        fffffffffff4ffffffffffffffffffffff4ffffffffffffffff4ffffffffffffffffffffff4ffffffffffffffff4ffffffffffffffffffffff4ffffffffffffffff4ffffffffffffffffffffff4fffff
        ffffffffff454fffffffffffffffffffffffffffffffffffff454fffffffffffffffffffffffffffffffffffff454fffffffffffffffffffffffffffffffffffff454fffffffffffffffffffffffffff
        fffffffffff4fffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffff4ffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f1fffffffffffffffffffffffff1fffffffffffff5fffffffffffffffffffffffff1fffffffffffff1fffffffffffffffffffffffff1fffffffffffff1fffffffffffffffffffffffff1ffffffffffff
        fffffffffffffffff5fffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff1fffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff44fffff1ffffffffffffffffffffffffffffffff44fffff1ffffffffffffffffffffffffffffffff44fffff1ffffffffffffffffffffffffffffffff44fffff1ffffffffffffffffffffffffff
        ffffff44fffffffffffff33333333333ffffffffffffff44fffffffffffff33333333333ffffffffffffff44fffffffffffff33333333333fffffffffffffd44fffffffffffff33333333333ffffffff
        ffffffffffffffff33333333333333333333ffffffffffffffffffff33333333333333333333ffffffffffffffffffff33333333333333333333ffffffffffffffffffff33333333333333333333ffff
        fffffffffffff33333333333333333333333333ffffffffffffff33333333333333333333333333ffffffffffffff33333333333333333333333333ffffffffffffff33333333333333333333333333f
        33fffffffff3333333333333333333333333333333fffffffff3323333333333333333333333333333fffffffff3333333333333333333333333333333fffffffff33333333333333333333333333333
        3322222333332333333333333333333333333333322222222233323333333333333333333333333332333222222333333333333333333333333333332222222222222232333333333333333333333333
        3332222222223333333333333333333333323333323222233333333333333333333333333333222223222222223333333333333333333333333322233233222222232233233333333333333333333333
        3333222233323333333333333333333333333333323222222332333333333333333333333333333333332222222223333333333333333333333332332222222333322333333333333333333333333333
        3322222222333333333333333333333333333332223322223333322333333333333333333333333323322222223332233333333333333333333332222222222222233333333333333333333333333333
        2222222222333232333333333333333333333333333323322223333223333333333333333333323222222222222332333333333333333333333332232333222222333333333333333333333333333333
        3333222223322333333333333333333333333333333222223333233333333333333333333332232222222222222222333333333333333333333332333222222233333333333333333333333333333333
        3333222223322333333333333333333333333333333322333333333233333333333333333332333322222222222222333333333333333333333333333322222222233333333333333333333333333333
        3322222222233333333333333333333333333223323322222223333323333333333333333333323222222222223323323333333333333333333333223222222222223323333333333333333333333333
        3222222222222333333333333333333332333333333322222222233332333333333333333333322222222222332323332233333333333333332333322222222222222322333333333333333333333333
        3322233222223233233333333333333333333333233333223333332333223333333333333333223232222222222223333333333333333333332332222222222233332222223333333333333333333333
        3332222233333332333333333333333333333333333322222233322333333333333333333333322233222222223323232233333333333333332323222222322222222333333333333333333333333333
        3232222222222223333333333333333333333333322233333222222233322233333333333333223332222222233233223333333333333333333333333222222333333333333333333333333333333333
        2222222222223233333333333333333333333333322222222222333223333333333333333333333333333222222233333333333333333333333333333322222223322333333333333333333333333333
        3322233333333323333333333333333333333233333233223222233333333333333333333333333232222222222222222333333333333333333222222222223333333332233333333333333333333333
        22222222222222233333333333333333333332333322322222223333323333333333333333332332322222222222222233333333333333333333322322222222222222233333333bbbbbbb3333333333
        3333222223333233333323333333333333333333333222222233332333333333333333333333233222222222222232332223333333333333333333333333332233322233333333bbbbbbbdbb33333333
        33222222223332333333333333333333333333333222222222222332333333333333333333333333332222222233323332333333333333333333333233332222222222222233bbbbdbbbbbbbbb333333
        33233222223bbbbbbb3333333333333333333333222333322222233323333333333333333333333322222222233223333323333333333333333333222222222223332233333bbbbbbdbbdbbbbbb33333
        333333bbbbbbbbbbbbbbb333333333333333333333322223333333333333333333333333333332233233222223322233333333333333333333332322222222222233222333bbbdbdbddbbdbbbbb33333
        333bbbbdbddbdbbddbbbbb33333333333333333333322222222222223322333333333333333333333333333222333323333333333333333333323233333222222223232333bbddbddddbddddbbbb3333
        33bbbdbdddddbdbbbdbdbbbbb3333333333333332333333322223333233333333333333333333332bbbbbbbbbbbbbb3333333333333333333333323322222222222233233bbdbbbddddddddbbbbbb333
        bbbbddddddddddbdbddbbdbbbb3333333333333333332222233333332333333333333333333333bbbbbdbbbbbbbddbbb33333333333333333333223332222222222233333bdbbbdddddddbbbbbbbbb33
        ddbbdddddddddddbdddddddbbbb33333333333322222332222222222333333333333333333333bbbbbdbbdbddddbdbbbb333333333333333333322233223222233233333bbbbddddbdddbbddbdbbbb33
        ddddddddddddddddddddbdddbdbbb333333333332222222222222332332333333333333333bbbbdbddddddbdbbdbddbbbb33333333333333333333323332222233333333bbbbddddddddbddddbbdbbb3
        dddddddddddddddddddddddddddbbbb3333322333333222222233332232333333333333333bbbdbbdbbddddddbbdbbbbbbb3333333333333333333333322223332233333bbbbdddddddddbddbddbbbb3
        dddddddddddddddddddddddddbdddbbb33333333233322222222223333233333333333333bbbddbdddddddddddbbddbbbbbb333333333333333333332332223323333333bbbbdddbddddddbddbbbbbbb
        ddddddddddddddddddddddddddddbbdbb333333333222222222222233333333333333333bbbbddddddddddddddddbdddddbbb3333333333333333332333233222333333bbbbdddddddddddbdddddbbbb
        dddddddddddddddddddddddddbddddddbbbbb3323322222222223333323333333333333bbbbdddbddddddddddddddbbdddbbbb333333333333332222222222222233333bbbbdddddddddddbddddddddb
        dddddddddddddddddddddddddbddddddddbbbbb333bbbbbbbbbbbbbb3223333333333bbbbbddbdddddddddddddddbddbdbbbbbbb3333333333333322322222332332333bbdbddddddddddddddddbddbb
        dddddddddddddddddddddddddddddddddbdbdbbbbbbbbbbbbbbbbbbbbbb333333333bbbbdddbdddddddddddddddddddddbbbbbbbbb333333333bbbbbbbbbb222333333bbbbddddddddddddddddddbddd
        dddddddddddddddddddddddddddddddddddbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbddbddddddddddddddddddddddddbdbbbbbbbbb33bbbbbbbbbbbbbbbb3333333bbddddddddddddddddbbdddbdd
        ddddddddddddddddddddddddddddddddddddddbddddddbdbdbbbbbddbbbbbbbbbbbbdbdbddbddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbdbdbbbbbbbb3333bbdbddddddddddddddddbddddd
        dddddddddddddddddddddddddddddddddddbbdddbbdddbbbddbdbdbdddbbbbbbbdbbdbddddddddddddddddddddddddddddddddbbbbbdbddbdddbbbdddbdbbdbbbbb3bbbddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddbdddbbddddddddddddddddddddddddddddddddddddddddddddddddbbbdddddbddddbbbbbbbddbddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbbbddddddddddddddddddddddddddddddddddddddddbddddddbddddddddddddbdbbddbbbbbddbdddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddbbbbddddddddddddddddbdddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddbdbddbdddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddd555555555555ddddddddddddddddddddddddddddddddddd55555555555555555555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dd5555555555555555dddddddddddddddddddddddddddddddd5555555555555555555555dddddddddddddddddddddddddddddddddddddddddd55555555dddddddddddddddddddddddddddddddddddddd
        dd555555555555555555ddddddddddddddddddddddddddd555555555555555555555555555dddddddddddddddddddddddddddd555555555555555555555dddddddddddddddddddd555555555555ddddd
        dd5555555555555555555dddddddddddddddddddddddd55555555555555555555555555555555ddddddddddddddddddddddd55555555555555555555555555dddddddddddddddd555555555555555ddd
        5555555555555555555555ddddddddddddddddddddd5555555555555555555555555555555555555ddddddddddddddddd555555555555555555555555555555ddddddddddddd55555555555555555555
        555555555555555555555555dddddddddddddddddd55555555555555555555555555555555555555555ddddddddd5555555555555555555555555555555555555ddddddddd5555555555555555555555
        55555555555555555555555555ddddddddddddddd55555555555555555555555555555555555555555555dddddd5555555555555555555555555555555555555555dddddd55555555555555555555555
        555555555555555555555555555dddddddddddddd55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        55555555555555555555555555555dddddddddd5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        55555555555555555555555555555555dddddd55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        `)
}
function level_4 () {
    scene.setBackgroundImage(assets.image`purple planet background`)
    tiles.setCurrentTilemap(tilemap`level4`)
    game2 = 1
    level = 4
    nextLevel()
    controller.moveSprite(mySprite, 100, 0)
    game.showLongText("Level 4", DialogLayout.Top)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    mySprite.ay = 500
    mySprite.setStayInScreen(false)
    scene.cameraFollowSprite(mySprite)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    state = 2
    mySprite.destroy()
    game.showLongText("YOU DIED", DialogLayout.Bottom)
    respawn()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    state = 2
    mySprite.destroy()
    game.showLongText("YOU DIED", DialogLayout.Bottom)
    respawn()
})
function level_5 () {
    scene.setBackgroundImage(assets.image`purple planet background`)
    tiles.setCurrentTilemap(tilemap`level5`)
    game2 = 1
    level = 5
    nextLevel()
    controller.moveSprite(mySprite, 100, 0)
    game.showLongText("Level 5", DialogLayout.Top)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    mySprite.ay = 500
    mySprite.setStayInScreen(false)
    scene.cameraFollowSprite(mySprite)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.PlaceTwo, function (sprite, otherSprite) {
    nextLevel()
    level_1_20()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PlaceFour, function (sprite, otherSprite) {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
})
function spriteChoice () {
    if (number == 1) {
        mySprite.setImage(assets.image`Character2`)
    } else if (number == 2) {
        mySprite.setImage(assets.image`Character0`)
    } else if (number == 3) {
        mySprite.setImage(assets.image`Character3`)
    } else if (number == 4) {
        mySprite.setImage(assets.image`Character1`)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    effects.confetti.startScreenEffect(100)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
// the space scene is the main menu to choose which mode/game you want to play by going to a planet for each different level or game.
let projectile: Sprite = null
let gapGuy: Sprite = null
let gapImage: Image = null
let bottomPillar: Image = null
let topPillar: Image = null
let gap = 0
let level = 0
let game2 = 0
let state = 0
let mySprite: Sprite = null
let maxNumberOfJumps = 0
let numberOfJumps = 0
let number = 0
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
mainMenu()
game.setDialogFrame(img`
    . . . . . . . . . . . . . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 1 1 1 1 1 1 1 1 1 1 1 8 . 
    . 8 1 1 a a a a a a a 1 1 8 . 
    . 8 1 a 1 1 1 1 1 1 1 a 1 8 . 
    . 8 1 a 1 1 1 1 1 1 1 a 1 8 . 
    . 8 1 a 1 1 1 1 1 1 1 a 1 8 . 
    . 8 1 a 1 1 1 1 1 1 1 a 1 8 . 
    . 8 1 a 1 1 1 1 1 1 1 a 1 8 . 
    . 8 1 a 1 1 1 1 1 1 1 a 1 8 . 
    . 8 1 a 1 1 1 1 1 1 1 a 1 8 . 
    . 8 1 1 a a a a a a a 1 1 8 . 
    . 8 1 1 1 1 1 1 1 1 1 1 1 8 . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . . . . . . . . . . . . 
    `)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . c c c c c c c . . . . 
    . . . . c a a a a a a a c . . . 
    . . . c a a a a a a a a a c . . 
    . . c a a a a 1 1 1 a a a a c . 
    . . c a a a 1 a a a 1 a a a c . 
    . . c a a a 1 a a a 1 a a a c . 
    . . c a a a 1 1 1 1 1 a a a c . 
    . . c c a a 1 a a a 1 a a c c . 
    . . f c c a 1 a a a 1 a c c f . 
    . . f c c c a c c c a c c c f . 
    . . . f c c c c c c c c c f . . 
    . . . . f c c c c c c c f . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("Welcome to space Traveler!", DialogLayout.Center)
game.showLongText("To choose your character hit \"A\" to cycle through the choices.", DialogLayout.Center)
game.showLongText("Once you are happy with it hit \"B\"", DialogLayout.Center)
game.showLongText("Fly around using \"wasd\" or the arrow buttons and go to each planet for a different game", DialogLayout.Center)
game.onUpdateInterval(2000, function () {
    if (state == 3) {
        if (game2 == 2) {
            gap = randint(0, 4)
            if (gap == 0) {
                topPillar = assets.image`p1`
                bottomPillar = assets.image`p2`
            } else if (gap == 1) {
                topPillar = assets.image`p3`
                bottomPillar = assets.image`p4`
            } else if (gap == 2) {
                topPillar = assets.image`p5`
                bottomPillar = assets.image`p6`
            } else if (gap == 3) {
                topPillar = assets.image`p8`
                bottomPillar = assets.image`p7`
            } else if (gap == 4) {
                topPillar = assets.image`p9`
                bottomPillar = assets.image`p0`
            }
            gapImage = image.create(2, scene.screenHeight())
            gapImage.fill(1)
            gapGuy = sprites.create(gapImage, SpriteKind.gap)
            gapGuy.vx = -45
            gapGuy.setFlag(SpriteFlag.AutoDestroy, true)
            gapGuy.setFlag(SpriteFlag.Invisible, true)
            projectile = sprites.createProjectileFromSide(bottomPillar, -45, 0)
            projectile.top = 0
            projectile = sprites.createProjectileFromSide(topPillar, -45, 0)
            projectile.bottom = scene.screenHeight()
            mySprite.setStayInScreen(true)
        }
    }
})
