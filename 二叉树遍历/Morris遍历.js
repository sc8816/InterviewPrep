// 1， 根据当前节点，找到其前序节点，如果前序节点的右孩子是空，那么把前序节点的右孩子指向当前节点，然后进入当前节点的左孩子。

// 2， 如果当前节点的左孩子为空，打印当前节点，然后进入右孩子。

// 3，如果当前节点的前序节点其右孩子指向了它本身，那么把前序节点的右孩子设置为空，打印当前节点，然后进入右孩子。

function morrisTravel(root) {
    let cur = root
    let res = []
    while (cur) {
        if (cur.left == null) {
            res.push(cur.val)
            cur = cur.right
        } else {
            let pre = getPredecessor(cur); //找到前驱节点
            if (pre.right == null) { //当前未进行连接
                pre.right = cur
                cur = cur.left
            } else if (pre.right === cur) { //恢复二叉树
                pre.right = null
                res.push(cur.val)
                cur = cur.right
            }
        }
    }
}

//获取中序遍历的某个节点前驱节点
function getPredecessor(n) {
    let pre = n
    if(n.left!==null){
        pre = n.left
        while (pre.right && pre.right !== n){
            pre = pre.right
        }
    }

    return pre
}