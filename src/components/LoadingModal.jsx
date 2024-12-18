const LoadingModal = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
      }}
    >
      <div
        style={{
          display: "inline-block",
          width: "80px",
          height: "80px",
          border: "6px solid #f3f3f3",
          borderRadius: "50%",
          borderTop: "6px solid #3498db",
          animation: "spin 2s linear infinite",
        }}
      />
    </div>
  );
};

export default LoadingModal;
