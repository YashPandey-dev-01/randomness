const r = require("raylib");

function generateCoordinates(upperBound, n) {
  const coordinates = [];

  for (let i = 0; i < n; i++) {
    const randomNum = Math.random() * upperBound;

    coordinates.push(randomNum);
  }

  return coordinates;
}

function setup() {
  const screen = {
    width: 1000,
    height: 520
  }

  const title = "Randomness";
  const fps = 10;

  const width = 800;
  const height = 400;
  const numOfPoints = 1000;
  const pointSize = 10;

  const xCoordinates = generateCoordinates(width, numOfPoints);
  const yCoordinates = generateCoordinates(height, numOfPoints);

  const colorPallete = {
    bg: r.BLUE,
    point: { r: 255, g: 255, b: 255, a: 100 }
  }

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, title);
  r.SetTargetFPS(fps);

  return { screen, xCoordinates, yCoordinates, colorPallete, pointSize };
}

function drawRandomPoints(world) {
  for (let i = 0; i < world.xCoordinates.length; i++) {
    const x = world.xCoordinates[i];
    const y = world.yCoordinates[i];

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
