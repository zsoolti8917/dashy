module.exports = (ip, port, isDocker) => {
  let msg = ''; // To return
  const chars = { // Color codes used in the message
    RESET: '\x1b[0m',
    CYAN: '\x1b[36m',
    GREEN: '\x1b[32m',
    BLUE: '\x1b[34m',
    BRIGHT: '\x1b[1m',
    BR: '\n',
  };

  if (isDocker) {
    // Prepare message for Docker users
    const containerId = process.env.HOST || undefined;
    msg = `${chars.BLUE}*************************************************${chars.BR}${chars.RESET}`
      + `${chars.CYAN}Welcome to Dashy! 🚀${chars.RESET}${chars.BR}`
      + `${chars.GREEN}Your new dashboard is now up and running `
      + `${containerId ? `in container ID ${containerId}` : 'with Docker'}${chars.BR}`
      + `${chars.BLUE}*************************************************${chars.BR}${chars.RESET}`;
  } else {
    // Prepare message for users running app on bare metal
    msg = `${chars.GREEN}┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓${chars.BR}`
      + `┃ ${chars.CYAN}Welcome to Dashy! 🚀${chars.GREEN}┃${chars.BR}`
      + `┃ ${chars.CYAN}Your new dashboard is now up and running at ${chars.BRIGHT}`
      + `http://localhost┃${chars.BR}`
      + `┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛${chars.BR}${chars.BR}${chars.RESET}`;
  }

  // Make some sexy ascii art ;)
  const ascii = `${chars.CYAN}\n\n`
    + ' ██████╗  █████╗ ███████╗██╗  ██╗██╗   ██╗\n'
    + ' ██╔══██╗██╔══██╗██╔════╝██║  ██║╚██╗ ██╔╝\n'
    + ' ██║  ██║███████║███████╗███████║ ╚████╔╝\n'
    + ' ██║  ██║██╔══██║╚════██║██╔══██║  ╚██╔╝\n'
    + ' ██████╔╝██║  ██║███████║██║  ██║   ██║\n'
    + ` ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝\n${chars.RESET}\n`;

  return ascii + msg;
};
