const useTraverseTree = () => {
  const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };

  const deleteNode = function (tree, nodeId) {
    if (tree.id === nodeId) {
      return null;
    }

    let latestNode = tree.items
      .map((ob) => {
        return deleteNode(ob, nodeId);
      })
      .filter((ob) => ob != null);
    return { ...tree, items: latestNode };
  }; // Do it Yourself

  const renameNode = function (tree, nodeId, newName) {
    if (tree.id === nodeId) {
      tree.name = newName;
      return tree;
    }
    let latestNode = tree.items.map((ob) => {
      return renameNode(ob, nodeId, newName);
    });
    return { ...tree, items: latestNode };
  }; // Do it Yourself

  return { insertNode, deleteNode, renameNode };
};

export default useTraverseTree;
