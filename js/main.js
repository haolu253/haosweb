$(document).ready(function () {

    setTimeout(function () {
        $('.mam-fade').fadeOut(1000);
        $('.mam-logo').removeClass('d-none');
        $('.mam-logo-gif').addClass('d-none');
    }, 5000);

    setTimeout(function () {
        var canvas = document.getElementById('fruitbasket');
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
                frameRate: 60
            }
        });

        var squares = [];
        var textures = ['../img/fruit1.png', '../img/fruit2.png', '../img/fruit3.png', '../img/fruit4.png', '../img/fruit5.png'];
        var dropInterval = 200;
        var currentSquareIndex = 0;

        function createSquare() {
            if (currentSquareIndex < textures.length) {
                var texture = textures[currentSquareIndex];
                var squareSize = 100;

                var img = new Image();
                img.onload = function () {
                    var textureWidth = img.width;
                    var textureHeight = img.height;

                    var square = Matter.Bodies.rectangle(
                        Math.random() * window.innerWidth,
                        -10,
                        squareSize,
                        squareSize * (textureHeight / textureWidth),
                        {
                            density: 0.04,
                            friction: 0.01,
                            frictionAir: 0.00001,
                            restitution: 0.8,
                            render: {
                                sprite: {
                                    texture: texture,
                                    fillStyle: '#F35e66',
                                    strokeStyle: 'transparent',
                                    lineWidth: 1
                                }
                            }
                        }
                    );

                    Matter.Body.setVelocity(square, { x: 0, y: 22 });
                    squares.push(square);
                    Matter.World.add(world, square);
                    currentSquareIndex++;
                    setTimeout(createSquare, dropInterval);
                };

                img.src = texture;
            }
        }

        createSquare();

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
        Matter.Engine.run(engine);
        Matter.Render.run(render);
    }, 5100);
});
