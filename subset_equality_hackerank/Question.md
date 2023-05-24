Question:

Given a string of only characters str, seperate the string into subsets such that each subset has the same single-digit total sum. Use an unserscore to seperate subsets in the input string. Return all such subsets creations in a result array, and then sort that array lexicographically before returning it.

Example and Explanation:

Input: "1741380"
Output: ["17_413_80", "174_1380", "1741380"]
Explanation:
The last element in the result array "1741380" is just the input string itself. This is considered to be one of the subsets as the whole input is a subset of itself. Additionally, as this is the only subset, the sum of its string digits is 1+7+4+1+3+8+0 which is 24. With no other subset to compare to, this means that every subset (just the one) has the same single-digit sum. As for the other two:

1+7 -> 8
4+1+3 -> 8
8+0 -> 8

1+7+4 -> 12
1+3+8 -> 12
Another example:

Input: 1111
Output: ["1_1_1_1", "11_11", "1111"]
