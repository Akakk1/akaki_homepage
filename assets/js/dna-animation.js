// DNA Animation JavaScript
const dnaElement = document.getElementById('dna');
const dnaChars = ['A', 'T', 'C', 'G', '|', ' ', '/', '\\', '-'];
const width = 50;
const height = 20;
const rotationSpeed = 0.2;
let angle = 0;

function drawDNA() {
    let output = '';
    for (let y = 0; y < height; y++) {
        let leftX = Math.floor((width / 2) + Math.sin(angle + y / 2) * 15);
        let rightX = Math.floor((width / 2) + Math.cos(angle + y / 2) * 15);

        for (let x = 0; x < width; x++) {
            if (x === leftX) {
                output += dnaChars[y % 4];  // Left strand
            } else if (x === rightX) {
                output += dnaChars[(y + 2) % 4];  // Right strand
            } else if (x > leftX && x < rightX && y % 2 === 0) {
                output += dnaChars[4];  // Connector
            } else {
                output += dnaChars[5];  // Space
            }
        }
        output += '\n';
    }

    dnaElement.textContent = output;
    angle += rotationSpeed;  // Increase rotation angle
}

setInterval(drawDNA, 50);  // Update every 50ms
