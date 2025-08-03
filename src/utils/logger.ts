// Utility for logging that detects Claude Desktop environment
// Claude Desktop uses stdin/stdout for MCP protocol, so console logs interfere

function isClaudeDesktop(): boolean {
  return process.env.CLAUDE_DESKTOP === "true"
}

export function log(...args: any[]): void {
  if (!isClaudeDesktop()) {
    console.log(...args)
  }
}

export function error(...args: any[]): void {
  if (!isClaudeDesktop()) {
    console.error(...args)
  }
}

export function warn(...args: any[]): void {
  if (!isClaudeDesktop()) {
    console.warn(...args)
  }
}

export function info(...args: any[]): void {
  if (!isClaudeDesktop()) {
    console.info(...args)
  }
}
