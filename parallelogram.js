const r = require("raylib");

function degreeToRadian(degree) {
  return degree * (Math.PI / 180);
}

function generateCoordinates(paralleogram, numOfPoints) {
  const coordinates = [];

  const horzLowerBound = paralleogram.x1;
  const horzUpperBound = paralleogram.x1 + paralleogram.width;
  const horzRange = horzUpperBound - horzLowerBound;

  const verLowerBound = paralleogram.y1;
  const verUpperBound = paralleogram.y1 + paralleogram.height;
  const verRange = verUpperBound - verLowerBound;

  for (let pointCount = 0; pointCount < numOfPoints; pointCount++) {
    const horzRandomNum = Math.random() * horzRange;
    const verRandomNum = Math.random() * verRange;

    const baseAngle = degreeToRadian(180 - paralleogram.angle);
    const horzOffset = verRandomNum / Math.tan(baseAngle);
    const xCoord = horzRandomNum + horzLowerBound - horzOffset;

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
    width: 600,
    height: 300,
    angle: 110,
    x1: 200,
    y1: 20,
  }

  const numOfPoints = 1000;
  const pointSize = 10;

  const coordinates = generateCoordinates(paralleogram, numOfPoints);

  const colorPallete = {
    bg: r.BLUE,
    point: { r: 215, g: 215, b: 0, a: 150 }
  }

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, title);
  r.SetTargetFPS(fps);

  return { coordinates, colorPallete, pointSize };
}

function drawRandomPoints(world) {
  for (let coordNum = 0; coordNum < world.coordinates.length; coordNum++) {
    const x = world.coordinates[coordNum].x;
    const y = world.coordinates[coordNum].y;

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
