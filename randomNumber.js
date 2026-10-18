const r = require("raylib");

function setup() {
  const width = 1100;
  const height = 520;
  const title = "Randomness";
  const fps = 60;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(width, height, title);
  r.SetTargetFPS(fps);
}

function draw(frames) {
  r.BeginDrawing();

  r.EndDrawing();
}

function loop(frames) {
  while (!r.WindowShouldClose()) {
    draw(frames);
  }
}

function teardown() {
  r.CloseWindow();
}

function main() {
  setup();
  loop();
  teardown();
}

main();
