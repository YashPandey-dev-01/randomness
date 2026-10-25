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

function square(x) {
  return Math.pow(x, 2);
}

function calcDistanceBetweenPoints(p1, p2) {
  const horzDistance = p1.x - p2.x;
  const verDistance = p1.y - p2.y;

  return Math.sqrt(square(horzDistance) + square(verDistance));
}

function isPointInsideCircle(centre, radius, point) {
  const distanceFromCentre = calcDistanceBetweenPoints(centre, point);

  return distanceFromCentre < radius;
}

function calcpointsInsideCircle(circle, xCoordinates, yCoordinates) {
  let pointsInsideCircle = 0;

  for (let i = 0; i < xCoordinates.length; i++) {
    const point = { x: xCoordinates[i], y: yCoordinates[i] };

    pointsInsideCircle = isPointInsideCircle(circle.centre, circle.radius, point) ?
      pointsInsideCircle + 1 :
      pointsInsideCircle;
  }

  return pointsInsideCircle;
}

function calcRectConfig(x1, x2, y1, y2) {
  return {
    x: x1,
    y: y1,
    width: x2 - x1,
    height: y2 - y1
  }
}

function calcCircleArea(rectObj, numOfPoints, pointsInsideCircle) {
  const rectArea = rectObj.width * rectObj.height;

  return (rectArea * pointsInsideCircle) / numOfPoints;
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

  const numOfPoints = 10000;
  const pointSize = 1;

  const xCoordinates = generateCoordinates(x1, x2, numOfPoints);
  const yCoordinates = generateCoordinates(y1, y2, numOfPoints);

  const circle = {
    centre: { x: 500, y: 450 },
    radius: 70
  }

  const pointsInsideCircle = calcpointsInsideCircle(circle, xCoordinates, yCoordinates);
  const circleArea = calcCircleArea(rectObj, numOfPoints, pointsInsideCircle);

  const colorPallete = {
    bg: r.BLUE,
    point: r.WHITE,
    boundary: r.BLACK,
    text: r.RED
  }

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, title);
  r.SetTargetFPS(fps);

  return { screen, xCoordinates, yCoordinates, colorPallete, pointSize, rectObj, circle, circleArea };
}

function drawRandomPoints(world) {
  for (let i = 0; i < world.xCoordinates.length; i++) {
    const x = world.xCoordinates[i];
    const y = world.yCoordinates[i];

    r.DrawCircle(x, y, world.pointSize, world.colorPallete.point);
  }
}

function drawRectangleBoundary(rectObj, color) {
  r.DrawRectangleLinesEx(rectObj, 3, color);
}

function drawCircleBoundary(circleObj, color) {
  r.DrawCircleLines(circleObj.centre.x, circleObj.centre.y, circleObj.radius, color)
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(world.colorPallete.bg);

  drawRectangleBoundary(world.rectObj, world.colorPallete.boundary);
  drawCircleBoundary(world.circle, world.colorPallete.boundary);
  r.DrawText("" + world.circleArea, 10, 10, 30, world.colorPallete.text);
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
