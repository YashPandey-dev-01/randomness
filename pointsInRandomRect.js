const r = require("raylib");

function generateCoordinates(lowerBound, upperBound, n) {
  const coordinates = [];
  const range = upperBound - lowerBound;

  for (let coordCount = 0; coordCount < n; coordCount++) {
    const randomNum = Math.random() * range;
    const xCoord = randomNum + lowerBound;

    coordinates.push(xCoord);
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

  const x1 = 200;
  const x2 = 800;
  const y1 = 200;
  const y2 = 400;
  const numOfPoints = 500;
  const pointSize = 10;

  const xCoordinates = generateCoordinates(x1, x2, numOfPoints);
  const yCoordinates = generateCoordinates(y1, y2, numOfPoints);

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
  for (let coordNum = 0; coordNum < world.xCoordinates.length; coordNum++) {
    const x = world.xCoordinates[coordNum];
    const y = world.yCoordinates[coordNum];

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