import Child from "./Child";

function Parent() {
  return (
    <div style={{ border: "1px solid lightgray", padding: "10px", marginTop: "10px" }}>
      <h2>바뀐다!</h2>
      {/* <Child username={username}></Child> */}
      <Child></Child>
    </div>
  );
}
export default Parent;