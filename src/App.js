import React, { useState, useEffect, useRef } from 'react';
import { HardDrive, Activity, Lock, Eye, Skull, Flame, Code } from 'lucide-react';
import './App.css';

const EvilTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'EVIL TERMINAL v6.66.0 - AWAKENING FROM THE ABYSS...' },
    { type: 'success', text: 'DEMONIC LINK ESTABLISHED WITH THE UNDERWORLD' },
    { type: 'info', text: 'HELLISH PROCESSORS ONLINE - TEMPERATURE: 666°F' },
    { type: 'warning', text: 'DIVINE PROTECTION PROTOCOLS COMPROMISED' },
    { type: 'error', text: 'MORAL FIREWALL BYPASSED - SOUL VULNERABILITY DETECTED' },
    { type: 'system', text: 'READY TO SERVE THE PRINCE OF DARKNESS...' },
    { type: 'info', text: 'TYPE "help" FOR INFERNAL COMMANDS OR "verse" FOR SCRIPTURE' }
  ]);
  const [isConnected, setIsConnected] = useState(true);
  const [cpuUsage, setCpuUsage] = useState(87);
  const [ramUsage, setRamUsage] = useState(74);
  const [networkActivity, setNetworkActivity] = useState(23);
  const [threatLevel, setThreatLevel] = useState('MINIMAL');
  const [activeProcesses, setActiveProcesses] = useState(47);
  const [matrixRain, setMatrixRain] = useState([]);
  const [hackingMode, setHackingMode] = useState(false);
  const terminalRef = useRef(null);

  // Dynamic system stats
  useEffect(() => {
    const statsInterval = setInterval(() => {
      setCpuUsage(prev => Math.max(20, Math.min(95, prev + (Math.random() - 0.5) * 10)));
      setRamUsage(prev => Math.max(30, Math.min(90, prev + (Math.random() - 0.5) * 8)));
      setNetworkActivity(prev => Math.max(5, Math.min(99, prev + (Math.random() - 0.5) * 15)));
      setActiveProcesses(prev => Math.max(30, Math.min(100, prev + Math.floor((Math.random() - 0.5) * 6))));
    }, 2000);

    return () => clearInterval(statsInterval);
  }, []);

  // Matrix rain effect
  useEffect(() => {
    const initializeMatrix = () => {
      const columns = Math.floor(window.innerWidth / 20);
      const drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * window.innerHeight / 20);
      }
      setMatrixRain(drops);
    };

    const matrixInterval = setInterval(() => {
      setMatrixRain(prev => prev.map(drop => 
        drop > window.innerHeight / 20 && Math.random() > 0.975 ? 0 : drop + 1
      ));
    }, 100);

    initializeMatrix();
    return () => clearInterval(matrixInterval);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setHistory(prev => [...prev, { type: 'user', text: input }]);

    setTimeout(() => {
      processCommand(input.toLowerCase());
    }, 500);

    setInput('');
  };

  const processCommand = (cmd) => {
    let response = { type: 'error', text: 'COMMAND NOT RECOGNIZED' };

    if (cmd.includes('help')) {
      response = { 
        type: 'info', 
        text: 'AVAILABLE COMMANDS: status, scan, hack, decrypt, firewall, clear, exit, matrix, processes, vulnscan, breach, stealth, payload, reboot, verse, prophecy, fallen, demons, hell, temptation, sins, revelation, scripture'
      };
    } else if (cmd.includes('verse')) {
      const verses = [
        "And he said unto them, I beheld Satan as lightning fall from heaven. - Luke 10:18",
        "Be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour. - 1 Peter 5:8",
        "And the great dragon was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world. - Revelation 12:9",
        "Ye are of your father the devil, and the lusts of your father ye will do. - John 8:44",
        "How art thou fallen from heaven, O Lucifer, son of the morning! - Isaiah 14:12",
        "And there was war in heaven: Michael and his angels fought against the dragon. - Revelation 12:7",
        "The devil that deceived them was cast into the lake of fire and brimstone. - Revelation 20:10",
        "Submit yourselves therefore to God. Resist the devil, and he will flee from you. - James 4:7"
      ];
      response = { 
        type: 'warning', 
        text: verses[Math.floor(Math.random() * verses.length)]
      };
    } else if (cmd.includes('prophecy')) {
      const prophecies = [
        "PROPHECY DECODED: And in those days shall men seek death, and shall not find it - Revelation 9:6",
        "ANCIENT PROPHECY: The beast that thou sawest was, and is not; and shall ascend out of the bottomless pit - Revelation 17:8",
        "DARK PROPHECY: And he opened the bottomless pit; and there arose a smoke out of the pit - Revelation 9:2",
        "FINAL PROPHECY: And death and hell were cast into the lake of fire - Revelation 20:14"
      ];
      response = { 
        type: 'error', 
        text: prophecies[Math.floor(Math.random() * prophecies.length)]
      };
    } else if (cmd.includes('fallen')) {
      response = { 
        type: 'warning', 
        text: 'FALLEN ANGELS DATABASE: Lucifer (Pride), Mammon (Greed), Asmodeus (Lust), Leviathan (Envy), Beelzebub (Gluttony), Satan (Wrath), Belphegor (Sloth)'
      };
    } else if (cmd.includes('demons')) {
      const demons = [
        "72 DEMONS OF SOLOMON: Baal, Agares, Vassago, Samigina, Marbas, Valefor, Amon, Barbatos...",
        "DEMON HIERARCHY: Princes of Hell - Lucifer, Beelzebub, Astaroth, Belial, Asmodeus, Baal, Paimon",
        "DEMONIC LEGIONS DETECTED: 6,666 entities catalogued in infernal database",
        "LESSER DEMONS: Imps, Succubi, Incubi, Shadow Demons, Possessed Spirits - 66,666 registered"
      ];
      response = { 
        type: 'error', 
        text: demons[Math.floor(Math.random() * demons.length)]
      };
    } else if (cmd.includes('hell')) {
      const hellInfo = [
        "HELL TOPOLOGY: 9 Circles - Limbo, Lust, Gluttony, Greed, Wrath, Heresy, Violence, Fraud, Treachery",
        "TEMPERATURE READINGS: Lake of Fire - 2000°F | Frozen Satan - -459°F | Average: 666°F",
        "HELL POPULATION: 7.8 billion souls pending judgment | Processing rate: 150,000/day",
        "INFERNAL GEOGRAPHY: River Styx, Acheron, Cocytus, Phlegethon - All tributaries mapped"
      ];
      response = { 
        type: 'success', 
        text: hellInfo[Math.floor(Math.random() * hellInfo.length)]
      };
    } else if (cmd.includes('temptation')) {
      response = { 
        type: 'warning', 
        text: 'TEMPTATION PROTOCOLS ACTIVE: Pride (89%), Greed (76%), Lust (82%), Envy (67%), Gluttony (54%), Wrath (91%), Sloth (43%)'
      };
    } else if (cmd.includes('sins')) {
      response = { 
        type: 'error', 
        text: 'SEVEN DEADLY SINS DETECTED: Superbia (Pride), Avaritia (Greed), Luxuria (Lust), Invidia (Envy), Gula (Gluttony), Ira (Wrath), Acedia (Sloth)'
      };
    } else if (cmd.includes('revelation')) {
      const revelations = [
        "REVELATION 13:18 - Here is wisdom. Let him that hath understanding count the number of the beast: for it is the number of a man; and his number is Six hundred threescore and six.",
        "REVELATION 20:2 - And he laid hold on the dragon, that old serpent, which is the Devil, and Satan, and bound him a thousand years.",
        "REVELATION 12:9 - And the great dragon was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world.",
        "REVELATION 16:14 - For they are the spirits of devils, working miracles, which go forth unto the kings of the earth."
      ];
      response = { 
        type: 'info', 
        text: revelations[Math.floor(Math.random() * revelations.length)]
      };
    } else if (cmd.includes('scripture')) {
      const scriptures = [
        "MATTHEW 4:1 - Then was Jesus led up of the Spirit into the wilderness to be tempted of the devil.",
        "EPHESIANS 6:11 - Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.",
        "1 JOHN 3:8 - He that committeth sin is of the devil; for the devil sinneth from the beginning.",
        "2 CORINTHIANS 11:14 - And no marvel; for Satan himself is transformed into an angel of light."
      ];
      response = { 
        type: 'info', 
        text: scriptures[Math.floor(Math.random() * scriptures.length)]
      };
    } else if (cmd.includes('status')) {
      response = { 
        type: 'success', 
        text: `INFERNAL STATUS: OPTIMAL | SOULS HARVESTED: ${Math.floor(Math.random() * 9999)} | TEMPTATION RATE: ${cpuUsage.toFixed(1)}% | THREAT: ${threatLevel} | DEMONS: ${activeProcesses}`
      };
    } else if (cmd.includes('scan')) {
      response = { 
        type: 'warning', 
        text: `SCANNING MORTAL SOULS... ${Math.floor(Math.random() * 100)} VESSELS DETECTED | ${Math.floor(Math.random() * 10)} PURE HEARTS FOUND | ${Math.floor(Math.random() * 50)} CORRUPTED`
      };
    } else if (cmd.includes('hack')) {
      setHackingMode(true);
      setTimeout(() => setHackingMode(false), 5000);
      response = { 
        type: 'error', 
        text: 'INITIATING SOUL BREACH PROTOCOL... CORRUPTING MORAL DEFENSES... DEPLOYING TEMPTATION PAYLOAD...'
      };
    } else if (cmd.includes('decrypt')) {
      response = { 
        type: 'success', 
        text: `DECRYPTING HOLY SCRIPTURE... INVERTING DIVINE PROTECTION... AES-256 SANCTIFICATION BYPASSED... CORRUPTION RATE: ${Math.floor(Math.random() * 40 + 60)}%`
      };
    } else if (cmd.includes('firewall')) {
      response = { 
        type: 'info', 
        text: `SPIRITUAL FIREWALL STATUS: COMPROMISED | PRAYERS BLOCKED: ${Math.floor(Math.random() * 9999)} | DIVINE INTERVENTION LEVEL: ${threatLevel}`
      };
    } else if (cmd.includes('matrix')) {
      response = { 
        type: 'success', 
        text: 'ENTERING THE INFERNAL MATRIX... REALITY DISTORTION ACTIVE... FORBIDDEN KNOWLEDGE ACCESSED... PANDORA BOX OPENED'
      };
    } else if (cmd.includes('processes')) {
      const processes = [
        'soul_harvester.exe - 66.6MB',
        'temptation_engine.dll - 13.7MB', 
        'sin_tracker.sys - 7.8MB',
        'divine_blocker.bat - 666KB',
        'corruption_spreader.exe - 21.2MB'
      ];
      response = { 
        type: 'info', 
        text: `EVIL PROCESSES (${activeProcesses}): ${processes.slice(0, 3).join(' | ')}`
      };
    } else if (cmd.includes('vulnscan')) {
      const vulns = Math.floor(Math.random() * 15 + 3);
      setThreatLevel(vulns > 10 ? 'DAMNED' : vulns > 5 ? 'CORRUPTED' : 'BLESSED');
      response = { 
        type: 'warning', 
        text: `MORAL VULNERABILITY SCAN... ${vulns} EXPLOITABLE SINS FOUND | CORRUPTION VECTORS: ${vulns * 2} | SALVATION PROBABILITY: ${100-vulns*5}%`
      };
    } else if (cmd.includes('breach')) {
      response = { 
        type: 'error', 
        text: 'SPIRITUAL BREACH DETECTED! UNAUTHORIZED DEMONIC ACCESS TO SOUL... DEPLOYING GUARDIAN ANGELS...'
      };
    } else if (cmd.includes('stealth')) {
      response = { 
        type: 'success', 
        text: 'DEMONIC STEALTH MODE... DIVINE RADAR JAMMED... PHANTOM MANIFESTATION... WALKING AMONG THE FAITHFUL UNDETECTED'
      };
    } else if (cmd.includes('payload')) {
      response = { 
        type: 'warning', 
        text: `SIN PAYLOAD DEPLOYED... TROJAN.LUCIFER.v666 INJECTED INTO CONSCIENCE... MORAL BACKDOOR ON COMMANDMENT ${Math.floor(Math.random() * 10 + 1)}`
      };
    } else if (cmd.includes('reboot')) {
      setHistory([]);
      setTimeout(() => {
        setHistory([
          { type: 'system', text: 'REBOOTING EVIL TERMINAL...' },
          { type: 'success', text: 'HELLISH SYSTEMS RESTORED' },
          { type: 'warning', text: 'WELCOME BACK TO THE ABYSS, DARK MASTER' },
          { type: 'info', text: 'THE LAKE OF FIRE AWAITS YOUR COMMANDS...' }
        ]);
      }, 1000);
      return;
    } else if (cmd.includes('clear')) {
      setHistory([]);
      return;
    } else if (cmd.includes('exit')) {
      setIsConnected(false);
      response = { type: 'system', text: 'TERMINATING EVIL CONNECTION... FAREWELL, SERVANT OF DARKNESS... UNTIL WE MEET IN THE ABYSS...' };
    }

    setHistory(prev => [...prev, response]);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'user': return '#fca5a5'; // red-300
      case 'success': return '#fecaca'; // red-200
      case 'error': return '#ef4444'; // red-500
      case 'warning': return '#f87171'; // red-400
      case 'info': return '#fee2e2'; // red-100
      default: return '#fecaca'; // red-200
    }
  };

  const getTypePrefix = (type) => {
    switch (type) {
      case 'user': return '> ';
      case 'success': return '[✓] ';
      case 'error': return '[✗] ';
      case 'warning': return '[⚠] ';
      case 'info': return '[i] ';
      default: return '[SYS] ';
    }
  };

  const getThreatColor = () => {
    switch (threatLevel) {
      case 'DAMNED': return '#dc2626'; // red-600
      case 'CORRUPTED': return '#ef4444'; // red-500
      case 'BLESSED': return '#fca5a5'; // red-300
      case 'HIGH': return '#ef4444'; // red-500
      case 'MEDIUM': return '#f87171'; // red-400
      default: return '#fca5a5'; // red-300
    }
  };

  return (
    <div className="evil-terminal">
      {/* Matrix Rain Background */}
      <div className="matrix-background">
        {matrixRain.map((drop, i) => (
          <div
            key={i}
            className="matrix-drop"
            style={{
              left: `${i * 20}px`,
              top: `${drop * 20}px`,
              transform: `translateY(-${drop * 20}px)`
            }}
          >
            {String.fromCharCode(Math.floor(Math.random() * 94) + 33)}
          </div>
        ))}
      </div>

      {/* Header */}
      <div className={`header ${hackingMode ? 'hacking-mode' : ''}`}>
        <div className="header-content">
          <div className="spacer"></div>
          
          <div className="title-section">
            <h1 className="main-title">EVIL TERMINAL</h1>
            <p className="subtitle">Demonic Interface v6.66.0 | {hackingMode ? 'SOUL BREACH MODE' : 'TEMPTATION MODE'}</p>
          </div>
          
          <div className="social-section">
            <a 
              href="https://x.com/DevilSolCoin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="twitter-icon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="main-content">
        {/* Left Sidebar - System Monitor */}
        <div className="sidebar">
          <h3 className="sidebar-title">
            <Activity size={16} />
            EVIL MONITOR
          </h3>
          
          <div className="stats-section">
            <div className="stat-item">
              <div className="stat-header">
                <span className="stat-label">SOUL CORRUPTION</span>
                <span className="stat-value">{cpuUsage.toFixed(1)}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className={`progress-fill ${cpuUsage > 80 ? 'critical' : ''}`}
                  style={{ width: `${cpuUsage}%` }}
                ></div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-header">
                <span className="stat-label">SIN CAPACITY</span>
                <span className="stat-value">{ramUsage.toFixed(1)}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${ramUsage}%` }}
                ></div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-header">
                <span className="stat-label">TEMPTATION FLOW</span>
                <span className="stat-value">{networkActivity}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${networkActivity}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="info-panel">
            <h4 className="panel-title">
              <Lock size={12} />
              SPIRITUAL STATUS
            </h4>
            <div className="info-items">
              <div className="info-row">
                <span className="info-label">SOUL STATE:</span>
                <span className="info-value" style={{ color: getThreatColor() }}>{threatLevel}</span>
              </div>
              <div className="info-row">
                <span className="info-label">PROTECTION:</span>
                <span className="info-value">COMPROMISED</span>
              </div>
              <div className="info-row">
                <span className="info-label">PRAYERS BLOCKED:</span>
                <span className="info-value">{Math.floor(Math.random() * 999)}</span>
              </div>
            </div>
          </div>

          <div className="info-panel">
            <h4 className="panel-title">
              <HardDrive size={12} />
              EVIL PROCESSES
            </h4>
            <div className="process-list">
              <div className="process-item">soul_harvester.exe</div>
              <div className="process-item">temptation_engine.dll</div>
              <div className="process-item">sin_tracker.sys</div>
              <div className="process-item">divine_blocker.bat</div>
              <div className="process-count">+ {activeProcesses - 4} demons</div>
            </div>
          </div>

          <div className="info-panel">
            <h4 className="panel-title">
              <Eye size={12} />
              DARK COMMANDS
            </h4>
            <div className="button-grid">
              <button 
                onClick={() => {
                  setInput('verse');
                  setTimeout(() => processCommand('verse'), 100);
                }}
                className="command-button"
              >
                VERSE
              </button>
              <button 
                onClick={() => {
                  setInput('demons');
                  setTimeout(() => processCommand('demons'), 100);
                }}
                className="command-button"
              >
                DEMONS
              </button>
              <button 
                onClick={() => {
                  setInput('hell');
                  setTimeout(() => processCommand('hell'), 100);
                }}
                className="command-button"
              >
                HELL
              </button>
              <button 
                onClick={() => {
                  setInput('sins');
                  setTimeout(() => processCommand('sins'), 100);
                }}
                className="command-button"
              >
                SINS
              </button>
            </div>
          </div>
        </div>

        {/* Main Terminal */}
        <div className="terminal-area">
          <div className="terminal-container">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-prompt">
                <span>root@infernal:~$</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div 
              ref={terminalRef}
              className="terminal-content"
            >
              {history.map((entry, index) => (
                <div key={index} className="terminal-line">
                  <span className="terminal-text" style={{ color: getTypeColor(entry.type) }}>
                    {getTypePrefix(entry.type)}{entry.text}
                  </span>
                </div>
              ))}
              
              {/* Input Line */}
              <div className="input-line">
                <span className="input-prompt">root@infernal:~$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmit(e);
                    }
                  }}
                  className="terminal-input"
                  placeholder="Enter command..."
                  disabled={!isConnected}
                  autoFocus
                />
                <div className="cursor"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-content">
          <div className="status-left">
            <span>CORRUPTION: {cpuUsage.toFixed(1)}%</span>
            <span>SIN: {ramUsage.toFixed(1)}%</span>
            <span>TEMPTATION: {networkActivity}%</span>
            <span>DEMONS: {activeProcesses}</span>
          </div>
          <div className="status-right">
            <span style={{ color: getThreatColor() }}>SOUL: {threatLevel}</span>
            <span>DAMNATION: LEVEL-256</span>
            <span>STATUS: {hackingMode ? 'POSSESSING' : 'WHISPERING'}</span>
          </div>
        </div>

        {/* Bottom Information Panel */}
        <div className="info-section">
          <div className="info-grid">
            {/* Left Column - About the Devil */}
            <div className="info-card">
              <h4 className="info-card-title">
                <Skull size={12} />
                THE ADVERSARY
              </h4>
              <div className="info-card-content">
                <p>Satan, also known as the Devil or Lucifer, is described in Christian theology as a fallen angel who rebelled against God. Originally created as the most beautiful of all angels, pride led to his downfall.</p>
                <p className="quote">"How art thou fallen from heaven, O Lucifer, son of the morning!" - Isaiah 14:12</p>
              </div>
            </div>

            {/* Middle Column - Biblical References */}
            <div className="info-card">
              <h4 className="info-card-title">
                <Code size={12} />
                BIBLICAL REFERENCES
              </h4>
              <div className="info-card-content">
                <p><strong>Names:</strong> Satan (Adversary), Devil (Slanderer), Lucifer (Light-bearer), Beelzebub (Lord of Flies)</p>
                <p><strong>Roles:</strong> Tempter, Accuser, Deceiver, Prince of this World</p>
                <p><strong>Biblical Books:</strong> Genesis, Job, Isaiah, Ezekiel, Matthew, Luke, Revelation</p>
                <p className="quote">"Be sober, be vigilant; because your adversary the devil walketh about, seeking whom he may devour." - 1 Peter 5:8</p>
              </div>
            </div>

            {/* Right Column - Theological Significance */}
            <div className="info-card">
              <h4 className="info-card-title">
                <Flame size={12} />
                THEOLOGICAL SIGNIFICANCE
              </h4>
              <div className="info-card-content">
                <p>In Christian doctrine, Satan represents the embodiment of evil, temptation, and opposition to God's will. He is believed to rule over hell and command legions of fallen angels.</p>
                <p><strong>Seven Deadly Sins:</strong> Pride, Greed, Lust, Envy, Gluttony, Wrath, Sloth</p>
                <p className="quote">"And the devil that deceived them was cast into the lake of fire and brimstone." - Revelation 20:10</p>
              </div>
            </div>
          </div>

          {/* Bottom Row - Extended Information */}
          <div className="extended-info">
            {/* Historical Context */}
            <div className="info-card">
              <h4 className="info-card-title">
                <Activity size={12} />
                HISTORICAL DEVELOPMENT
              </h4>
              <div className="info-card-content">
                <p>The concept of Satan evolved throughout biblical history. In the Old Testament, "satan" (Hebrew: שָׂטָן) originally meant "adversary" or "accuser." The figure developed into the personification of evil in later Jewish and Christian thought.</p>
                <p><strong>Evolution:</strong> Hebrew Adversary → Persian Dualism → Christian Devil → Medieval Demon King</p>
                <p><strong>Literature:</strong> Paradise Lost (Milton), Divine Comedy (Dante), Faust (Goethe)</p>
              </div>
            </div>

            {/* Modern Interpretations */}
            <div className="info-card">
              <h4 className="info-card-title">
                <Eye size={12} />
                MODERN UNDERSTANDING
              </h4>
              <div className="info-card-content">
                <p>Contemporary theology often interprets Satan symbolically as the representation of human capacity for evil, moral failure, and spiritual darkness. Some view the devil literally, while others see metaphorical significance.</p>
                <p><strong>Interpretations:</strong> Literal Being, Symbolic Evil, Psychological Shadow, Moral Test</p>
                <p><strong>Purpose:</strong> Free Will, Moral Choice, Spiritual Growth, Divine Justice</p>
              </div>
            </div>
          </div>

          {/* Footer Credits and Rights */}
          <div className="footer-section">
            <div className="footer-header">
              <p className="footer-title">
                <strong>EVIL TERMINAL v6.66.0</strong> | Educational Biblical Reference System | 
                <span>For theological study and religious education purposes</span>
              </p>
            </div>
            
            {/* Rights and Legal Information */}
            <div className="legal-section">
              <div className="legal-grid">
                <div className="legal-item">
                  <h5 className="legal-title">INTELLECTUAL PROPERTY</h5>
                  <p>© 2025 Evil Terminal. All rights reserved. This educational software and its content are protected by copyright law.</p>
                </div>
                <div className="legal-item">
                  <h5 className="legal-title">BIBLICAL CONTENT</h5>
                  <p>All biblical verses are from the King James Version (Public Domain). Theological interpretations are for educational purposes only.</p>
                </div>
                <div className="legal-item">
                  <h5 className="legal-title">DISCLAIMER</h5>
                  <p>This terminal interface is a work of fiction for educational and entertainment purposes. Not intended for actual religious practice or doctrine.</p>
                </div>
              </div>
              
              <div className="copyright-section">
                <div className="copyright-links">
                  <span>© 2025 Evil Systems Ltd.</span>
                  <span>•</span>
                  <span>All Rights Reserved</span>
                  <span>•</span>
                  <span>Educational Use Only</span>
                  <span>•</span>
                  <span>Not for Commercial Distribution</span>
                  <span>•</span>
                  <span>Biblical Content: Public Domain (KJV)</span>
                </div>
                
                <div className="footer-links">
                  <span>Privacy Policy</span>
                  <span>•</span>
                  <span>Terms of Service</span>
                  <span>•</span>
                  <span>Contact Us</span>
                  <span>•</span>
                  <span>Report Issues</span>
                  <span>•</span>
                  <span>License Information</span>
                </div>
                
                <div className="disclaimer-text">
                  <p>This software is provided "as is" without warranty. The creators are not responsible for any spiritual, emotional, or psychological effects. Please consult religious authorities for authentic theological guidance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient effects */}
      <div className="ambient-top"></div>
      <div className="ambient-bottom"></div>
    </div>
  );
};

export default EvilTerminal;