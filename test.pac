function FindProxyForURL(url, host) {
  if (host.endsWith('anidub.com') || host.endsWith('anidub.life')) {
    return 'SOCKS5 37.1.220.155:1080'
  } else {
    return 'DIRECT'
  }
}
