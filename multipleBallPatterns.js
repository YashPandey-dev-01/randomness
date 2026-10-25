const r = require("raylib");

function choosePatternColor(colorPalette) {
  const randomNumber = Math.trunc(Math.random() * 7);
  return colorPalette[randomNumber];
}

function calcCoordinates(circle, numOfPoints) {
  const disBetweenPoints = (Math.PI * 2) / numOfPoints;
  const coords = [];

  for (let pointNum = 0; pointNum < numOfPoints; pointNum++) {
    const radian = disBetweenPoints * pointNum;
    const randomNumber = Math.random() * 10;
    const x = circle.centre.x + circle.radius * Math.cos(radian) - randomNumber;
    const y = circle.centre.y + circle.radius * Math.sin(radian) - randomNumber;

    coords.push({ x, y });
  }

  return coords;
}

function setup() {
  const screen = {
    WIDTH: 1000,
    HEIGHT: 1000,
  };

  const circle = [
    {
      centre: { x: 100, y: 100 },
      radius: 50,
    },
    {
      centre: { x: 300, y: 100 },
      radius: 50,
    },
    {
      centre: { x: 500, y: 100 },
      radius: 50,
    },
    {
      centre: { x: 700, y: 100 },
      radius: 50,
    },
    {
      centre: { x: 900, y: 100 },
      radius: 50,
    },
    {
      centre: { x: 100, y: 300 },
      radius: 50,
    },
    {
      centre: { x: 300, y: 300 },
      radius: 50,
    },
    {
      centre: { x: 500, y: 300 },
      radius: 50,
    },
    {
      centre: { x: 700, y: 300 },
      radius: 50,
    },
    {
      centre: { x: 900, y: 300 },
      radius: 50,
    },
    {
      centre: { x: 100, y: 500 },
      radius: 50,
    },
    {
      centre: { x: 300, y: 500 },
      radius: 50,
    },
    {
      centre: { x: 500, y: 500 },
      radius: 50,
    },
    {
      centre: { x: 700, y: 500 },
      radius: 50,
    },
    {
      centre: { x: 900, y: 500 },
      radius: 50,
    },
    {
      centre: { x: 100, y: 700 },
      radius: 50,
    },
    {
      centre: { x: 300, y: 700 },
      radius: 50,
    },
    {
      centre: { x: 500, y: 700 },
      radius: 50,
    },
    {
      centre: { x: 700, y: 700 },
      radius: 50,
    },
    {
      centre: { x: 900, y: 700 },
      radius: 50,
    },
    {
      centre: { x: 100, y: 900 },
      radius: 50,
    },
    {
      centre: { x: 300, y: 900 },
      radius: 50,
    },
    {
      centre: { x: 500, y: 900 },
      radius: 50,
    },
    {
      centre: { x: 700, y: 900 },
      radius: 50,
    },
    {
      centre: { x: 900, y: 900 },
      radius: 50,
    },
  ];

  const numOfPoints = 30;

  const colorPalette = [r.YELLOW, r.BLUE, r.VIOLET, r.GREEN, r.RED, r.PINK, r.BLACK];

  const patterns = [
    {
      coords: calcCoordinates(circle[0], numOfPoints),
      center: circle[0].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[1], numOfPoints),
      center: circle[1].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[2], numOfPoints),
      center: circle[2].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[3], numOfPoints),
      center: circle[3].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[4], numOfPoints),
      center: circle[4].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[5], numOfPoints),
      center: circle[5].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[6], numOfPoints),
      center: circle[6].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[7], numOfPoints),
      center: circle[7].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[8], numOfPoints),
      center: circle[8].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[9], numOfPoints),
      center: circle[9].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[10], numOfPoints),
      center: circle[10].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[11], numOfPoints),
      center: circle[11].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[12], numOfPoints),
      center: circle[12].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[13], numOfPoints),
      center: circle[13].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[14], numOfPoints),
      center: circle[14].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[15], numOfPoints),
      center: circle[15].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[16], numOfPoints),
      center: circle[16].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[17], numOfPoints),
      center: circle[17].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[18], numOfPoints),
      center: circle[18].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[19], numOfPoints),
      center: circle[19].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[20], numOfPoints),
      center: circle[20].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[21], numOfPoints),
      center: circle[21].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[22], numOfPoints),
      center: circle[22].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[23], numOfPoints),
      center: circle[23].centre,
      color: choosePatternColor(colorPalette)
    },
    {
      coords: calcCoordinates(circle[24], numOfPoints),
      center: circle[24].centre,
      color: choosePatternColor(colorPalette)
    },
  ]

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.WIDTH, screen.HEIGHT, "Raylib using Trignometry Concepts");
  r.SetTargetFPS(60);

  return patterns;
};

function drawPattern(coords, centre, color) {
  for (let i = coords.length - 1; i >= 0; i--) {
    const p1 = coords.at(i);
    const p2 = coords.at(i - 1);

    r.DrawTriangle(centre, p1, p2, color);
  }
}

function draw(patterns) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  for (const pattern of patterns) {
    drawPattern(pattern.coords, pattern.center, pattern.color);
  }

  r.EndDrawing();
}

function loop(patterns) {
  while (!r.WindowShouldClose()) {
    draw(patterns);
  }
}

function teardown() {
  r.CloseWindow();
}

function main() {
  const patterns = setup();
  loop(patterns);
  teardown();
}

main();