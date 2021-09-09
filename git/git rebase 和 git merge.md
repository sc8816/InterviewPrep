#####git rebase 和 git merge 的区别

git merge 和 git rebase 都是用于分支合并，关键在 commit 记录的处理上不同：

git merge: 会创建一个新的commit，然后两个分支之前的commit记录都会指向新的commit

git rebase: 会找到两个分支共同的commit公共祖先，提取之后提交的commit追加到目标的分支上，两分支合并后形成线性的记录

