const r = require("raylib");

function generateCoordinates(lowerBound, upperBound, n) {
  const coordinates = [];
  const range = upperBound - lowerBound;

  for (let i = 0; i < n; i++) {
    const randomNum = Math.random() * range;
    const xCoord = randomNum + lowerBound;

    coordinates.push(xCoord);
  }

  return coordinates;
}

function isInsideCircleBound(circle, coord) {
  return coord > circle.centreX - circle.radius && coord < circle.centreX + circle.radius;
}

function calcpointsInsideCircle(circle, xCoordinates, yCoordinates) {
  let points = 0;
  for (let i = 0; i < xCoordinates.length; i++) {
    isPointInsideHorizontally = isInsideCircleBound(circle, xCoordinates[i]);
    isPointInsideVertically = isInsideCircleBound(circle, yCoordinates[i]);

    if (isPointInsideHorizontally && isPointInsideVertically) {
      points++;
    }
  }
  return points;
}

function calcRectConfig(x1, x2, y1, y2) {
  return {
    x: x1,
    y: y1,
    width: x2 - x1,
    height: y2 - y1
  }
}

function setup() {
  const screen = {
    width: 1000,
    height: 800
  }

  const title = "Randomness";
  const fps = 10;

  const x1 = 200;
  const x2 = 800;
  const y1 = 200;
  const y2 = 700;
  const rectObj = calcRectConfig(x1, x2, y1, y2);

  const numOfPoints = 10;
  const pointSize = 1;

  const xCoordinates = generateCoordinates(x1, x2, numOfPoints);
  const yCoordinates = generateCoordinates(y1, y2, numOfPoints);

  const circle = {
    centreX: 500,
    centreY: 450,
    radius: 200
  }

  const pointsInsideCircle = calcpointsInsideCircle(circle, xCoordinates, yCoordinates);
  console.log(pointsInsideCircle)
  const colorPallete = {
    bg: r.BLUE,
    point: r.WHITE,
    boundary: r.BLACK
  }

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, title);
  r.SetTargetFPS(fps);

  return { screen, xCoordinates, yCoordinates, colorPallete, pointSize, rectObj, circle };
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

  r.DrawRectangleLinesEx(world.rectObj, 3, world.colorPallete.boundary);
  r.DrawCircleLines(world.circle.centreX, world.circle.centreY, world.circle.radius, world.colorPallete.boundary)
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
