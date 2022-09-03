import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        zIndex: "999",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.529)",
        backgroundColor: "0.5",
      }}
    >
      <CircularProgress />
    </div>
  );
}
