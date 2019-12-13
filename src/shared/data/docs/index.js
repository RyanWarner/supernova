import { Home, Package, Shield, Sliders, HardDrive } from 'react-feather'

function importAll (r) {
  const allMdx = {}

  r.keys().forEach(key => {
    const split = key.split('/')
    const section = split[1]
    const name = split[split.length - 1]
    const normalizedKey = name.replace('.mdx', '')
    if (!allMdx[section]) allMdx[section] = {}
    allMdx[section][normalizedKey] = r(key)
  })

  return allMdx
}

const docsList = importAll(require.context('./', true, /\.mdx$/))

export default docsList

export const docsMap = {
  gettingStarted: {
    title: 'Getting started',
    id: 'getting-started',
    Icon: Home,
    pages: [
      'installation'
    ]
  },
  ui: {
    title: 'UI & Components',
    id: 'ui-and-components',
    Icon: Package,
    pages: [
      'ui-kit',
      'forms',
      'modals',
      'styling'
    ]
  },
  'state-and-api': {
    title: 'State & API',
    id: 'state-and-api',
    Icon: Shield,
    pages: [
      'api-patterns',
      'redux',
      'local-storage'
    ]
  },
  tooling: {
    title: 'Tooling',
    id: 'tooling',
    Icon: Sliders,
    pages: [
      'storybook',
      'analytics',
      'sentry',
      'plop'
    ]
  },
  deployment: {
    title: 'Deployment',
    id: 'deployment',
    Icon: HardDrive,
    pages: [
      'environments',
      'aws',
      'circle-ci'
    ]
  }
}
