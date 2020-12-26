var car, wall;
var speed, weight;
var deformation; 


function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  thickness = random (22,83);

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);

  wall = createSprite(1200,200,thickness ,height/2);
  wall.shapeColor = color (80,80,80);
}

function draw() {
  background(0);    
  drawSprites();
 
  deformation = (0.5 * weight * speed * speed) / 22500;


 if (bullet.x - wall.x < wall.width/2 + bullet.width/2 && wall.x - bullet.x < wall.width/2 + bullet.width/2 )  {
    
    bullet.velocityX = 0;

    if (deformation < 100) {
      wall.shapeColor = color (0,225, 0);
    }
  
    else if ((deformation > 100) && (deformation < 180)) {
      wall.shapeColor = color (230,230, 0);
    }
  
    else if (deformation > 180) {
      wall.shapeColor = color (255,0, 0);
    }
  
    else bullet.shapeColour = color (80,70,80);
  }
}