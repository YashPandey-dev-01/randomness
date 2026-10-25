const r = require("raylib");

function calcAvg(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
}

function generatelinesXCoord(upperBound, n) {
  const linesXCoord = [];

  for (let i = 0; i < n; i++) {
    const randomNum = Math.random() * upperBound;
    const randomNum2 = Math.random() * upperBound;
    const randomNum3 = Math.random() * upperBound;
    const randomNum4 = Math.random() * upperBound;

    const randomAvg = calcAvg(randomNum, randomNum2, randomNum3, randomNum4);

    linesXCoord.push(randomAvg);
  }

  return linesXCoord;
}

function initializeGraphCoords(coords, horzAxisUpperBound, horzAxisStart) {
  for (let i = 0; i <= horzAxisUpperBound; i++) {
    coords[i] = { x: i, y: horzAxisStart };
  }

  return coords;
}

function calcGraphYCoords(coords, linesXCoord) {
  for (let i = 0; i < linesXCoord.length; i++) {
    const coordsIdx = Math.trunc(linesXCoord[i]);
    coords[coordsIdx].y = coords[coordsIdx].y - 1;
  }

  return coords;
}

function calGraphCoords(linesXCoord, horzAxisStart, horzAxisUpperBound) {
  const coords = [];

  initializeGraphCoords(coords, horzAxisUpperBound, horzAxisStart);
  calcGraphYCoords(coords, linesXCoord);

  return coords;
}

function setup() {
  const screen = {
    width: 1000,
    height: 520
  }

  const title = "Randomness";
  const fps = 10;

  const upperBound = 1000;
  const numOfLines = 100000;
  const linesXCoord = generatelinesXCoord(upperBound, numOfLines);

  const graphHorzAxisStart = 450;
  const graphCoordinates = calGraphCoords(linesXCoord, graphHorzAxisStart, upperBound);

  const colorPallete = {
    bg: r.BLUE,
    line: r.WHITE,
    graph: r.RED
  }

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, title);
  r.SetTargetFPS(fps);

  return { screen, linesXCoord, colorPallete, graphCoordinates };
}

function drawRandomLines(linesXCoord, screenHeight, color) {
  for (const x of linesXCoord) {
    r.DrawLine(x, 0, x, screenHeight, color);
  }
}

function drawGraph(coords, color) {
  for (let i = 0; i < coords.length - 1; i++) {
    r.DrawLineV(coords[i], coords[i + 1], color);
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(world.colorPallete.bg);

  drawRandomLines(world.linesXCoord, world.screen.height, world.colorPallete.line);
  drawGraph(world.graphCoordinates, world.colorPallete.graph);

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
