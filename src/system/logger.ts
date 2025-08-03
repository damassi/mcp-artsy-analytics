// import fs from "fs"
// import path from "path"

// const logFile = path.join(process.cwd(), "mcp-server.log")

// export const log = (message: string, data?: any) => {
//   const timestamp = new Date().toISOString()
//   const logLine = `${timestamp} - ${message}${data ? ` - ${JSON.stringify(data)}` : ""}\n`
//   fs.appendFileSync(logFile, logLine)
//   console.log(logLine.trim()) // Also log to console for immediate feedback
// }
