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
        
        var circles = [];
        
            var textures = ['img/fruit1.png', 'img/fruit2.png', 'img/fruit3.png', 'img/fruit4.png', 'img/fruit5.png'];
            var circleRadius = 50;
        
        var dropInterval = 300;
        var currentCircleIndex = 0;
        
        function createCircle() {
            if (currentCircleIndex < textures.length) {
                var texture = textures[currentCircleIndex];
                var circle = Matter.Bodies.circle(
                    Math.random() * window.innerWidth,
                    -10,
                    circleRadius,
                    {
                        density: 0.5,
                        friction: 0.05,
                        frictionAir: 0.001,
                        restitution: 0.3,
                        render: {
                            sprite: {
                                texture: texture,
                                xScale: 0.5, // Scale down the texture
                                yScale: 0.5, // Scale down the texture
                                fillStyle: '#F35e66',
                                strokeStyle: 'transparent',
                                lineWidth: 1
                            }
                        }
                    }
                );
        
                Matter.Body.setVelocity(circle, { x: 0, y: 13 });
                circles.push(circle);
                Matter.World.add(world, circle);
                currentCircleIndex++;
                setTimeout(createCircle, dropInterval);
            }
        }
        
        createCircle();
        
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
        
        // Make the circles bounce on hover
        canvas.addEventListener('mousemove', function (event) {
            var mousePosition = Matter.Mouse.getMousePosition(mouseConstraint.mouse);
        
            for (var i = 0; i < circles.length; i++) {
                var circle = circles[i];
                var distance = Matter.Vector.magnitude(Matter.Vector.sub(circle.position, mousePosition));
        
                if (distance < circleRadius) {
                    // Apply upward force when the mouse is over a circle
                    Matter.Body.applyForce(circle, circle.position, { x: 0, y: -0.1 });
                }
            }
        });
        
        // Start the engine
        Matter.Engine.run(engine);
        Matter.Render.run(render);
    }, 5100);
});
