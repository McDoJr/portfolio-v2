const originalD = `
    M150,30 C225,30 270,75 270,150 S225,270 150,270 30,225 30,150 75,30 150,30 Z;
    M144,36 C216,30 276,84 276,150 S216,276 150,276 30,216 30,150 72,36 144,36 Z;
    M150,33 C222,39 273,81 273,150 S222,267 150,267 33,222 33,150 81,33 150,33 Z;
    M150,30 C225,30 270,75 270,150 S225,270 150,270 30,225 30,150 75,30 150,30 Z
`;

export function scalePath(newSize: number = 300): string {
    const originalSize = 300;
    const scaleFactor = newSize / originalSize;

    return originalD.replace(/[-+]?\d*\.?\d+/g, (match) => {
        return (parseFloat(match) * scaleFactor).toFixed(2);
    });
}