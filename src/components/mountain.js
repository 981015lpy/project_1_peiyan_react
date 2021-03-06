/**
 * @name: CREATE THE MOUNTAIN BY USING NOISE
 */
export default function mountain(p5, canvasWidth, canvasHeight, mountainTall, mountainNum, moveSpeed) {
  let noiseScale = 0.01
  let t = p5.millis() / 1000
  
  p5.push()
  for (let k = 0; k < mountainNum; k++) {
    for (let x = 0.5; x < canvasWidth; x++){
      let noiseVal = p5.noise((moveSpeed * t + x) * noiseScale + k * 100)
      p5.stroke(200 - 40 * k)
      let mountainstall = canvasHeight - mountainTall + noiseVal * 160 + 50 * k
      p5.line(x, mountainstall, x, canvasHeight)
    }
  }
  p5.pop()
}
