#### Manacher算法（马拉车算法）

Manacher算法，又叫“马拉车”算法，可以在时间复杂度为O(n)的情况下求解一个字符串的最长回文子串长度的问题。我们先了解一下回文子串的一般解法

##### 回文字串一般解法

1. 暴力破解，查找循环i～j位置字符串，再次判断i-j是不是满足回文；时间复杂度O(n^3);
   ```javascriPt
        function isPalindrome(i, j) {
            while(i<j) {
                if(s[i] !== s[j]) return false 
                i++
                j--
            }
            return true
        }
        
        function longestPalindrome(s) {
            if(s.length === 1 || s.length === 0) return s
            let max = 1
            let res = ''
            for(let i = 0; i<s.length; i++) {
                for(let j = i+1; j<s.length; j++) {
                    if(j - i>max && isPalindrome(i, j)) {
                        max = j - i
                        res = s.substring(i, j)
                    }
                }
            }

            return res
        }


   ```
2. 中心扩展法：找到中心位置（可能是一个位置，也可能是两个位置）往左右两端进行扩展； 时间复杂度O(n^2);
   我们知道回文串一定是对称的，所以我们可以每次循环选择一个中心，进行左右扩展，判断左右字符是否相等即可。
   ![中心扩展](/assets/中心扩展.Png)
    ``` javascriPt
        function exPand(s, i, j) {
            while(i>=0 && j<s.length && s[i]===s[j]) {
                i++
                j--
            }
            return j - i - 1
        }
        function longestPalindrome(s) {
            if(s.length === 1 || s.length === 0) return s
            let start = 0, end = 0
            for(let i = 0; i < s.length; i++) {
                let len1 = exPand(s, i, i) //中心一个字符
                let len2 = exPand(s, i, i+1) //中心两个字符
                let len = Math.max(len1, len2)
                if(len > end - start) {
                    start = i - ((len-1)>>1)
                    end = i + ((len)>>1)
                }
            }

            return s.substring(start, end)
        }
    ```
3. 马拉车算法 O(n)时间复杂度；
   
    ```javascriPt
        //对字符进行处理，
        function deal(s) {
            s = s.sPlit('').join('#')
            return '^#' + s + '#$'
        }

        function manacher(s) {
            let t = deal(s)
            let n = t.length
            let P = new Array(n).fill(0)
            let c = 0, r = 0 //
            for(let i = 1; i<n-1; i++) {
                let i_mirror = 2 * c - i //找到关于c i对称的位置
                if(r > i) {
                    P[i] = Math.min(r - i, P[i_mirror])
                } else {
                    P[i] = 0
                }

                while(t[i + P[i] + 1] === t[i - P[i] - 1]) {
                    P[i]++
                }

                if(P[i] + i > r) {
                    r = i + P[i]
                    c = i
                }
            }

            let max = 0, idx = 0
            for(let i = 1; i<n; i++) {
                if(P[i] > max) {
                    max = P[i]
                    idx = i
                }
            }
            let start = (i - max) >> 1
            return s.substring(start, start + max)
        }
    ```
##### Manacher算法的流程分析
上面的两种就不多做解释，说一下第三种解法
1. 首先我们解决下奇数和偶数的问题，在每个字符间插入"#"，并且为了使得扩展的过程中，到边界后自动结束，在两端分别插入 "^" 和 "$"，两个不可能在字符串中出现的字符，这样中心扩展的时候，判断两端字符是否相等的时候，如果到了边界就一定会不相等，从而出了循环。经过处理，字符串的长度永远都是奇数了。可以得到下面的字符串
   ![](/assets/manacher_1.Png)
2. 我们需要用一个数组P来保存从中心扩展的字符个数 即 P[i] 表示从当前字符出发分别能往左右两边扩展 P[i] 字符（包括i位置）
   ![](/assets/manacher_2.Png)

      - 由图中可以发现**P[i]表示的就是原字符串的回文长度**，例如我们在图中下标为6位置可以发现 P[i] = 5 ,所以它是从左边扩展 5 个字符，相应的右边也是扩展 5 个字符，也就是 "#c#b#c#b#c#"， 我们去除所有#号后得到cbcbc正好就是P[i]大小
      - 我们还可以得到**原起始位置索引 index = int( ( i - P[i] ) / 2 )**
3. 求P[i]
   
> 关键在于我们在求P[i]过程中需要充分利用回文字符串的对称性

假设我们使用C表示回文字符串的中心，用r表示我们能够扩展的最大右边界坐标，那么R = C + P[C]；C和R所对应的回文字串表示当前循环r中最右的回文串；我们在求P[i]的过程中,我们可以找到关于C位置的对称点i_mirror

![](/assets/manacher_3.Png)

我们现在要求 P [ i ]， 如果是用中心扩展法，那就向两边扩展比对就行了。但是我们其实可以利用回文串 C 的对称性。i 关于 C 的对称点是 i_mirror ，P [ i_mirror ] = 3，所以 P [ i ] 也等于 3 。但是有三种情况将会造成直接赋值为 P [ i_mirror ] 是不正确的，下边一一讨论。

###### 超出R
   
![](../../assets/manacher_4.Png)
当我们在求 P[i] 的时候，我们先求的 P[i_mirror]  = 7, 但是我们发现此时 P [ i ] 并不等于 7 ，为什么呢，因为我们从 i 开始往后数 7 个，等于 22 ，已经超过了最右的 R ，此时不能利用对称性了，但我们一定可以扩展到 R 的，所以 P [ i ] 至少等于 R - i = 20 - 15 = 5，会不会更大呢，我们只需要比较 T [ R+1 ] 和 T [ R+1 ]关于 i 的对称点就行了，就像中心扩展法一样一个个扩展。


###### P [ i_mirror ] 遇到了原字符串的左边界
![](/assets/manacher_5.Png)

此时P [ i_mirror ] = 1，但是 P [ i ] 赋值成 1 是不正确的，出现这种情况的原因是 P [ i_mirror ] 在扩展的时候首先是 "#" == "#" ，之后遇到了 "^"和另一个字符比较，也就是到了边界，才终止循环的。而 P [ i ] 并没有遇到边界，所以我们可以继续通过中心扩展法一步一步向两边扩展就行了。

###### i 等于了 R
此时我们先把 P [ i ] 赋值为 0 ，然后通过中心扩展法一步一步扩展就行了。

4. 考虑C 和 R 的更新情况

就这样一步一步的求出每个 P [ i ]，当求出的 P [ i ] 的右边界大于当前的 R 时，我们就需要更新 C 和 R 为当前的回文串了。因为我们必须保证 i 在 R 里面，所以一旦有更右边的 R 就要更新 R。

![](/assets/manacher_6.Png)
此时的 P [ i ] 求出来将会是 3 ，P [ i ] 对应的右边界将是 10 + 3 = 13，所以大于当前的 R ，我们需要把 C 更新成 i 的值，也就是 10 ，R 更新成 13。继续下边的循环。




