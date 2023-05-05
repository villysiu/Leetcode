/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res=[]
    function helper(x1,y1,x2,y2){
        if(x1===x2){
            for(let c=y1;c<=y2;c++)
                res.push(matrix[x1][c])
        }
        else if(y1===y2){
            for(let r=x1;r<=x2;r++)
                res.push(matrix[r][y1])
        }
        else{
            for(let c=y1;c<y2;c++)
                res.push(matrix[x1][c])
            for(let r=x1;r<x2;r++)
                res.push(matrix[r][y2])
            for(let c=y2;c>y1;c--)
                res.push(matrix[x2][c])
            for(let r=x2;r>x1;r--)
                res.push(matrix[r][y1])
        }
        // console.log(res)
    }
    let x1=0, y1=0, x2=matrix.length-1, y2=matrix[0].length-1
    
    while(x1<=x2 && y1<=y2){
        helper(x1,y1,x2,y2)
        x1++
        y1++
        x2--
        y2--
    }
    return res
};