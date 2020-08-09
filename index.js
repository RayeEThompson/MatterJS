const {
  Engine,
  Render,
  Runner,
  World,
  Bodies,
  MouseConstraint,
  Mouse,
} = Matter;

//canvass dimensions
const width = 800;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width,
    height,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

//Control World with Mouse
World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);

//Walls for canvass
const walls = [
  Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
  Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
  Bodies.rectangle(800, 300, 40, 600, { isStatic: true }),
];
World.add(world, walls);

//Shapes in the world
for (let i = 0; i <= 25; i++) {
  if (Math.random() < 0.3) {
    World.add(
      world,
      Bodies.rectangle(Math.random() * width, Math.random() * height, 60, 40)
    );
  } else if (Math.random() >= 0.3 || Math.random <= 0.66) {
    World.add(
      world,
      Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50)
    );
  } else {
    World.add(
      world,
      Bodies.circle(Math.random() * width, Math.random() * height, 35)
    );
  }
}
