const r = require("raylib");

function degreeToRadian(degree) {
  return degree * (Math.PI * 180);
}

function generateAngles(n) {
  const angles = [];

  for (let i = 0; i < n; i++) {
    const randomNum = Math.random() * 360;
    const angle = degreeToRadian(randomNum);

    angles.push(angle);
  }

  return angles;
}

function generateRandomNum(upperBound) {
  const randomNum = Math.random() * upperBound;

  return randomNum;
}

function generateCoordinates(centre, radius, n) {
  const coordinates = [];
  const angles = generateAngles(n);

  for (const angle of angles) {
    const randomRadius = generateRandomNum(radius);
    const x = centre.x + (randomRadius * Math.cos(angle));
    const y = centre.y + (randomRadius * Math.sin(angle));

    coordinates.push({ x, y });
  }

  return coordinates;
}

function setup() {
  const screen = {
    width: 1000,
    height: 1000
  }

  const title = "Randomness";
  const fps = 10;

  const radius = 300;
  const centre = { x: 500, y: 600 };
  const numOfPoints = 1000;
  const pointSize = 10;

  const coordinates = generateCoordinates(centre, radius, numOfPoints);

  const colorPallete = {
    bg: r.BLUE,
    point: r.GOLD
  }

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, title);
  r.SetTargetFPS(fps);

  return { coordinates, colorPallete, pointSize };
}

function drawRandomPoints(world) {
  for (let i = 0; i < world.coordinates.length; i++) {
    const x = world.coordinates[i].x;
    const y = world.coordinates[i].y;

    r.DrawCircle(x, y, world.pointSize, world.colorPallete.point);
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(world.colorPallete.bg);

  drawRandomPoints(world);

  r.EndDrawing();
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    draw(world);
  }
}

function teardown() {
  r.CloseWindow();
}

function main() {
  const world = setup();

  loop(world);
  teardown();
}

main();
