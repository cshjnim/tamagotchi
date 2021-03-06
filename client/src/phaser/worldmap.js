//Phaser Dependency
import Phaser from "phaser";
// import DoorModal from "./prefabs/doormodal.js";
import PlayerObject from "./player";

let WorldScene = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function WorldScene ()
    {
        Phaser.Scene.call(this, { key: 'WorldScene' });
    },
    create: function ()
    {

/*                                                ******* _
                                                *---******* *
                                ~             *-----*******  *
                         ~         ~         *-------*******  }
                        __      _   _!__     *-------*******   }
                   _   /  \_  _/ \  |::| ___ **-----********  *    ~
                 _/ \_/^    \/   ^\/|::|\|:|  **---**** /^\_ *      ~
     ~        /\/  ^ /  ^    / ^ ___|::|_|:|_/\_***** /  ^  \
      `'     /  \  _/ ^ ^   /    |::|--|:|---|  \__/  ^      ^\___
           _/_^  \/  ^    _/ ^   |::|::|:|-::| ^ /_  ^    ^    ^   \_
          /   \^ /    /\ /       |::|--|:|:--|  /  \        ^         \
         /     \/    /  /        |::|::|:|:-:| / ^  \  ^      ^        \
   _Q   / _Q  _Q_Q  / _Q    _Q   |::|::|:|:::|/    ^ \    _Q ~      ^     _.~
  /_\)   /_\)/_/\\)  /_\)  /_\)  |::|::|:|:::|           /_\)           /  \     
_O|/O___O|/O_OO|/O__O|/O__O|/O__________________________O|/O___________[ O ]
/*////////////////////////////[MAP PROGRAMMING]////////////////////////////*/

        // create the map
        let map = this.make.tilemap({ key: 'worldmap' });
        
        // Map tilesets; Param1: Name of the tilemap in tiled (found in json); Param2: ame defined in tilemap load
        let landOneTiles = map.addTilesetImage('castle', 'landone');
        let landTwoTiles = map.addTilesetImage('Dungeon_A532', 'landtwo');
        let waterTiles = map.addTilesetImage('wateranimate2', 'water');
        let forestTiles = map.addTilesetImage('Forest', 'forest');
        let natureTiles = map.addTilesetImage('nature2', 'nature');
        let worldOneTiles = map.addTilesetImage('World_C32', 'worldone');
        let worldTwoTiles = map.addTilesetImage('WorldIcons', 'worldtwo');
        // console.log("Phaser.Cache:: ", Phaser.Cache);
        // console.log("map:: ", map);
        
        // creating the layers
        //FLOOR LAYER 1 -- Param1: Name of the layer in JSON Object; Param2: map names used in that layer
        let floor1 = map.createStaticLayer('Tile Layer 1', [
            landOneTiles,
            landTwoTiles, 
            waterTiles], 0, 0);
        //FLOOR LAYER 2
        let floor2 = map.createStaticLayer('Tile Layer 2', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);

        let floor3 = map.createStaticLayer('Tile Layer 3', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);
        let floor4 = map.createStaticLayer('Tile Layer 4', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);
        let floor5 = map.createStaticLayer('Tile Layer 5', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);
        let floor6 = map.createStaticLayer('Tile Layer 6', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);
        let floor7 = map.createStaticLayer('Tile Layer 7', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);
        let floor8 = map.createStaticLayer('Tile Layer 8', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);
        let floor9 = map.createStaticLayer('Tile Layer 9', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);
        let floor10 = map.createStaticLayer('Tile Layer 10', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);
        let floor11 = map.createStaticLayer('Tile Layer 11', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);
        let floor12 = map.createStaticLayer('Tile Layer 12', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);
        let floor13 = map.createStaticLayer('Tile Layer 13', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);
        let floor14 = map.createStaticLayer('Tile Layer 14', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);
        //Overtile Layers
        let overtile = map.createStaticLayer('Overtile', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);
        let overtileTwo = map.createStaticLayer('Overtile2', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);
        //Obstacles Layer
        let collider = map.createStaticLayer('Obstacles', [
            landOneTiles,
            landTwoTiles, 
            waterTiles,
            forestTiles,
            natureTiles,
            worldOneTiles,
            worldTwoTiles], 0, 0);
        
        // make all tiles in obstacles collidable
        collider.setCollisionByExclusion([-1]);
        overtile.setDepth(1);
        overtileTwo.setDepth(1);
        
                                       /*  
        ___________________________¶¶¶¶¶¶
        _______________________¶¶¶¶¶ccee¶¶
        _____________________¶¶¶cccceeaa¶¶
        _________________¶¶¶¶¶cccceeaaa¶¶
        _____________¶¶¶¶¶cccccceeaaaa¶¶
        __¶¶¶¶¶¶¶¶¶¶¶¶cccccceeaaaaaaa¶¶  ~~CHARACTER PROGRAMMING~~ 
        ¶¶¶ccccccccccccceeaaaaaaaaaa¶¶               ``
        __¶¶¶aaaaaaaeeceeeeeaaaaaag¶¶                 \\
        ____¶¶¶¶¶¶aaaaaaaaeeeeeeag¶¶                  //
        ________¶¶¶¶¶¶¶¶aaaaaaeeegg¶¶            ====//
        _________#######¶¶¶¶¶aaaaggg¶¶          //
        ________###|¯|########¶¶aaaaggg¶¶      //
        ______¶¶###|_|###|¯|#####¶¶¶aagggg¶¶  //
        ____¶¶££#########|_|########¶¶¶¶ggg¶¶//
        __¶¶££¶¶#################£££££¶¶¶¶¶ //
        __¶¶££££££#########££££££££¶¶£¶¶   //
        __¶¶¶¶££££££££££££¶¶¶¶¶¶£££££¶¶   //
        _¶§xxx¶¶££££££¶¶¶¶££££££££££££¶¶ //
        _¶§xxx¶¶££££¶¶¶¶¶¶££££££££££££¶¶//
        __¶¶¶¶££££££§xxx¶¶££££££££££££¶¶
        __¶¶££¶¶££££§xxx¶¶££££££££££££¶¶
        __¶¶££¶¶££££¶¶¶¶¶¶££££££££££¶¶
        __¶¶£££¶¶£££££££££¶¶££££££££¶¶
        __¶¶££££¶¶¶£££££££¶¶££££££££¶¶
        _¶¶£££££££¶¶¶¶¶¶££££¶¶££££¶¶££¶¶
        ¶¶££££££££££££££££££££¶¶¶¶££££££¶¶
        _¶¶¶¶¶.__|¶¶¶¶¶¶¶¶¶¶¶¶¶____¶¶¶¶¶¶¶
                             ===*/

        //EVENTUALLY: PUT THIS IN A SEPARATE FILE
        // animation with key 'left', we don't need left and right as we will use one and flip the sprite
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13]}),
            frameRate: 10,
            repeat: -1
        });
        
        // animation with key 'right'
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13] }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { frames: [2, 8, 2, 14]}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 0, 6, 0, 12 ] }),
            frameRate: 10,
            repeat: -1
        });        

        // our player sprite created through the physics system (params measured in pixels)
        this.player = this.physics.add.sprite(1366, 2984, 'player', 15);
        
        // don't go out of the map
        this.physics.world.bounds.width = map.widthInPixels;
        this.physics.world.bounds.height = map.heightInPixels;
        this.player.setCollideWorldBounds(true);
        
        // don't walk on colliders
        this.physics.add.collider(this.player, collider);

        // limit camera to map
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.roundPixels = true; // avoid tile bleed
    
        // user input
        this.cursors = this.input.keyboard.createCursorKeys();
        
        // where the enemies will be ~~ SOMEWHAT RANDOMIZED; DOESN'T CHANGE
        //COMMENT OUT FOR TESTING
        // this.spawns = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
        // for(let i = 0; i < 40; i++) {
        //     let x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
        //     let y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
        //     // parameters are x, y, width, height
        //     this.spawns.create(x, y, 20, 20);            
        // }
        //COMMENT OUT FOR TESTING        
        //Add colliders for enemies
        this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);

    //        ______
    //     ,-' ;  ! `-.
    //    / :  !  :  . \
    //   |_ ;   __:  ;  |
    //   )| .  :)(.  !  |       REAL
    //   |"    (##)  _  |           FAKE
    //   |  :  ;`'  (_) (               DOORS
    //   |  :  :  .     |
    //   )_ !  ,  ;  ;  |
    //   || .  .  :  :  |       "Get in here quick, get out quicker
    //   |" .  |  :  .  |           with an arm full of fake doors in your arms."
    //   |mt-2_;----.___|                                           -Fake Doors Salesman

        // where the Desert will be
        this.desert = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
        // parameters are x, y, width, height
        this.desert.create(300, 3076, 120, 120);                 
        //Add colliders
        this.physics.add.overlap(this.player, this.desert, this.onEnterDesert, false /*this.checkModal*/, this);
  
        // where the Base City will be
        this.city = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
        // parameters are x, y, width, height
        this.city.create(1286, 360, 120, 120);                 
        //Add colliders
        this.physics.add.overlap(this.player, this.city, this.onEnterCity, false /*this.checkModal*/, this);
  
        // where the Forest will be
        this.forest = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
        // parameters are x, y, width, height
        this.forest.create(1160, 1852, 100, 100);                 
        //Add colliders
        this.physics.add.overlap(this.player, this.forest, this.onEnterForest, false /*this.checkModal*/, this);
  
        // where the Cave will be
        this.cave = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
        // parameters are x, y, width, height
        this.cave.create(1268, 792, 100, 80);                 
        //Add colliders
        this.physics.add.overlap(this.player, this.cave, this.onEnterCave, false /*this.checkModal*/, this);
    },
    checkModal: function(){
        //if countdowntimefinished = true{ ...  }
        this.scene.run("DoorModal");
        //Return true or false from doormodal
        //After answering, countdowntimefinished = false; count down three seconds & countdowntimefinished = true 
    },
    onMeetEnemy: function(player, zone) {        
        // we move the zone to some other location
        zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
        zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
        
        // shake the world
        this.cameras.main.shake(300);

        //stop input on current scene 
        this.input.stopPropagation();
        // start battle 
        this.scene.switch('BattleScene'); 
    },
    onEnterDesert: function(player, zone) {        
        //Countdown three seconds; if user still in area -
        //MODAL TO ASK IF USER WANTS TO ENTER DESERT -- if so, scene switch
           
        //Take in the object with the current scene data
        //Save the current scene to desertscene    
        const currentSave = PlayerObject.prototype.savedPlayer;
        currentSave.location = "DesertScene";
        PlayerObject.prototype.saveStats(currentSave);

        //Stop current scene & move the scene to the Desert 
        this.scene.stop("WorldMap");
        this.input.stopPropagation();
        // USE THIS WITH MODAL TO PAUSE MODAL this.scene.pause("WorldMap");
        // move to  
        this.scene.start('DesertScene'); 
        //USE this.scene.switch WHEN FIXED
    },
    onEnterCity: function(player, zone) {
        //Countdown three seconds; if user still in area -        
        //MODAL TO ASK IF USER WANTS TO ENTER CITY -- if so, scene switch
        //Move the scene to the City        
        this.scene.stop("WorldMap");
        this.input.stopPropagation();
        // move to  
        this.scene.switch('CityScene'); 
    },
    onEnterCave: function(player, zone) {
        //Countdown three seconds; if user still in area -        
        //MODAL TO ASK IF USER WANTS TO ENTER CAVE -- if so, scene switch
        //Move the scene to the Cave        
        this.scene.stop("WorldMap");
        this.input.stopPropagation();
        // move to  
        this.scene.switch('CaveScene'); 
    },
    onEnterForest: function(player, zone) {
        //Countdown three seconds; if user still in area -        
        //MODAL TO ASK IF USER WANTS TO ENTER FOREST -- if so, scene switch
        //Move the scene to the Forest        
        this.scene.stop("WorldMap");
        this.input.stopPropagation();
        // move to  
        this.scene.switch('ForestScene'); 
    },

//            __    _
//         =     _( }
//    -=   _   <<  \
//        `.\__/`/\\    -=CHARACTER MOVEMENT
// -=      '--'\\  `
//     -=     //
// jgs        \)

    update: function (time, delta)
    {
        //console.log(delta);
        // this.controls.update(delta);
    
        this.player.body.setVelocity(0);
        // Horizontal movement
        if (this.cursors.left.isDown)
        {
            this.player.body.setVelocityX(-80);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.setVelocityX(80);
        }

        // Vertical movement
        if (this.cursors.up.isDown)
        {
            this.player.body.setVelocityY(-80);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.body.setVelocityY(80);
        }        

        // Update the animation last and give left/right animations precedence over up/down animations
        if (this.cursors.left.isDown)
        {
            this.player.anims.play('left', true);
            this.player.flipX = true;
        }
        else if (this.cursors.right.isDown)
        {
            this.player.anims.play('right', true);
            this.player.flipX = false;
        }
        else if (this.cursors.up.isDown)
        {
            this.player.anims.play('up', true);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.anims.play('down', true);
        }
        else
        {
            this.player.anims.stop();
        }
    }
    
});

export default WorldScene;