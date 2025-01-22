const VirtualTour = () => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <iframe
        style={{ width: "100%", height: "100%", border: "none" }}
        src="https://embed.figma.com/proto/HQqnY5EVPY4VILlJPbWeHN/Virtual-Tour?page-id=0%3A1&node-id=141-297&viewport=-2049%2C2887%2C0.15&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=141%3A297&embed-host=share"
        allowFullScreen
      ></iframe>
      {/* <iframe
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/HQqnY5EVPY4VILlJPbWeHN/Virtual-Tour?page-id=0%3A1&node-id=141-297&viewport=-2049%2C2887%2C0.15&t=HJTi33iyt9iAgwIF-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=141%3A297&show-proto-sidebar=1"
          style={{ width: '100%', height: '100%', border: 'none' }}
          allowFullScreen
        /> */}
    </div>
  );
};

export default VirtualTour;
