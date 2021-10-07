function FindProxyForURL(url, host) {
  if (shExpMatch(host, '*.anidub.life') || shExpMatch(host, '*.anidub.com')) {
    return 'SOCKS5 127.0.0.1:1337'
  } else {
    return 'DIRECT'
  }
}
