/**
 * @name: CREATE GROUND
 */
export default function ground(p5, startPoint, width, height) {
  p5.fill(30)
  p5.rect(startPoint.x, startPoint.y, width, height)
}
