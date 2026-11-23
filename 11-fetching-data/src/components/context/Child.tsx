import GrandChild from "./GrandChild";

function Child() {
  return (
    <div style={{ border: "1px solid lightgray", padding: "10px", marginTop: "10px" }}>
      <h3>바뀐다22222</h3>
      {/* <GrandChild username={username}></GrandChild> */}
      <GrandChild></GrandChild>
    </div>
  );
}
export default Child;