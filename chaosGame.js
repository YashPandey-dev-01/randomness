const r = require("raylib");

function chooseRandomCorner(triangle) {
  const randomNum = Math.random() * 3;
  const corner = Math.floor(randomNum);

  return triangle[corner];
}

function defineMultiplePoints(triangle, points, numOfPoints) {
  for (let i = 0; i < numOfPoints - 1; i++) {
    const corner = chooseRandomCorner(triangle);
    const pointX = (points[i].x + corner.x) / 2;
    const pointY = (points[i].y + corner.y) / 2;

    points.push({ x: pointX, y: pointY });
  }
}

function setup() {
  const screen = {
    width: 1000,
    height: 520
  }

  const title = "Randomness";
  const fps = 10;

  const triangle = [
    { x: 500, y: 100 },
    { x: 200, y: 400 },
    { x: 800, y: 400 },
  ]

  const numOfPoints = 100000;
  const points = [];
  points.push({ x: 500, y: 100 });

  defineMultiplePoints(triangle, points, numOfPoints);

  const colorPallete = {
    bg: r.BLACK,
    point: r.RED,
    triangleBoundary: r.WHITE
  }

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, title);
  r.SetTargetFPS(fps);

  return { colorPallete, triangle, points };
}

function drawPoints(points, color) {
  for (const point of points) {
    r.DrawPixelV(point, color)
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(world.colorPallete.bg);

  drawPoints(world.points, world.colorPallete.point);

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
