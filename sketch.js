var bullet,bullet1,bullet2,wall,bullet_spd,bullet1_spd,bullet2_spd,deformation,thickness;

function setup() {
  createCanvas(600,400);
  wall = createSprite(570,200,50,400);
  wall.shapeColor = "green";
  thickness = Math.round(random(22,83));

  bullet = createSprite(0,100,40,20);
  bullet_spd = Math.round(random(20,100));
  bullet.velocityX = bullet_spd;
  bullet.shapeColor = "blue";

  bullet1 = createSprite(0,200,40,20);
  bullet1_spd = Math.round(random(20,100));
  bullet1.velocityX = bullet1_spd;

  bullet2 = createSprite(0,300,40,20);
  bullet2_spd = Math.round(random(20,100));
  bullet2.velocityX = bullet2_spd;

  
}

function draw() {
  background(255,255,255);  
  bullet.collide(wall);
  bullet1.collide(wall);
  bullet2.collide(wall);

  if(wall.x - bullet.x == wall.width/2 + bullet.width/2) {
    deformation = 0.5*bullet_spd*bullet_spd*2260/22500;
    console.log("bullet" + deformation);
    if(deformation > 180) bullet.shapeColor = "red";
    if(deformation > 80 && deformation < 180) bullet.shapeColor = "yellow";
    else if (deformation < 80) bullet.shapeColor = "green"; 
  }

  if(wall.x - bullet1.x == wall.width/2 + bullet1.width/2) {
    deformation = 0.5*bullet1_spd*bullet1_spd*2260/22500;
    console.log("bullet1" + deformation);
    if(deformation > 180) bullet1.shapeColor = "red";
    if(deformation > 80 && deformation < 180) bullet1.shapeColor = "green";
    else if(deformation < 80) bullet1.shapeColor = "violet";
  }

  if(wall.x - bullet2.x == wall.width/2 + bullet2.width/2) {
    deformation = 0.5*bullet2_spd*bullet2_spd*2260/22500;
    console.log("bullet2" + deformation);
    if(deformation > 180) bullet2.shapeColor = "red";
    if(deformation > 80 && deformation < 180) bullet2.shapeColor = "black";
    else if(deformation < 80) bullet2.shapeColor = "orange"; 
  }

   if (hascollided(bullet , wall)) {
      bullet.velocityX = 0;
      var damage = 0.5*spd*spd/(thickness*thickness*thickness);

     if(damage>10) {
       wall.shapeColor = "yellow";
     }

   }
  drawSprites();
}

function hascollided(bullet , wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  
  if(bulletRightEdge > wallLeftEdge) {
    return true;
  }
  else {
    return false;
  }

}


