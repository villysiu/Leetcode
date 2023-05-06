/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    let output = [];
    let dfs = function(col, row) {
        if (row === grid.length) {
            return col;
        }

        if (grid[row][col] === -1 && col - 1 < 0) {
            return -1;
        }
        if (grid[row][col] === 1 && col + 1 >= grid[0].length) {
            return -1;
        }
        if (grid[row][col] === 1 && grid[row][col+1] === -1) {
            return -1;
        }
        if (grid[row][col] === -1 && grid[row][col-1] === 1) {
            return -1;
        }

        if (grid[row][col] === 1) {
            return dfs(col+1, row+1);
        } else {
            return dfs(col-1, row+1)
        }
    } 

    for (let i = 0; i < grid[0].length; i++) {
        output.push(dfs(i, 0));
    }
    return output;
    
};