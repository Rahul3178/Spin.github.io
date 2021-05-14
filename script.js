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
function create()
{
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
    // for hidden the unwanted part just use depth property which is by default=0; change into 1,-1,0;
    
    // add event listener pointerDown and function spinwheel
    this.input.on("pointerdown",spinwheel,this);
    // here this is used for the remove undefine error of spinwheel function here "pointer" means touch or click on the screen  
    
}
function update(){
    // now spin the wheel thats means by changing its angles. this can be done in update part bcz this angle is continuously changing
  //  this.wheel.angle +=1;// this function rotate one degree angle for anti-clock rotation use -=1 insted of +;
   
    
}

// event listner function

function spinwheel()
{
    console.log("time to spin the wheel");
    /*this.wheel.angle +=1300;
     this would show an error ->angle property was not define bcz this spin function is not a part of scene .
     -> also it rotate the image very fast for this purpose we use another function /property called tween
    */
    let round=Phaser.Math.Between(2,10);
        console.log(round);
    let ran1 = Phaser.Math.Between(0,8)*42;
        console.log(ran1);
    let ran2=round*360+ran1;
    let tween =this.tweens.add({
        targets: this.wheel,
        angle : ran2,
        ease:"cubic.easeOut",
        delay:2000,
        duration:6000
    });
   
}
 /*
     alpha:0.1 this property change the transparency only value from 1 - 0;
    *-> now there is a problem the wheel does not stop slowely for this purpose we use (ease->property )
    --> another problem the pin stop on same block always->for this purpose we are using random number generation;
    ->
    there is 8 blocks in circle then we generate a randon number between 0-8 and the wheel one rotation =360->360/8=42 aprox this will be the rotation of one color block after->>randomnumber*42 asign to the angle property;
    */