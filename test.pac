function FindProxyForURL(url, host) {
  if (shExpMatch(host, '*.anidub.life') || shExpMatch(host, '*.anidub.com')) {
    return 'SOCKS5 37.1.220.155:1080'
  } else {
    return 'DIRECT'
  }
}
