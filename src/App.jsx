import "./styles.css";
import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorerData);
  const { insertNode, deleteNode, renameNode} = useTraverseTree();

  const handleInsertNode = (folderid, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderid, item, isFolder);

    setExplorerData(finalTree);
  };

   
  const handleDeleteNode = (nodeId) => {
    const finalTree = deleteNode(explorerData, nodeId);




  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}
