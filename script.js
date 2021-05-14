// set up basic game with phaser
// now create object for the game
 
let config ={
    width:628,
    height:368,
    scene:{
        preload:preload,
        create:create,
        update: update,
        
    }
};
// now assign config object to Game class and create object of game class;

let game=new Phaser.Game(config);
// we can not call any function we just define those function this Game class of phaser by default call it automatically

 function preload(){
     // load an image
     this.load.image('background',"icon/back.jpg");// this will load an image not create into scene .it just send request to load image 
     this.load.image('wheel',"icon/wheel.png");
     this.load.image('stand',"icon/stand.png");
     this.load.image('pin',"icon/pin.png");
 }
function create(){
    // decide height and width of game using game and config object which we are using for our images
    let w= game.config.width;
    let h= game.config.height;
    // create the image on scene
    this.add.sprite(w/2,h/2,'background');
 this.wheel=this.add.sprite(w/2,h/2,'wheel');
    // if we need to middle of the scene like height or width we use this (this.add.sprite(w/2,h/2,wheel))
    // now we have to reduce the size of object that means scaling the object in phaser we have function for it.
  this.wheel.setScale(1.9);
   this.wheel.depth=1;
    
    // it will reduce the size of wheel by 75%
  this.pin=this.add.sprite(225,185,'pin');
    // scaling for size reduce
    this.pin.setScale(0.50);
    this.pin.angle=180+90;
    this.pin.depth=1;
    
    // stand
    this.stand=this.add.sprite(315,292,'stand');
    // scaling stand
    this.stand.setScale(1.3);
    // for hidden the unwanted part just use depth property which is by default=0; change into 1;
    
    
}
function update(){
    // now spin the wheel thats means by changing its angles. this can be done in update part bcz this angle is continuously changing
    this.wheel.angle +=1;// this function rotate one degree angle
   
    
}