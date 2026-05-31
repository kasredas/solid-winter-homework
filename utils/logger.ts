type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'action';

class Logger {
  constructor(private prefix = 'E2E') {}

  private write(level: LogLevel, message: string, meta?: Record<string, unknown>) {
    const timestamp = new Date().toISOString();
    const payload = meta ? ` ${JSON.stringify(meta)}` : '';
    process.stdout.write(`[${timestamp}] [${this.prefix}] [${level.toUpperCase()}] ${message}${payload}\n`);
  }

  debug(message: string, meta?: Record<string, unknown>) {
    this.write('debug', message, meta);
  }

  info(message: string, meta?: Record<string, unknown>) {
    this.write('info', message, meta);
  }

  warn(message: string, meta?: Record<string, unknown>) {
    this.write('warn', message, meta);
  }

  error(message: string, meta?: Record<string, unknown>) {
    this.write('error', message, meta);
  }
  actionInfo(message: string, meta?: Record<string, unknown>) {
    this.write('action', `: ${message}`, meta);
  }
}

export const logger = new Logger('PLAYWRIGHT');
