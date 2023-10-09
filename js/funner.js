var sumRootToLeaf = function(root) {
    const dfs = (root, val) => {
        if (!root) {
            return 0;
        }
        //左移做拼接
        val = (val << 1) | root.val;
        //为叶子节点,返回当前二进制的总值
        if (!root.left&& !root.right) {
            return val;
        }
        //返回当前的左右两树的值
        return dfs(root.left, val) + dfs(root.right, val);
    }
    return dfs(root, 0);
};