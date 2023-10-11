$(document).ready(function () {
    setTimeout(function () {
        $('.mam-fade').fadeOut(1000);
        $('.mam-logo').removeClass('d-none');
        $('.mam-logo-gif').addClass('d-none');
    }, 5000);
    setTimeout(function () {
        // Fetch our canvas
        var canvas = document.getElementById('world');

        // Setup Matter JS
        var engine = Matter.Engine.create();
        var world = engine.world;
        var render = Matter.Render.create({
            canvas: canvas,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                background: 'transparent',
                wireframes: false,
                showAngleIndicator: false,
                frameRate: 60  // Set a higher frame rate
            }
        });

        // Create an array to store the balls
        var balls = [];
        var dropInterval = 200; // Delay between ball drops in milliseconds
        var currentBallIndex = 0;

        function createBall() {
            if (currentBallIndex < 5) {
                var ball = Matter.Bodies.circle(
                    Math.random() * window.innerWidth,  // Random x-coordinate within the canvas width
                    -10,  // Top of the canvas
                    50,  // Radius of the ball
                    {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.5,
                        render: {
                            fillStyle: '#F35e66',
                            strokeStyle: 'transparent',
                            lineWidth: 1
                        }
                    }
                );

                // Add initial velocity to the balls to make them drop immediately
                Matter.Body.setVelocity(ball, { x: 0, y: 22 });
                balls.push(ball);
                Matter.World.add(world, ball);
                currentBallIndex++;
                setTimeout(createBall, dropInterval); // Continue with the next ball
            }
        }

        // Start creating balls
        createBall();

        // Create invisible boundaries (walls) as the window boundaries
        var wallOptions = {
            isStatic: true,
            render: {
                visible: false
            }
        };
        var boundaries = [
            Matter.Bodies.rectangle(window.innerWidth / 2, -10, window.innerWidth, 20, wallOptions), // Top wall
            Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 10, window.innerWidth, 20, wallOptions), // Bottom wall
            Matter.Bodies.rectangle(-10, window.innerHeight / 2, 20, window.innerHeight, wallOptions), // Left wall
            Matter.Bodies.rectangle(window.innerWidth + 10, window.innerHeight / 2, 20, window.innerHeight, wallOptions) // Right wall
        ];
        Matter.World.add(world, boundaries);

        // Make interactive
        var mouseConstraint = Matter.MouseConstraint.create(engine, {
            element: canvas,
            constraint: {
                render: {
                    visible: false
                },
                stiffness: 0.8
            }
        });
        Matter.World.add(world, mouseConstraint);

        // Start the engine
        Matter.Engine.run(engine);
        Matter.Render.run(render);
    }, 5100);
});
