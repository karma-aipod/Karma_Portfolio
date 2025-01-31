import { useEffect, useRef } from "react";
import Matter from "matter-js";

interface GravityProps {
  gravity: { x: number; y: number };
  children: React.ReactNode;
  className?: string;
}

export const Gravity: React.FC<GravityProps> = ({ gravity, children, className }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engine = useRef(Matter.Engine.create());
  const render = useRef(Matter.Render.create({
    element: sceneRef.current!,
    engine: engine.current,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      wireframes: false,
    },
  }));

  useEffect(() => {
    const { world } = engine.current;
    Matter.World.gravity.y = gravity.y;
    Matter.World.gravity.x = gravity.x;

    Matter.Engine.run(engine.current);
    Matter.Render.run(render.current);

    return () => {
      Matter.Render.stop(render.current);
      Matter.Engine.clear(engine.current);
    };
  }, [gravity]);

  return (
    <div ref={sceneRef} className={className}>
      {children}
    </div>
  );
};

interface MatterBodyProps {
  matterBodyOptions: Matter.BodyDefinition;
  x: string;
  y: string;
  angle: number;
  children: React.ReactNode;
}

export const MatterBody: React.FC<MatterBodyProps> = ({ matterBodyOptions, x, y, angle, children }) => {
  const bodyRef = useRef<Matter.Body>();

  useEffect(() => {
    const { x: xPos, y: yPos } = matterBodyOptions;
    const body = Matter.Bodies.rectangle(parseFloat(x), parseFloat(y), 50, 50, {
      ...matterBodyOptions,
      angle,
    });
    Matter.World.add(Matter.Engine.world, body);
    bodyRef.current = body;

    return () => {
      if (bodyRef.current) {
        Matter.World.remove(Matter.Engine.world, bodyRef.current);
      }
    };
  }, [matterBodyOptions, x, y, angle]);

  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `rotate(${angle}rad)` }}>
      {children}
    </div>
  );
};
