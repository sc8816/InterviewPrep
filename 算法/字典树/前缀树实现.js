class TrieNode {
    isEnd = false;
    next = new TrieNode();
}

class Trie {
    root = new TrieNode()

    constructor() {
    }

    insert(word) {
        let node = this.root
        for (let w of word) {
            if (!node[w]) node[w] = new TrieNode()
            node = node[w]
        }
        node.isEnd = true
    }

    //查找单词
    search(word) {
        let node = this.root
        for (let w of word) {
            if (!node[w]) return false
            node = node[w]
        }

        return node.isEnd
    }

    //前缀查找
    startWith(prefix) {
        let node = this.root
        for (let w of prefix) {
            if (!node[w]) return false
            node = node[w]
        }
        return true
    }

}

