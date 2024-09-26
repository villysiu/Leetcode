/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function(words) {
    class TrieNode {
        constructor() {
            // this.letter = ""
            this.count = 0
            this.children = {};
            // this.isEndOfWord = false;
        }
    }

    // class Trie {
    //   constructor() {
    //     this.root = new TrieNode();
    //   }
    // };
    
    let trie = new TrieNode()
    let p = trie
    // console.log(trie)
    // console.log(trie.children)
    for(let word of words){
        trie = p
        for(let i=0; i<word.length; i++){
            let w = word[i]
            
            if(trie.children[w]){
               trie.children[w].count++;
            }
            else{
                trie.children[w] = new TrieNode()
                trie.children[w].count = 1
                
            }
            trie = trie.children[w]
            
               
        }
    }
    // console.log(p)
    // console.log(p.children["a"])
    let res = []
    for(let word of words){
        let count = 0
        let trie = p
        for(let i=0;i<word.length; i++){
            let w = word[i]
            count += trie.children[w].count
            trie = trie.children[w]
        }
        res.push(count)
    }
    return res
    
}
    