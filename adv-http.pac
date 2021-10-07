const hostType = {
  Tracker: 'tracker',
  Online: 'online',
  News: 'news'
}

const ip = '37.1.220.155'

const ports = {
  [hostType.Tracker]: 60086,
  [hostType.Online]: 60087,
  [hostType.News]: 60088
}

const hosts = {
  [hostType.Tracker]: ['tr.anidub.com', 'tr.anidub.life'],
  [hostType.Online]: ['online.anidub.com', 'online.anidub.life', 'anime.anidub.life'],
  [hostType.News]: ['anidub.com', 'anidub.life']
}

function FindProxyForURL(url, host) {
  for (const [key, values] of Object.entries(hosts)) {
    if (values.includes(host)) {
      return `HTTP ${ip}:${ports[key]}`
    }
  }

  return 'DIRECT'
}
