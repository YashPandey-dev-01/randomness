const r = require("raylib");

function generateCoordinates(paralleogram, numOfPoints) {
  const coordinates = [];

  const horzLowerBound = paralleogram.x1;
  const horzUpperBound = paralleogram.x1 + paralleogram.width;
  const horzRange = horzUpperBound - horzLowerBound;

  const verLowerBound = paralleogram.y1;
  const verUpperBound = paralleogram.y1 + paralleogram.height;
  const verRange = verUpperBound - verLowerBound;

  for (let i = 0; i < numOfPoints; i++) {
    const horzRandomNum = Math.random() * horzRange;
    const verRandomNum = Math.random() * verRange;
    const triangleBase = verRandomNum / Math.tan(90);
    const xCoord = horzRandomNum + horzLowerBound + triangleBase;
    console.log(xCoord, verRandomNum);
    coordinates.push({ x: xCoord, y: verRandomNum + verLowerBound });
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

  const paralleogram = {
    width: 500,
    height: 300,
    x1: 500,
    y1: 200
  }

  const numOfPoints = 100;
  const pointSize = 10;

  const coordinates = generateCoordinates(paralleogram, numOfPoints);

  const colorPallete = {
    bg: r.BLUE,
    point: { r: 255, g: 255, b: 255, a: 100 }
  }

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, title);
  r.SetTargetFPS(fps);

  return { screen, coordinates, colorPallete, pointSize, paralleogram };
}

function drawParalleogram(world) {
  const point1 = {
    x: world.paralleogram.x1,
    y: world.paralleogram.y1,
  }
  const point2 = {
    x: world.paralleogram.x1 + world.paralleogram.width,
    y: point1.y,
  }

  const triangleBase = world.paralleogram.height / Math.tan(90);
  const point3 = {
    x: world.paralleogram.x1 + triangleBase,
    y: world.paralleogram.y1 + world.paralleogram.height,
  }
  const point4 = {
    x: point3.x + world.paralleogram.width,
    y: point3.y,
  }

  r.DrawLineEx(point1, point2, 5, r.BLACK);
  r.DrawLineEx(point2, point4, 5, r.BLACK);
  r.DrawLineEx(point4, point3, 5, r.BLACK);
  r.DrawLineEx(point3, point1, 5, r.BLACK);
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

  drawParalleogram(world);
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
