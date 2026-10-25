const r = require("raylib");

function generateXCoordinates(lowerBound, upperBound, n) {
  const xCoordinates = [];
  const range = upperBound - lowerBound;

  for (let coordCount = 0; coordCount < n; coordCount++) {
    const randomNum = Math.random() * range;
    const xCoord = randomNum + lowerBound;

    xCoordinates.push(xCoord);
  }

  return xCoordinates;
}

function setup() {
  const screen = {
    width: 1000,
    height: 520
  }

  const title = "Randomness";
  const fps = 10;

  const lowerBound = 300;
  const upperBound = 700;
  const numOfLines = 100;
  const xCoordinates = generateXCoordinates(lowerBound, upperBound, numOfLines);

  const colorPallete = {
    bg: r.BLUE,
    line: r.WHITE
  }

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, title);
  r.SetTargetFPS(fps);

  return { screen, xCoordinates, colorPallete };
}

function drawRandomLines(xCoordinates, screenHeight, color) {
  for (const x of xCoordinates) {
    r.DrawLine(x, 0, x, screenHeight, color);
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(world.colorPallete.bg);

  drawRandomLines(world.xCoordinates, world.screen.height, world.colorPallete.line);

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
