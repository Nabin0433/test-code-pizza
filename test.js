import fs from "fs";

const input = fs.readFileSync("input.txt", "utf8").trim();

const move = ([x, y], dir) => {
    switch (dir) {
        case "^": return [x, y + 1];
        case "v": return [x, y - 1];
        case ">": return [x + 1, y];
        case "<": return [x - 1, y];
        default: return [x, y];
    }
}

const part1 = (directions) => {
    let pos = [0, 0];
    const visited = new Set(["0,0"]);

    for (const dir of directions) {
        // console.log(dir);
        
        pos = move(pos, dir);
        visited.add(pos.join(","));
    }

    // console.log(visited);
    

    return visited.size;
}

const part2 = (directions) => {
    let maria = [0, 0];
    let clovis = [0, 0];
    const visited = new Set(["0,0"]);

    for (let i = 0; i < directions.length; i++) {
        if (i % 2 === 0) {
            maria = move(maria, directions[i]);
            visited.add(maria.join(","));
        } else {
            clovis = move(clovis, directions[i]);
            visited.add(clovis.join(","));
        }
    }

    return visited.size;
}

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
