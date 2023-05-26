/**
 * @param {number[]} piles
 * @return {number}
 */
// dp[i][j] is the maximum number of stones Alex can get when starting at index i with M = j
// sufsum[i] is the total number of stones from index i to the end
// The dp matrix for Lee is the same. And the stragegy for Alex is to choose an optimal X to minimize the number of stones Lee can get when starting at index (i + X) with M = max(X,j). Here we have the recurrence formula

// dp[i][j] = max(sufsum[i] - dp[i + X][max(j, X)]) where 1<= X <= 2j;
var stoneGameII = function(piles) {
    
    const length = piles.length;
  const dp = [...Array(length + 1).fill(null)].map((_) =>
    Array(length + 1).fill(0)
  );
  const sufsum = new Array(length + 1).fill(0);
  for (let i = length - 1; i >= 0; i--) {
    sufsum[i] = sufsum[i + 1] + piles[i];
  }
  for (let i = 0; i <= length; i++) {
    dp[i][length] = sufsum[i];
  }
  for (let i = length - 1; i >= 0; i--) {
    for (let j = length - 1; j >= 1; j--) {
      for (let X = 1; X <= 2 * j && i + X <= length; X++) {
        dp[i][j] = Math.max(dp[i][j], sufsum[i] - dp[i + X][Math.max(j, X)]);
      }
    }
  }
  return dp[0][1];
};