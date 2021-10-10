function FindProxyForURL(url, host) {
  if (host.endsWith('anidub.com') || host.endsWith('anidub.life')) {
    return 'HTTPS 37.1.220.155:8888'
  } else {
    return 'DIRECT'
  }
}
