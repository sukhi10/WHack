// Extended list of "hacking commands" to display
const commands = [
    "Establishing secure connection...",
    "Bypassing firewall...",
    "Accessing mainframe...",
    "Retrieving encrypted files...",
    "Decoding security tokens...",
    "Uploading virus payload...",
    "Initiating data transfer...",
    "Hacking complete!",
    "Shutting down security protocols...",
    "Access denied: Retrying...",
    "Authentication bypass successful.",
    "Analyzing network traffic...",
    "Connection to server established.",
    "Downloading sensitive information...",
    "Encrypting stolen data...",
    "Running exploit...",
    "Injecting malicious code...",
    "Disabling server logs...",
    "Scanning for vulnerabilities...",
    "Cracking admin password...",
    "Loading brute force attack...",
    "Executing remote code...",
    "Tracing IP address...",
    "Extracting database credentials...",
    "Connecting to shadow network...",
    "Overwriting access privileges...",
    "Deploying DDoS attack...",
    "Decrypting file system...",
    "Simulating user session...",
    "Scraping confidential emails...",
    "Hiding malicious activities...",
    "Wiping evidence...",
    "Rewriting DNS records...",
    "Establishing backdoor access...",
    "Escalating user privileges...",
    "Initiating self-destruct protocol...",
    "Accessing dark web...",
    "Scanning blockchain transactions...",
    "Deploying ransomware...",
    "Hijacking network traffic...",
    "Generating fake credentials...",
    "Impersonating admin session...",
    "Recompiling kernel modules...",
    "Installing spyware...",
    "Erasing audit trails...",
    "Parsing data packets...",
    "Manipulating routing tables...",
    "Interrogating IoT devices...",
    "Cloning repository from GitHub...",
    "Establishing encrypted tunnel...",
    "Launching phishing attack...",
    "Setting up decoy files...",
    "Breaching multi-factor authentication...",
    "Activating rootkit..."
  ];
  
  // Output container
  const output = document.getElementById("output");
  
  // Simulate typing commands as user presses any key
  document.addEventListener("keydown", () => {
    // Choose a random command
    const randomCommand = commands[Math.floor(Math.random() * commands.length)];
  
    // Add the command to the output
    output.textContent += `${randomCommand}\n`;
  
    // Scroll to the bottom to mimic a real terminal
    const terminal = document.getElementById("terminal");
    terminal.scrollTop = terminal.scrollHeight;
  });
  