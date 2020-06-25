git init 初始化仓库
git config --global user.name 名字
git config --global user.email 名字
git status   查看状态
git add      把文件的更改提交到暂缓区
git commit -m "注释" 

git log      打印提交日志信息
git log --oneline | wc -l   提交次数统计
git log --stat              显示commit历史，以及每次commit发生变更的文件
git log -p [file]           显示指定文件相关的每一次diff
git diff                    现实暂存区和工作区的差别
git log --graph             以图形化的方式显示提交历史的关系
git clean -df               移除所有没有跟踪的文件(-d表示包含目录，-f表示强制清除)
git reflog

git branch                查看所有的分支(绿色表示当前正在工作)
git branch developer      创建(开启)新的分支
git checkout developer    切换当前工作的分支
git merge  developer      合并分支(把其他的分支合并到master主干)
git branch -d developer   删除分支(注意不能删除当前分支)

git reset --hard 哈希值    版本回退 
git clone [url]           下载git仓库到本地
git push                  将本地分支的更新，推送到远程主机
git pull                  取回远程主机某个分支的更新，再与本地的指定分支合并


git tag                         // 查看当前仓库的 tag 信息，如果当前没有版本则显示为空
git tag -l "v1.0.*"             // -l命令可以使用通配符来过滤 tag 版本
git tag v1.0.0                  // 新建 tag 版本
git tag                         // 查看查看当前仓库的 tag 信息

git tag -a v1.0.1 -m "版本v1.0.1"    // -a参数可以在创建 tag 的时候添加备注信息由-m指定
git show tagName                    // 用于查看指定版本的详细信息
git push origin [tagName]           // 将 tag 同步到远程的服务器
git push origin --tags              // 推送本地所有的 tag 
git checkout tagName                // 切换tag , 可以切换 tag 并基于该 tag 来创建分支
git tag -d tagName                  // 删除 tag
git push origin :refs/tags/<tagName>// 删除远程的tag