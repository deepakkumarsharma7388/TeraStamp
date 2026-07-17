import { Link, useSearchParams } from 'react-router-dom'


const SEARCH_INDEX = [

  {
    to: '/',
    title: 'Home',
    type: 'Page',
    description:
      'Smarter digital insights for infrastructure performance monitoring. Visualize, monitor, build with confidence.',
    keywords:
      'home terastamp infrastructure performance monitoring digital insights visualize platform data workspace',
  },
  {
    to: '/applications',
    title: 'Applications',
    type: 'Page',
    description:
      'TeraStamp applications across dams, mining, tunnels, transportation, construction, bridges, energy and more.',
    keywords:
      'applications sectors industries dams mining tunnels transportation construction bridges energy environmental landslides disaster structural health monitoring tbm drill blast railways roads transit airports ports wind nuclear solar',
  },
  {
    to: '/modules',
    title: 'Modules',
    type: 'Page',
    description: 'Explore TeraStamp platform modules for monitoring, analytics and reporting.',
    keywords: 'modules platform tools components monitoring analytics reporting',
  },
  {
    to: '/features',
    title: 'Features',
    type: 'Page',
    description:
      'Platform capabilities — instrument insights, alert management, data visualization, map filtering, heat maps, 3D, digital twin.',
    keywords:
      'features capabilities instrument insights alerts collaboration data visualization charts map filtering heat maps context layers 3d visualization digital twin reporting dashboards data integration decision making user interfaces next-gen platform',
  },
  {
    to: '/how-it-works',
    title: 'How It Works',
    type: 'Page',
    description: 'Understand how TeraStamp works — from sensor data collection to insights and reporting.',
    keywords:
      'how it works process workflow setup steps onboarding data collection sensors integration',
  },
  {
    to: '/faq',
    title: 'FAQ',
    type: 'Page',
    description: 'Frequently asked questions about TeraStamp platform, pricing, setup and support.',
    keywords: 'faq questions answers help support pricing setup doubts',
  },
  {
    to: '/about',
    title: 'About us',
    type: 'Page',
    description: 'Learn about the TeraStamp team, mission and journey in infrastructure intelligence.',
    keywords: 'about organization company team mission vision journey story who we are',
  },
  {
    to: '/roadmap',
    title: 'Roadmap',
    type: 'Page',
    description: 'Upcoming features and product roadmap including the AI-Powered Monitoring Suite.',
    keywords:
      'roadmap upcoming future plans releases ai powered monitoring suite predictive anomaly detection geo ai',
  },
  {
    to: '/contact',
    title: 'Contact / Book a Demo',
    type: 'Page',
    description: 'Get in touch with the TeraStamp team, claim a demo, or contact support.',
    keywords:
      'contact demo claim book request schedule support help email phone sales expert assistance',
  },
  {
    to: '/use-cases',
    title: 'Projects & Use Cases',
    type: 'Page',
    description:
      'Success stories from LA Purple Line, VTA BART Phase II and other major infrastructure projects.',
    keywords:
      'projects use cases success stories case studies purple line vta bart la los angeles san jose metro',
  },
  {
    to: '/Blog',
    title: 'Blog',
    type: 'Page',
    description: 'Real projects, future visions, industry insights — the TeraStamp blog.',
    keywords: 'blog articles news insights industry updates posts resources',
  },
  {
    to: '/helpcenter',
    title: 'Help Center',
    type: 'Page',
    description: 'Guides and documentation to get the most out of TeraStamp.',
    keywords: 'help center support documentation guides tutorials',
  },
  {
    to: '/joinus',
    title: 'Join us / Careers',
    type: 'Page',
    description: 'Explore career opportunities at TeraStamp.',
    keywords: 'join us careers jobs hiring work team openings',
  },
  {
    to: '/newsletter',
    title: 'Newsletter',
    type: 'Page',
    description: 'Subscribe to the TeraStamp newsletter for updates and insights.',
    keywords: 'newsletter subscribe updates email',
  },

  /* ============================================================
   * 2. CORE FEATURE MODULES  (All-in-One)
   *    Each maps to its dedicated /allinone/* route.
   * ========================================================== */
  {
    to: '/allinone/real-time-monitoring',
    title: 'Real-Time Monitoring',
    type: 'Feature',
    description:
      'Live & manual instrument readings, continuous time-series data, action & alert levels overlaid, automatic data validation.',
    keywords:
      'real-time monitoring live manual instrument readings continuous time-series data action alert levels overlaid automatic data validation sensors reading',
  },
  {
    to: '/allinone/GISMonitoringMap',
    title: 'GIS Monitoring Map',
    type: 'Feature',
    description:
      'Live Google Maps integration with instrument & asset layers, geo-referenced analytics, tunnel alignment and zones.',
    keywords:
      'gis monitoring map live google maps integration instrument asset layers geo-referenced analytics tunnel alignment zones stations buildings utilities spatial analysis device health green yellow red status interactive map tracking',
  },
  {
    to: '/allinone/LightningFastQueries',
    title: 'Lightning-Fast Queries',
    type: 'Feature',
    description:
      'Query millions of data points in seconds — 3× faster than competition, instant historical lookups, smooth responsive dashboards.',
    keywords:
      'lightning fast queries millions data points seconds 3x faster than competition speed performance instant historical lookups smooth responsive dashboards',
  },
  {
    to: '/allinone/AdvancedVisualization',
    title: 'Advanced Visualization & 3D',
    type: 'Feature',
    description:
      'Advanced 3D visualization tools, multiple parameters per graph, shape array & settlement charts, location-referenced plots.',
    keywords:
      '3d advanced visualization tools multiple parameters per graph shape array settlement charts location-referenced plots immersive city model interactive graphs',
  },
  {
    to: '/allinone/CustomInstrumentDisplay',
    title: 'Custom Instrument Display',
    type: 'Feature',
    description:
      'Any instrument type supported — custom colors with no restrictions, seamless per-instrument notes, drawings, images & map services.',
    keywords:
      'custom instrument display any type supported colors no restrictions seamless per-instrument notes drawings images map services shape arrays settlement markers load cells inclinometers extensometers piezometers',
  },
  {
    to: '/allinone/AlertsRiskManagement',
    title: 'Alerts & Risk Management',
    type: 'Feature',
    description:
      'Custom thresholds & triggers, action/alert/alarm levels, automatic notifications, escalation workflows.',
    keywords:
      'alerts risk management custom thresholds triggers action alert alarm levels automatic notifications escalation workflows warnings safety',
  },

  /* ============================================================
   * 3. ADDITIONAL FEATURES & HIGHLIGHTS
   * ========================================================== */
  {
    to: '/',
    title: 'Data Platform — Single Workspace',
    type: 'Feature',
    description:
      'Every project dataset connected in a single workspace: infrastructure data hub, geotechnical analysis, sensor monitoring, environmental intelligence, AI analytics, survey & LiDAR mapping.',
    keywords:
      'data platform workspace infrastructure data hub geotechnical analysis sensor monitoring environmental intelligence ai powered analytics survey lidar mapping datasets collaboration heatmaps 3d',
  },
  {
    to: '/features',
    title: 'Heatmaps',
    type: 'Feature',
    description:
      'Gain monitoring insights through interactive heatmaps — ground movement, asset behavior, structural performance.',
    keywords:
      'heatmap heatmaps ground movement asset behavior structural performance visual insights construction activity',
  },
  {
    to: '/features',
    title: 'Dashboards & Live Project Visibility',
    type: 'Feature',
    description:
      'Personalized dashboards combining maps, charts, monitoring records and operational metrics in one workspace.',
    keywords:
      'dashboard dashboards live project visibility personalized maps charts metrics workspace convergence kpi',
  },
  {
    to: '/features',
    title: 'Advanced Reporting',
    type: 'Feature',
    description:
      'Custom report templates for KPIs, automated scheduling & delivery, instant project insights, team sharing.',
    keywords:
      'reporting reports custom templates kpi automated scheduling delivery insights share collaborate stakeholder',
  },
  {
    to: '/features',
    title: 'Digital Twin Platform',
    type: 'Feature',
    description:
      'Live digital twin connecting monitoring data, project assets and real-world conditions in one virtual model.',
    keywords:
      'digital twin virtual representation live model project assets real-world 3d',
  },
  {
    to: '/contact',
    title: 'Dedicated Expert Support',
    type: 'Feature',
    description:
      'Connect directly with the TeraStamp support team for fast, reliable guidance and troubleshooting.',
    keywords:
      'support expert assistance troubleshooting guidance chat help team specialists',
  },

  /* ============================================================
   * 4. APPLICATION SECTORS
   * ========================================================== */
  {
    to: '/applications/tunnels',
    title: 'Tunnels',
    type: 'Application',
    description: 'TBM monitoring, convergence tracking, drill & blast excavation analytics and tunnel safety.',
    keywords:
      'tunnels tbm tunnel boring machine convergence excavation drill blast ground conditions advance analytics safety underground',
  },
  {
    to: '/applications/mining',
    title: 'Mining',
    type: 'Application',
    description: 'Operational intelligence for mines and tailings dams — safety, visibility and resource management.',
    keywords: 'mining mines tailings dams operational intelligence safety resources extraction',
  },
  {
    to: '/applications/bridges',
    title: 'Bridges',
    type: 'Application',
    description: 'Structural intelligence for bridges — real-time data analysis for safety and longevity.',
    keywords: 'bridges structural intelligence performance risks reliability safety longevity',
  },
  {
    to: '/applications/dams',
    title: 'Dams',
    type: 'Application',
    description: 'Continuous dam safety monitoring, predictive analytics and centralized reporting.',
    keywords: 'dams dam safety performance predictive analytics reporting water reservoir',
  },
  {
    to: '/applications/transportation',
    title: 'Transportation',
    type: 'Application',
    description: 'Intelligent data for roads, railways, metro systems and transit networks.',
    keywords: 'transportation roads railways rail metro transit networks highways',
  },
  {
    to: '/applications/construction',
    title: 'Construction & Civil',
    type: 'Application',
    description: 'Unified data and field monitoring for airports, ports, earthworks and construction sites.',
    keywords: 'construction civil airports ports earthworks sites projects field monitoring',
  },
  {
    to: '/applications/energy',
    title: 'Energy Infrastructure',
    type: 'Application',
    description: 'Data analysis for wind, nuclear and solar energy projects.',
    keywords: 'energy infrastructure wind nuclear solar power projects',
  },
  {
    to: '/applications/environment',
    title: 'Environmental Monitoring',
    type: 'Application',
    description: 'Remote sensing and climate data for environmental management and sustainability.',
    keywords: 'environmental monitoring remote sensing climate sustainability ecology green',
  },
  {
    to: '/applications/landslides',
    title: 'Landslides & Disaster Management',
    type: 'Application',
    description: 'Predictive intelligence for landslide detection and disaster response.',
    keywords: 'landslides disaster management predictive response slope stability emergency',
  },
  {
    to: '/applications/structural-health',
    title: 'Structural Health Monitoring',
    type: 'Application',
    description: 'Data-focused monitoring for buildings and infrastructure integrity.',
    keywords: 'structural health monitoring shm buildings integrity infrastructure',
  },

  /* ============================================================
   * 5. PROJECTS / USE CASES
   * ========================================================== */
  {
    to: '/use-cases/purplelinesection2',
    title: 'LA Purple Line Extension (Section 2)',
    type: 'Project',
    description:
      'Digital monitoring and data management for tunnel excavation and station construction in Los Angeles.',
    keywords:
      'la purple line extension section 2 los angeles metro tunnel excavation station monitoring 4 mile alignment 2020',
  },
  {
    to: '/use-cases/purpleline3station',
    title: 'Purple Line 3 Stations, Los Angeles',
    type: 'Project',
    description: 'Monitoring backbone for three station boxes with diaphragm walls and shoring systems.',
    keywords:
      'purple line 3 stations los angeles station boxes diaphragm walls shoring geotechnical 2024',
  },
  {
    to: '/use-cases/purpleline3tunnels',
    title: 'Purple Line 3 Tunnels',
    type: 'Project',
    description:
      'Multi-site synchronized monitoring across three tunnel sections with predictive ground movement modeling.',
    keywords:
      'purple line 3 tunnels los angeles multi-site trend analysis ground movement bim 2023',
  },
  {
    to: '/use-cases/vtaBartPhase2',
    title: "VTA's BART Phase II — CP2 EWP 3C",
    type: 'Project',
    description: 'TBM performance tracking, settlement monitoring and 3D model integration in San Jose.',
    keywords:
      'vta bart phase 2 ii cp2 ewp 3c san jose tbm thrust torque cutterhead settlement bim 2025',
  },

  /* ============================================================
   * 6. BLOG POSTS
   * ========================================================== */
  {
    to: '/blog/digitalmonitoring',
    title: 'Digital Monitoring in Metro Construction',
    type: 'Blog',
    description: 'Lessons from large infrastructure projects on digital monitoring in metro construction.',
    keywords:
      'blog digital monitoring metro construction lessons large infrastructure projects october 2025',
  },
  {
    to: '/blog/tunnel-monitoring-made-simple',
    title: 'Simplified Tunnel Monitoring',
    type: 'Blog',
    description: 'Benefits of using TeraStamp in conventional and mechanized excavations.',
    keywords:
      'blog simplified tunnel monitoring conventional mechanized excavations benefits july 2025',
  },
  {
    to: '/blog/digital-transformation-construction',
    title: 'Digital Transformation in Construction',
    type: 'Blog',
    description: "TeraStamp's data intelligence revolution in the construction industry.",
    keywords:
      'blog digital transformation construction data intelligence revolution january 2024',
  },
];


const searchIndex = (query) => {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean)
  if (!words.length) return []

  return SEARCH_INDEX.map((item) => {
    const title = item.title.toLowerCase()
    const desc = item.description.toLowerCase()
    const keys = item.keywords.toLowerCase()
    let score = 0
    let matchedWords = 0

    for (const word of words) {
      let wordScore = 0
      if (title.includes(word)) wordScore += 3
      if (desc.includes(word)) wordScore += 2
      if (keys.includes(word)) wordScore += 1
      if (wordScore > 0) matchedWords++
      score += wordScore
    }

    // Kam se kam ek word match hona chahiye; saare words match = bonus
    if (matchedWords === 0) return null
    if (matchedWords === words.length) score += 5

    return { ...item, score }
  })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
}

/* ------------------------------------------------------------------ */
/*  Type badge colors                                                  */
/* ------------------------------------------------------------------ */
const TYPE_STYLES = {
  Page: 'bg-[#E8F0FE] text-[#1A56DB]',
  Feature: 'bg-[#FFF4EC] text-[#C2410C]',
  Application: 'bg-[#ECFDF3] text-[#047857]',
  Project: 'bg-[#F3E8FF] text-[#7E22CE]',
  Blog: 'bg-[#FEF9C3] text-[#A16207]',
}

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = (searchParams.get('q') || '').trim()
  const results = searchIndex(query)

  return (
       <>
     
    <div className="min-h-[60vh] bg-[#F5F6F7]">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-2xl font-bold text-[#32353A] sm:text-3xl">
          Search results for <span className="text-[#F26418]">"{query}"</span>
        </h1>
        <p className="mt-2 text-[#5C636E]">
          {results.length} result{results.length !== 1 && 's'} found
        </p>

        <div className="mt-8 space-y-4">
          {results.map((item, i) => (
            <Link
              key={`${item.to}-${i}`}
              to={item.to}
              className="block rounded-xl border border-[#E2E5E9] bg-white p-5 shadow-sm transition-all hover:border-[#F26418] hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold text-[#32353A]">
                  {item.title}
                </h2>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    TYPE_STYLES[item.type] || 'bg-[#F1F2F4] text-[#5C636E]'
                  }`}
                >
                  {item.type}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-[#5C636E]">{item.description}</p>
            </Link>
          ))}

          {query && results.length === 0 && (
            <div className="rounded-xl border border-[#E2E5E9] bg-white p-8 text-center">
              <p className="font-semibold text-[#32353A]">No results found</p>
              <p className="mt-1 text-sm text-[#5C636E]">
                Try keywords like "tunnels", "gis map", "reporting", "purple line" or "demo".
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-block rounded-lg bg-[#F26418] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#D9550F]"
              >
                Contact us instead →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>

    </>
  )
}