# git

## git rebase

把所有提交压缩成一个 patch,然后把 patch 添加到**目标分支**。
与 merge 不同的是，rebase 通过为原始分支中的每个提交创建新的 commits,重写项目历史记录。

```shell
master        feature
a
|  \
|    \
|      \
|        \
|          \
|            \
|              \
|                \
B                 B
|                 |
|                 |
|                 |
C                 D
   \              |
     \            |
       \          |
         \        |
           \      |
             \    |
               \  |
                 \|
                  D
```

## git merge

```shell
master        feature
a
|  \
|    \
|      \
|        \
|          \
|            \
|              \
|                \
B                 B
|                 |
|                 |
|                 |
C                 D
|                /
|              /
|            /
|          /
|        /
|      /
|    /
|  /
E
```
