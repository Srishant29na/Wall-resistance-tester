var bullet, wall;
var speed, weight;
var damage, Thickness;

function setup() 
{
  createCanvas(800,400);

  speed = random(23, 92)
  weight = random(30, 52)
  Thickness = random(22, 83)

  bullet = createSprite(100, 200, 20, 20);
  bullet.shapeColor = "white"

  wall = createSprite(700, 200, Thickness, 200)
  wall.shapeColor = "brown"

}

function draw() 
{
  background(0);

  bullet.collide(wall);

  bullet.velocityX = speed;
  bullet.weight = weight

  if (bullet.isTouching(wall))
  {
    damage = 0.5 * weight * speed * speed / (Thickness * Thickness * Thickness)
  }

  if (bullet.isTouching(wall) && damage < 10)
  {
    bullet.collide(wall);
    bullet.shapeColor = "green"
  }

  if (bullet.isTouching(wall) && damage > 10)
  {
    bullet.collide(wall);
    bullet.shapeColor = "red"
  }

  drawSprites();
}