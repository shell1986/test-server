function FindProxyForURL(url, host) {
  if (shExpMatch(host, '*.anidub.life') || shExpMatch(host, '*.anidub.com')) {
    return 'HTTPS 172.67.207.173:80'
  } else {
    return 'DIRECT'
  }
}
