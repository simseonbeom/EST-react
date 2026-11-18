import NoteApp from "@/NoteApp/App";
// import UserPage from "@/pages/users/UserPage"
// import ProductPage from "@/pages/products/ProductPage"

function Playground() {
  return (
    <div style={styles}>
      {/* <UserPage /> */}
      {/* <ProductPage /> */}
      <NoteApp></NoteApp>
    </div>
  );
}
export default Playground;

const styles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 20,
};
