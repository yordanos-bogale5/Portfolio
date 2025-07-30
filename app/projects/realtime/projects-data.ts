
export const realtimeProjects = [
  {
    id: "livestockpro",
    title: "LiveStockPro",
    description:
      "A real-time livestock trading platform with live market data feeds, WebSocket integration for instant price updates, and comprehensive trading analytics for livestock markets.",
    image: "/livestockpro-realtime.png",
    videoUrl: "https://drive.google.com/file/d/1Hz-YeCdI2q6vwOamgnPHcteEjpoOOhDS/view?usp=sharing",
    technologies: ["PHP", "WebSocket", "MySQL", "JavaScript", "Upstock API", "Real-time Data"],
    features: [
      "Real-time livestock price feeds from Upstock",
      "PHP-based data extraction and processing",
      "WebSocket-based live updates",
      "Market analytics dashboard",
      "Trading notifications",
      "Live stock market data integration",
      "Real-time bidding system",
      "Automated price monitoring"
    ],
    status: "Production",
    detailedDescription: `LiveStockPro is a comprehensive real-time livestock trading platform built with PHP that extracts and displays live price updates from Upstock. The system leverages WebSocket technology to provide instant market updates and live trading capabilities, processing live market data feeds and delivering real-time price updates to traders and livestock market participants.

The PHP-based backend efficiently communicates with the Upstock API to extract real-time market data, while the frontend uses WebSocket connections to push instant updates to connected clients. The system features a sophisticated architecture that handles thousands of concurrent connections, ensuring that market participants receive instant notifications about price changes, new listings, and trading opportunities.

The platform includes advanced analytics tools that process real-time data streams from Upstock to provide insights into market trends and trading patterns. Built with a robust PHP backend and modern web technologies, LiveStockPro offers a responsive interface that works seamlessly across desktop and mobile devices, enabling traders to stay connected to the market wherever they are.`
  },
  {
    id: "racedatalive",
    title: "RaceDataLive",
    description:
      "A real-time race data extraction system that captures live timing data from karting races using WebSocket technology for strategic analysis and race monitoring.",
    image: "/racedatalive-realtime.png",
    videoUrl: "https://drive.google.com/file/d/1u_NdmbDTvDQpkaytcig0TlnmtkqWmHdo/view?usp=sharing",
    technologies: ["WebSocket", "JavaScript", "Real-time Data", "Live Timing", "Data Processing"],
    features: [
      "Real-time race data extraction",
      "Live timing system integration",
      "WebSocket-based data streaming",
      "Race performance analytics",
      "Strategic data analysis tools",
      "Live race monitoring dashboard",
      "Karting race data processing",
      "Real-time race statistics"
    ],
    status: "Production",
    detailedDescription: `RaceDataLive is a sophisticated real-time data extraction system specifically designed for karting races that leverages WebSocket technology to capture and process live timing data. The system connects directly to live timing systems to extract comprehensive race data in real-time, enabling strategic analysis and performance monitoring during active racing sessions.

The platform utilizes advanced WebSocket connections to establish persistent communication channels with live timing systems, ensuring minimal latency in data transmission and processing. The system captures detailed race metrics including lap times, sector splits, position changes, and performance analytics, storing this data for both real-time monitoring and post-race analysis.

Built with modern web technologies and optimized for high-frequency data processing, RaceDataLive provides race teams and analysts with critical insights during live racing events. The system features a comprehensive dashboard that displays real-time race statistics, timing data, and performance metrics, enabling strategic decisions to be made during races. The extracted data can be used for various purposes including race strategy optimization, driver performance analysis, and competitive intelligence gathering.`
  },
  {
    id: "websocketguardian",
    title: "WebSocketGuardian",
    description:
      "A robust WebSocket server management system using Supervisor to ensure continuous operation and reliability for real-time applications and live data streaming services.",
    image: "/websocketguardian-realtime.png",
    videoUrl: "https://drive.google.com/file/d/1Rr2TuptsFq-HugoEDjrJpA758FYOhXNX/view?usp=sharing",
    technologies: ["WebSocket", "Supervisor", "Node.js", "Process Management", "System Administration", "Real-time Server"],
    features: [
      "Continuous WebSocket server operation",
      "Supervisor process management",
      "Automatic server restart on failure",
      "Real-time connection monitoring",
      "Background service configuration",
      "Server reliability assurance",
      "Live data streaming support",
      "Process health monitoring"
    ],
    status: "Production",
    detailedDescription: `WebSocketGuardian is a comprehensive WebSocket server management solution that leverages Supervisor to ensure continuous operation and maximum reliability for real-time applications. The system is specifically designed to maintain persistent WebSocket connections and handle live data streaming with zero downtime, making it essential for mission-critical real-time applications.

The project involves setting up and configuring a WebSocket server infrastructure that runs continuously in the background using Supervisor, a process control system that monitors and manages server processes. Supervisor ensures that the WebSocket server automatically restarts in case of failures, maintains optimal performance, and provides detailed logging and monitoring capabilities for system administrators.

WebSocketGuardian addresses the critical need for reliable real-time communication in modern applications by implementing robust process management strategies. The system includes comprehensive monitoring tools that track server health, connection statistics, and performance metrics. The Supervisor configuration ensures that the WebSocket server maintains high availability and can handle multiple concurrent connections while providing automatic recovery mechanisms for any system failures or unexpected shutdowns.`
  }
]
