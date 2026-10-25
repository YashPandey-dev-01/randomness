const r = require("raylib");

function calcAvg(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
}

function generateXCoordinates(upperBound, n) {
  const xCoordinates = [];

  for (let coordCount = 0; coordCount < n; coordCount++) {
    const randomNum = Math.random() * upperBound;
    const randomNum2 = Math.random() * upperBound;
    const randomNum3 = Math.random() * upperBound;
    const randomNum4 = Math.random() * upperBound;

    const randomAvg = calcAvg(randomNum, randomNum2, randomNum3, randomNum4);

    xCoordinates.push(randomAvg);
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

  const upperBound = 1000;
  const numOfLines = 100;
  const xCoordinates = generateXCoordinates(upperBound, numOfLines);

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
