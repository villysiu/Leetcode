/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(original.length !== m * n)
        return []
    let _ = require("lodash");
    return _.chunk(original, n)
    
};