// ============================================
// TECH STACK ANALYZER - MAIN LOGIC
// ============================================

// Tech Stack Database (2026 Pricing)
const TECH_STACK_DB = {
  hosting: {
    name: 'Frontend Hosting',
    icon: '🌐',
    services: [
      {
        name: 'Vercel',
        tier: 'free',
        freeLimits: '100GB bandwidth, 100 deployments/day, 1M edge requests',
        paidStart: '$20/mo',
        scaling: { 100: 0, 1000: 0, 10000: 20 },
        learningCurve: 'Easy',
        pros: ['Excellent Next.js support', 'Global CDN', 'Instant deployments'],
        cons: ['Can be expensive at scale', 'Vendor lock-in'],
        link: 'https://vercel.com/pricing'
      },
      {
        name: 'Netlify',
        tier: 'free',
        freeLimits: '100GB bandwidth, 300 build mins, 125K serverless functions',
        paidStart: '$19/mo',
        scaling: { 100: 0, 1000: 0, 10000: 19 },
        learningCurve: 'Easy',
        pros: ['Great for static sites', 'Form handling', 'Deploy previews'],
        cons: ['Credit system can be confusing', 'Limited backend'],
        link: 'https://www.netlify.com/pricing'
      },
      {
        name: 'Render',
        tier: 'free',
        freeLimits: '750 hrs/mo, 100GB bandwidth, spins down after 15min',
        paidStart: '$7/mo',
        scaling: { 100: 0, 1000: 7, 10000: 25 },
        learningCurve: 'Medium',
        pros: ['Good free tier', 'Full-stack support', 'Postgres included'],
        cons: ['Cold starts on free tier', 'Less features than competitors'],
        link: 'https://render.com/pricing'
      }
    ]
  },
  
  backend: {
    name: 'Backend/BaaS',
    icon: '⚙️',
    services: [
      {
        name: 'Supabase',
        tier: 'free',
        freeLimits: '500MB database, 50K MAUs, 2GB egress, unlimited API requests',
        paidStart: '$25/mo',
        scaling: { 100: 0, 1000: 0, 10000: 25 },
        learningCurve: 'Medium',
        pros: ['Open source', 'Real-time', 'Auth + DB + Storage all-in-one'],
        cons: ['Projects pause after 7 days inactivity', 'Smaller ecosystem than Firebase'],
        link: 'https://supabase.com/pricing'
      },
      {
        name: 'Firebase',
        tier: 'free',
        freeLimits: '1GB Firestore, 10GB hosting, 50K reads/day',
        paidStart: 'Pay as you go',
        scaling: { 100: 0, 1000: 15, 10000: 50 },
        learningCurve: 'Medium',
        pros: ['Google backing', 'Excellent docs', 'Rich ecosystem'],
        cons: ['Vendor lock-in', 'Cloud Storage requires Blaze plan from Feb 2026'],
        link: 'https://firebase.google.com/pricing'
      },
      {
        name: 'Appwrite',
        tier: 'free',
        freeLimits: '2GB storage, 5GB bandwidth, 75K MAUs, 750K executions',
        paidStart: 'Self-hosted',
        scaling: { 100: 0, 1000: 0, 10000: 0 },
        learningCurve: 'Medium',
        pros: ['Self-hostable', 'Open source', 'No vendor lock-in'],
        cons: ['Smaller community', 'Need to manage infrastructure if self-hosted'],
        link: 'https://appwrite.io/pricing'
      }
    ]
  },
  
  database: {
    name: 'Database',
    icon: '💾',
    services: [
      {
        name: 'Neon (Postgres)',
        tier: 'free',
        freeLimits: '3GB data, 100 CU-hours, 5GB transfer',
        paidStart: '$15/mo typical',
        scaling: { 100: 0, 1000: 0, 10000: 15 },
        learningCurve: 'Medium',
        pros: ['Serverless Postgres', 'Branching', 'Autoscaling'],
        cons: ['Newer platform', 'Compute hours can run out'],
        link: 'https://neon.tech/pricing'
      },
      {
        name: 'PlanetScale (MySQL)',
        tier: 'paid',
        freeLimits: 'No free tier',
        paidStart: '$29/mo',
        scaling: { 100: 29, 1000: 29, 10000: 39 },
        learningCurve: 'Medium',
        pros: ['Vitess-powered', 'Branching', 'No downtime migrations'],
        cons: ['No free tier', 'MySQL only'],
        link: 'https://planetscale.com/pricing'
      },
      {
        name: 'MongoDB Atlas',
        tier: 'free',
        freeLimits: '512MB storage, shared cluster',
        paidStart: '$9/mo',
        scaling: { 100: 0, 1000: 9, 10000: 57 },
        learningCurve: 'Easy',
        pros: ['Great for prototyping', 'NoSQL flexibility', 'Multi-cloud'],
        cons: ['Limited free tier', 'Can be expensive at scale'],
        link: 'https://www.mongodb.com/pricing'
      }
    ]
  },
  
  auth: {
    name: 'Authentication',
    icon: '🔐',
    services: [
      {
        name: 'Clerk',
        tier: 'free',
        freeLimits: '50K MRUs, unlimited apps, MFA included',
        paidStart: '$25/mo',
        scaling: { 100: 0, 1000: 0, 10000: 0 },
        learningCurve: 'Easy',
        pros: ['Modern UI components', 'Great DX', 'Generous free tier'],
        cons: ['Newer platform', 'Less integrations than Auth0'],
        link: 'https://clerk.com/pricing'
      },
      {
        name: 'Auth0',
        tier: 'free',
        freeLimits: '25K MAUs, passwordless, social logins',
        paidStart: '$35/mo',
        scaling: { 100: 0, 1000: 0, 10000: 35 },
        learningCurve: 'Medium',
        pros: ['Enterprise features', 'Extensive docs', 'SAML/SSO'],
        cons: ['No MFA on free tier', 'Complex pricing'],
        link: 'https://auth0.com/pricing'
      },
      {
        name: 'Supabase Auth',
        tier: 'free',
        freeLimits: '50K MAUs (part of Supabase)',
        paidStart: '$25/mo',
        scaling: { 100: 0, 1000: 0, 10000: 25 },
        learningCurve: 'Easy',
        pros: ['Integrated with Supabase', 'Open source', 'All auth methods'],
        cons: ['Less features than dedicated auth providers', 'Project inactivity limits'],
        link: 'https://supabase.com/auth'
      }
    ]
  },
  
  storage: {
    name: 'File Storage',
    icon: '📁',
    services: [
      {
        name: 'Cloudinary',
        tier: 'free',
        freeLimits: '25GB storage, 25GB bandwidth',
        paidStart: '$99/mo',
        scaling: { 100: 0, 1000: 0, 10000: 99 },
        learningCurve: 'Easy',
        pros: ['Image optimization', 'Transformations', 'CDN included'],
        cons: ['Expensive paid tier', 'Overkill for simple storage'],
        link: 'https://cloudinary.com/pricing'
      },
      {
        name: 'UploadThing',
        tier: 'free',
        freeLimits: '2GB storage, 2GB bandwidth',
        paidStart: '$10/mo',
        scaling: { 100: 0, 1000: 10, 10000: 20 },
        learningCurve: 'Easy',
        pros: ['Simple API', 'Good for Next.js', 'Affordable'],
        cons: ['Limited free tier', 'Fewer features than Cloudinary'],
        link: 'https://uploadthing.com/pricing'
      },
      {
        name: 'Supabase Storage',
        tier: 'free',
        freeLimits: '1GB (part of Supabase)',
        paidStart: '$25/mo',
        scaling: { 100: 0, 1000: 0, 10000: 25 },
        learningCurve: 'Easy',
        pros: ['Integrated with Supabase', 'RLS policies', 'Image transformations'],
        cons: ['Limited storage', 'Part of Supabase limits'],
        link: 'https://supabase.com/storage'
      }
    ]
  },
  
  payments: {
    name: 'Payment Gateway',
    icon: '💳',
    services: [
      {
        name: 'Stripe',
        tier: 'pay-per-use',
        freeLimits: 'No monthly fees',
        paidStart: '2.9% + $0.30 per transaction',
        scaling: { 100: 5, 1000: 50, 10000: 500 },
        learningCurve: 'Medium',
        pros: ['Industry standard', 'Excellent docs', 'Rich features'],
        cons: ['Higher fees', 'Complex for simple use cases'],
        link: 'https://stripe.com/pricing'
      },
      {
        name: 'Razorpay',
        tier: 'pay-per-use',
        freeLimits: 'No monthly fees',
        paidStart: '2% + GST per transaction',
        scaling: { 100: 3, 1000: 30, 10000: 300 },
        learningCurve: 'Easy',
        pros: ['India-focused', 'UPI support', 'Lower fees'],
        cons: ['Limited international support', 'Less features than Stripe'],
        link: 'https://razorpay.com/pricing'
      },
      {
        name: 'LemonSqueezy',
        tier: 'pay-per-use',
        freeLimits: 'No monthly fees',
        paidStart: '5% + $0.50 per transaction',
        scaling: { 100: 8, 1000: 75, 10000: 750 },
        learningCurve: 'Easy',
        pros: ['Merchant of record', 'Handles taxes', 'Simple pricing'],
        cons: ['Higher fees', 'Less customization'],
        link: 'https://lemonsqueezy.com/pricing'
      }
    ]
  },
  
  email: {
    name: 'Email/Notifications',
    icon: '📧',
    services: [
      {
        name: 'Resend',
        tier: 'free',
        freeLimits: '100 emails/day, 3000/month',
        paidStart: '$20/mo',
        scaling: { 100: 0, 1000: 20, 10000: 80 },
        learningCurve: 'Easy',
        pros: ['Developer-friendly', 'React email support', 'Good deliverability'],
        cons: ['Limited free tier', 'Newer platform'],
        link: 'https://resend.com/pricing'
      },
      {
        name: 'Mailgun',
        tier: 'pay-per-use',
        freeLimits: '1000 emails/month (trial)',
        paidStart: '$35/mo',
        scaling: { 100: 0, 1000: 35, 10000: 80 },
        learningCurve: 'Medium',
        pros: ['Reliable', 'Email validation', 'API-first'],
        cons: ['No permanent free tier', 'Complex pricing'],
        link: 'https://www.mailgun.com/pricing'
      },
      {
        name: 'Postmark',
        tier: 'pay-per-use',
        freeLimits: '100 emails/month',
        paidStart: '$15/mo',
        scaling: { 100: 0, 1000: 15, 10000: 50 },
        learningCurve: 'Easy',
        pros: ['Best deliverability', 'Transactional focus', 'Simple pricing'],
        cons: ['Small free tier', 'Not for marketing emails'],
        link: 'https://postmarkapp.com/pricing'
      }
    ]
  },
  
  realtime: {
    name: 'Realtime/WebSockets',
    icon: '⚡',
    services: [
      {
        name: 'Supabase Realtime',
        tier: 'free',
        freeLimits: 'Unlimited connections (part of Supabase)',
        paidStart: '$25/mo',
        scaling: { 100: 0, 1000: 0, 10000: 25 },
        learningCurve: 'Easy',
        pros: ['Integrated with Supabase', 'Postgres-based', 'Simple API'],
        cons: ['Tied to Supabase', 'Less features than dedicated solutions'],
        link: 'https://supabase.com/realtime'
      },
      {
        name: 'Pusher',
        tier: 'free',
        freeLimits: '100 connections, 200K messages/day',
        paidStart: '$49/mo',
        scaling: { 100: 0, 1000: 49, 10000: 99 },
        learningCurve: 'Easy',
        pros: ['Mature platform', 'Great docs', 'Presence channels'],
        cons: ['Can be expensive', 'Connection limits'],
        link: 'https://pusher.com/pricing'
      },
      {
        name: 'Ably',
        tier: 'free',
        freeLimits: '3M messages/month, 200 connections',
        paidStart: '$29/mo',
        scaling: { 100: 0, 1000: 29, 10000: 99 },
        learningCurve: 'Medium',
        pros: ['Reliability guarantees', 'Global edge network', 'Feature-rich'],
        cons: ['Complex pricing', 'Steeper learning curve'],
        link: 'https://ably.com/pricing'
      }
    ]
  },
  
  ai: {
    name: 'AI Services',
    icon: '🤖',
    services: [
      {
        name: 'OpenAI',
        tier: 'pay-per-use',
        freeLimits: '$5 free credit (new users)',
        paidStart: '$0.002/1K tokens (GPT-4o-mini)',
        scaling: { 100: 10, 1000: 50, 10000: 200 },
        learningCurve: 'Easy',
        pros: ['Industry leading', 'Great models', 'Simple API'],
        cons: ['Can be expensive', 'Usage-based pricing'],
        link: 'https://openai.com/pricing'
      },
      {
        name: 'Anthropic (Claude)',
        tier: 'pay-per-use',
        freeLimits: 'No free tier',
        paidStart: '$0.003/1K tokens',
        scaling: { 100: 12, 1000: 60, 10000: 240 },
        learningCurve: 'Easy',
        pros: ['Large context window', 'Good for long documents', 'Ethical AI focus'],
        cons: ['No free tier', 'Less integrations'],
        link: 'https://anthropic.com/pricing'
      },
      {
        name: 'Replicate',
        tier: 'pay-per-use',
        freeLimits: 'Small free credit',
        paidStart: 'Varies by model',
        scaling: { 100: 5, 1000: 25, 10000: 100 },
        learningCurve: 'Medium',
        pros: ['Run any model', 'Open source models', 'Image/video AI'],
        cons: ['Complex pricing', 'Variable performance'],
        link: 'https://replicate.com/pricing'
      }
    ]
  },
  
  monitoring: {
    name: 'Monitoring & Logging',
    icon: '📊',
    services: [
      {
        name: 'Sentry',
        tier: 'free',
        freeLimits: '5K events/month, 1 user',
        paidStart: '$29/mo',
        scaling: { 100: 0, 1000: 29, 10000: 99 },
        learningCurve: 'Easy',
        pros: ['Error tracking', 'Performance monitoring', 'Release tracking'],
        cons: ['Limited free tier', 'Can get expensive'],
        link: 'https://sentry.io/pricing'
      },
      {
        name: 'LogRocket',
        tier: 'free',
        freeLimits: '1K sessions/month',
        paidStart: '$99/mo',
        scaling: { 100: 0, 1000: 99, 10000: 299 },
        learningCurve: 'Easy',
        pros: ['Session replay', 'User insights', 'Frontend monitoring'],
        cons: ['Expensive', 'Small free tier'],
        link: 'https://logrocket.com/pricing'
      },
      {
        name: 'Highlight.io',
        tier: 'free',
        freeLimits: '500 sessions/month',
        paidStart: '$50/mo',
        scaling: { 100: 0, 1000: 50, 10000: 200 },
        learningCurve: 'Easy',
        pros: ['Open source', 'Session replay', 'Error monitoring'],
        cons: ['Newer platform', 'Smaller community'],
        link: 'https://highlight.io/pricing'
      }
    ]
  }
};

// Component Detection Keywords
const KEYWORDS = {
  auth: ['login', 'signup', 'authentication', 'user account', 'sign in', 'register', 'password'],
  database: ['store', 'data', 'database', 'persist', 'save', 'record'],
  storage: ['upload', 'file', 'image', 'video', 'media', 'attachment', 'document'],
  payments: ['payment', 'subscription', 'billing', 'checkout', 'purchase', 'pricing'],
  realtime: ['realtime', 'real-time', 'chat', 'live', 'websocket', 'notification', 'instant'],
  email: ['email', 'notification', 'mail', 'message', 'alert'],
  ai: ['ai', 'ml', 'machine learning', 'gpt', 'chatbot', 'llm', 'artificial intelligence'],
  monitoring: ['monitor', 'logging', 'analytics', 'tracking', 'error', 'debug']
};

// ============================================
// COMPONENT DETECTION
// ============================================

function detectComponents(description, selectedFeatures) {
  const components = new Set(['hosting']); // Always need hosting
  
  // Add components from checkboxes
  selectedFeatures.forEach(feature => components.add(feature));
  
  // Detect from description
  const lowerDesc = description.toLowerCase();
  
  Object.keys(KEYWORDS).forEach(component => {
    KEYWORDS[component].forEach(keyword => {
      if (lowerDesc.includes(keyword)) {
        components.add(component);
      }
    });
  });
  
  return Array.from(components);
}

// ============================================
// STACK RECOMMENDATION ENGINE
// ============================================

function generateStacks(components) {
  const stacks = {
    indie: {
      name: 'Indie Hacker Stack',
      icon: '🚀',
      description: 'Maximize free tier usage, perfect for MVPs and solo founders',
      services: {},
      color: 'success'
    },
    mvp: {
      name: 'Startup MVP Stack',
      icon: '💼',
      description: 'Balanced approach with proven tools, scales to 10K users',
      services: {},
      color: 'primary'
    },
    production: {
      name: 'Scalable Production Stack',
      icon: '🏢',
      description: 'Enterprise-ready with best performance and reliability',
      services: {},
      color: 'warning'
    }
  };
  
  // Indie Hacker Stack - Maximize free tier
  components.forEach(comp => {
    const category = TECH_STACK_DB[comp];
    if (category) {
      // Pick most generous free tier
      const freeServices = category.services.filter(s => s.tier === 'free');
      if (freeServices.length > 0) {
        stacks.indie.services[comp] = freeServices[0];
      } else {
        stacks.indie.services[comp] = category.services[0];
      }
    }
  });
  
  // MVP Stack - Balanced
  stacks.mvp.services = {
    hosting: TECH_STACK_DB.hosting?.services[0], // Vercel
    backend: TECH_STACK_DB.backend?.services[0], // Supabase
    database: TECH_STACK_DB.database?.services[0], // Neon
    auth: TECH_STACK_DB.auth?.services[0], // Clerk
    storage: TECH_STACK_DB.storage?.services[2], // Supabase Storage
    payments: TECH_STACK_DB.payments?.services[0], // Stripe
    email: TECH_STACK_DB.email?.services[0], // Resend
    realtime: TECH_STACK_DB.realtime?.services[0], // Supabase Realtime
    ai: TECH_STACK_DB.ai?.services[0], // OpenAI
    monitoring: TECH_STACK_DB.monitoring?.services[0] // Sentry
  };
  
  // Production Stack - Best performance
  stacks.production.services = {
    hosting: TECH_STACK_DB.hosting?.services[0], // Vercel
    backend: TECH_STACK_DB.backend?.services[1], // Firebase
    database: TECH_STACK_DB.database?.services[1], // PlanetScale
    auth: TECH_STACK_DB.auth?.services[1], // Auth0
    storage: TECH_STACK_DB.storage?.services[0], // Cloudinary
    payments: TECH_STACK_DB.payments?.services[0], // Stripe
    email: TECH_STACK_DB.email?.services[2], // Postmark
    realtime: TECH_STACK_DB.realtime?.services[2], // Ably
    ai: TECH_STACK_DB.ai?.services[0], // OpenAI
    monitoring: TECH_STACK_DB.monitoring?.services[1] // LogRocket
  };
  
  // Filter to only include detected components
  Object.keys(stacks).forEach(stackType => {
    const filteredServices = {};
    components.forEach(comp => {
      if (stacks[stackType].services[comp]) {
        filteredServices[comp] = stacks[stackType].services[comp];
      }
    });
    stacks[stackType].services = filteredServices;
  });
  
  return stacks;
}

// ============================================
// COST CALCULATION
// ============================================

function calculateCosts(stacks) {
  const userLevels = [100, 1000, 10000];
  const costData = {};
  
  Object.keys(stacks).forEach(stackType => {
    costData[stackType] = {};
    userLevels.forEach(users => {
      let total = 0;
      Object.values(stacks[stackType].services).forEach(service => {
        if (service.scaling && service.scaling[users] !== undefined) {
          total += service.scaling[users];
        }
      });
      costData[stackType][users] = total;
    });
  });
  
  return costData;
}

// ============================================
// UI RENDERING
// ============================================

function renderComponents(components) {
  const grid = document.getElementById('componentsGrid');
  grid.innerHTML = '';
  
  components.forEach(comp => {
    const category = TECH_STACK_DB[comp];
    if (!category) return;
    
    const card = document.createElement('div');
    card.className = 'component-card';
    card.setAttribute('data-animate', '');
    
    const topServices = category.services.slice(0, 3);
    
    card.innerHTML = `
      <div class="component-header">
        <div class="component-icon">${category.icon}</div>
        <h3 class="component-title">${category.name}</h3>
      </div>
      <ul class="service-list">
        ${topServices.map(service => `
          <li class="service-item">
            <span class="service-name">${service.name}</span>
            <span class="service-tier ${service.tier === 'free' ? 'tier-free' : 'tier-paid'}">
              ${service.tier === 'free' ? '✨ Free' : service.tier === 'paid' ? '💰 Paid' : '💳 Pay/Use'}
            </span>
          </li>
        `).join('')}
      </ul>
      <p style="font-size: var(--font-size-sm); color: var(--text-muted); margin: 0;">
        ${topServices[0].freeLimits}
      </p>
    `;
    
    grid.appendChild(card);
  });
  
  // Trigger animations
  setTimeout(() => {
    document.querySelectorAll('[data-animate]').forEach((el, i) => {
      setTimeout(() => el.classList.add('in-view'), i * 100);
    });
  }, 100);
}

function renderStacks(stacks) {
  const grid = document.getElementById('stacksGrid');
  grid.innerHTML = '';
  
  Object.keys(stacks).forEach((stackType, index) => {
    const stack = stacks[stackType];
    const card = document.createElement('div');
    card.className = `stack-card ${stackType}`;
    card.setAttribute('data-animate', '');
    
    const serviceList = Object.entries(stack.services).map(([comp, service]) => {
      return `<li style="padding: var(--spacing-xs) 0; display: flex; align-items: center; gap: var(--spacing-sm);">
        <span style="opacity: 0.7;">${TECH_STACK_DB[comp]?.icon || '•'}</span>
        <span>${service.name}</span>
      </li>`;
    }).join('');
    
    card.innerHTML = `
      <div class="stack-header">
        <div class="stack-icon">${stack.icon}</div>
        <h3 class="stack-name">${stack.name}</h3>
        <p class="stack-description">${stack.description}</p>
      </div>
      <div style="background: rgba(255,255,255,0.03); padding: var(--spacing-md); border-radius: var(--radius-md); margin-bottom: var(--spacing-md);">
        <h4 style="font-size: var(--font-size-sm); margin-bottom: var(--spacing-sm); text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7;">Tech Stack</h4>
        <ul style="list-style: none; margin: 0;">
          ${serviceList}
        </ul>
      </div>
      <button class="btn btn-secondary" style="width: 100%;" onclick="copyStack('${stackType}')">
        📋 Copy This Stack
      </button>
    `;
    
    grid.appendChild(card);
  });
  
  // Trigger animations
  setTimeout(() => {
    document.querySelectorAll('[data-animate]').forEach((el, i) => {
      setTimeout(() => el.classList.add('in-view'), i * 150);
    });
  }, 100);
}

function renderCostComparison(costData) {
  const container = document.getElementById('costComparison');
  
  const html = `
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="border-bottom: 2px solid rgba(255,255,255,0.1);">
          <th style="text-align: left; padding: var(--spacing-md); color: var(--text-secondary);">Stack Type</th>
          <th style="text-align: right; padding: var(--spacing-md); color: var(--text-secondary);">100 users</th>
          <th style="text-align: right; padding: var(--spacing-md); color: var(--text-secondary);">1,000 users</th>
          <th style="text-align: right; padding: var(--spacing-md); color: var(--text-secondary);">10,000 users</th>
        </tr>
      </thead>
      <tbody>
        ${Object.entries(costData).map(([stackType, costs]) => {
          const stackNames = {
            indie: '🚀 Indie Hacker',
            mvp: '💼 Startup MVP',
            production: '🏢 Production'
          };
          return `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: var(--spacing-md); font-weight: 600;">${stackNames[stackType]}</td>
              <td style="text-align: right; padding: var(--spacing-md); color: var(--text-primary);">
                $${costs[100]}/mo
              </td>
              <td style="text-align: right; padding: var(--spacing-md); color: var(--text-primary);">
                $${costs[1000]}/mo
              </td>
              <td style="text-align: right; padding: var(--spacing-md); color: var(--text-primary);">
                $${costs[10000]}/mo
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;
  
  container.innerHTML = html;
}

function renderOptimizationTips(components) {
  const container = document.getElementById('optimizationTips');
  
  const tips = [
    {
      icon: '💡',
      title: 'Start with Free Tiers',
      description: 'Most services offer generous free tiers. Start there and upgrade only when needed.'
    },
    {
      icon: '🎯',
      title: 'Use All-in-One Solutions',
      description: 'Supabase gives you auth, database, storage, and realtime in one platform - saves money and complexity.'
    },
    {
      icon: '⚠️',
      title: 'Watch Your Bandwidth',
      description: 'Bandwidth is where costs explode. Optimize images, use CDNs, and implement caching.'
    },
    {
      icon: '💰',
      title: 'Common Overspending Areas',
      description: 'People overspend on: dedicated databases too early, monitoring tools with high session limits, and premium hosting for static sites.'
    }
  ];
  
  if (components.includes('payments')) {
    tips.push({
      icon: '🇮🇳',
      title: 'For Indian Founders',
      description: 'Use Razorpay for domestic payments (lower fees + UPI support). Stripe for international.'
    });
  }
  
  const html = tips.map(tip => `
    <div style="padding: var(--spacing-md); background: rgba(255,255,255,0.03); border-radius: var(--radius-md); margin-bottom: var(--spacing-md);">
      <div style="display: flex; align-items: start; gap: var(--spacing-md);">
        <div style="font-size: var(--font-size-2xl);">${tip.icon}</div>
        <div>
          <h4 style="margin-bottom: var(--spacing-xs);">${tip.title}</h4>
          <p style="margin: 0; color: var(--text-secondary); font-size: var(--font-size-sm);">${tip.description}</p>
        </div>
      </div>
    </div>
  `).join('');
  
  container.innerHTML = html;
}

// ============================================
// MAIN ANALYSIS FUNCTION
// ============================================

async function analyzeTechStack(description, selectedFeatures) {
  // Detect components
  const components = detectComponents(description, selectedFeatures);
  
  // Generate stack recommendations
  const stacks = generateStacks(components);
  
  // Calculate costs
  const costData = calculateCosts(stacks);
  
  // Render results
  renderComponents(components);
  renderStacks(stacks);
  renderCostComparison(costData);
  renderOptimizationTips(components);
  
  // Show results section
  document.getElementById('resultsSection').classList.remove('hidden');
  
  // Scroll to results
  setTimeout(() => {
    document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
  }, 300);
  
  return { components, stacks, costData };
}

// ============================================
// COPY FUNCTIONALITY
// ============================================

let currentAnalysis = null;

function copyStack(stackType) {
  if (!currentAnalysis) return;
  
  const stack = currentAnalysis.stacks[stackType];
  let text = `${stack.name}\n${'='.repeat(stack.name.length)}\n\n`;
  
  Object.entries(stack.services).forEach(([comp, service]) => {
    const category = TECH_STACK_DB[comp];
    text += `${category.icon} ${category.name}: ${service.name}\n`;
    text += `   Free Tier: ${service.freeLimits}\n`;
    text += `   Link: ${service.link}\n\n`;
  });
  
  navigator.clipboard.writeText(text).then(() => {
    showToast('✅ Stack copied to clipboard!');
  });
}

function copyAllResults() {
  if (!currentAnalysis) return;
  
  let text = 'TECH STACK ANALYSIS\n' + '='.repeat(50) + '\n\n';
  
  // Add all stacks
  Object.keys(currentAnalysis.stacks).forEach(stackType => {
    const stack = currentAnalysis.stacks[stackType];
    text += `\n${stack.name}\n${'-'.repeat(stack.name.length)}\n`;
    Object.entries(stack.services).forEach(([comp, service]) => {
      const category = TECH_STACK_DB[comp];
      text += `• ${category.name}: ${service.name}\n`;
    });
  });
  
  // Add costs
  text += '\n\nCOST ESTIMATES\n' + '-'.repeat(50) + '\n';
  Object.entries(currentAnalysis.costData).forEach(([stackType, costs]) => {
    const stackNames = {indie: 'Indie Hacker', mvp: 'Startup MVP', production: 'Production'};
    text += `\n${stackNames[stackType]}:\n`;
    text += `  100 users: $${costs[100]}/mo\n`;
    text += `  1,000 users: $${costs[1000]}/mo\n`;
    text += `  10,000 users: $${costs[10000]}/mo\n`;
  });
  
  navigator.clipboard.writeText(text).then(() => {
    showToast('✅ Results copied to clipboard!');
  });
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--gradient-success);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-xl);
    z-index: 1000;
    animation: fadeInUp 0.3s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Scroll to analyzer
  document.getElementById('scrollToAnalyzer').addEventListener('click', () => {
    document.getElementById('analyzer').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Form submission
  document.getElementById('analyzerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const description = document.getElementById('appDescription').value;
    const selectedFeatures = Array.from(document.querySelectorAll('input[name="feature"]:checked'))
      .map(cb => cb.value);
    
    // Show loading state
    const btn = document.getElementById('analyzeBtn');
    const btnText = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');
    
    btn.disabled = true;
    btnText.classList.add('hidden');
    btnSpinner.classList.remove('hidden');
    
    // Simulate analysis delay for UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Perform analysis
    currentAnalysis = await analyzeTechStack(description, selectedFeatures);
    
    // Reset button
    btn.disabled = false;
    btnText.classList.remove('hidden');
    btnSpinner.classList.add('hidden');
  });
  
  // Analyze another
  document.getElementById('analyzeAnother').addEventListener('click', () => {
    document.getElementById('resultsSection').classList.add('hidden');
    document.getElementById('analyzer').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Copy results
  document.getElementById('copyResults').addEventListener('click', copyAllResults);
});

// Add fade out animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeOut {
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  }
`;
document.head.appendChild(style);
