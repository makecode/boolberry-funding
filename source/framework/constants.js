export const headerNavLinks = [
  {
    title: 'In Progress',
    href: '#progress'
  },
  {
    title: 'In Funding',
    href: '#funding'
  },
  {
    title: 'Proposals',
    href: '#proposals'
  },
  {
    title: 'Main Website',
    href: 'http://boolberry.com/',
    blank: true
  }
];

export const footerColumns = [
  {
    title: 'Main',
    items: [
      {
        name: 'What is Boolberry',
        href: 'https://boolberry.com/#what-is',
        blank: true
      },
      {
        name: 'Papers',
        href: 'https://boolberry.com/#papers',
        blank: true
      },
      {
        name: 'Markets',
        href: 'https://boolberry.com/#markets',
        blank: true
      },
      {
        name: 'Roadmap',
        href: 'https://boolberry.com/#roadmap',
        blank: true
      },
      {
        name: 'Join Us',
        href: 'https://boolberry.com/#join-us',
        blank: true
      },
      // {
      //   name: 'Contributors',
      //   href: 'https://boolberry.com/#contributors',
      //   blank: true
      // },
      // {
      //   name: 'Downloads',
      //   href: '#',
      //   blank: true
      // },
      // {
      //   name: 'Specs',
      //   href: '#',
      //   blank: true
      // }
    ]
  },
  {
    title: 'Funding',
    items: [
      {
        name: 'In Progress',
        href: '#progress',
      },
      {
        name: 'Funding',
        href: '#funding',
      },
      {
        name: 'Proposals',
        href: '#proposals',
      },
      // {
      //   name: 'Archive',
      //   href: '#',
      //   blank: true
      // }
    ]
  },
  {
    title: 'Resources',
    items: [
      {
        name: 'Network',
        href: 'https://boolberry.com/state.html',
        blank: true
      },
      {
        name: 'Block explorer',
        href: 'https://explorer.mining.blue/en/',
        blank: true
      },

      {
        name: 'Github',
        href: 'https://github.com/cryptozoidberg/boolberry',
        blank: true
      },
      {
        name: 'Github/Releases',
        href: 'https://github.com/cryptozoidberg/boolberry/releases/',
        blank: true
      }
    ]
  },
  // {
  //   title: 'Knowlege base',
  //   items: [
  //     {
  //       name: 'Get started',
  //       href: '#',
  //     },
  //     {
  //       name: 'User guide',
  //       href: '#',
  //     },
  //     {
  //       name: 'Mining guide',
  //       href: '#',
  //     },
  //     {
  //       name: 'Dev guide/Api guide',
  //       href: '#',
  //       blank: true
  //     }
  //   ]
  // },
  {
    title: 'Contacts',
    items: [
      {
        name: 'Bitcointalk',
        href: 'https://bitcointalk.org/index.php?topic=577267',
        icon: 'icon-bitcointalk',
        blank: true
      },
      {
        name: 'Slack',
        href: 'https://boolberry.slack.com/',
        icon: 'icon-slack',
        blank: true
      },

      {
        name: 'Telegram',
        href: 'https://t.me/boolberry',
        icon: 'icon-telegram',
        blank: true
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/BoolberryBBR',
        icon: 'icon-twitter',
        blank: true
      },
      {
        name: 'Reddit',
        href: 'https://www.reddit.com/r/boolberry/',
        icon: 'icon-reddit',
        blank: true
      }
    ]
  },
];

export const VERIFICATION_CODE_KEY = 'verCode';

export const OBJECT_KEY_PROGRESS = 'progress';
export const OBJECT_KEY_FUNDING = 'funding';
export const OBJECT_KEY_PROPOSALS = 'proposals';

export const tableInProgress = [
  {
    title: 'LMDB',
    proposed: 'Labs',
    funded: 'Huyabs',
    contributorsTitle: 'Labs',
    contributorsCounter: '2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae blanditiis ducimus illum ipsam natus porro ratione vitae voluptatem voluptatum. Adipisci animi at dignissimos dolores ex magni quasi repellat voluptas.',
    progressFunding: {
      description: '20 out of 20 BTC',
      progress: 100
    },
    progressDevelopment: {
      description: '1 of 2 milestones',
      progress: 50
    },
    milestones: [
      {
        status: 'done',
        title: 'Milestone 1. Fill the aplication form.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        status: 'progress',
        title: 'Milestone 2. Get things done.',
        description: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
      }
    ],
    date: 'Roadmap / June 2018',
    slackUrl: '#'
  }
];

export const tableFunding = [
  {
    title: 'HitBtc listing',
    proposed: 'Proposed by Labs',
    contributorsCounter: '2',
    contributorsTitle: 'Labs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    progressFunding: {
      description: '2 out of 20 BTC',
      progress: 20
    },
    address: 'Yaowarat, 3',
    paymentId: '666c75666679706f6e7920697320746865206265737420706f6e792065766572'
  }
];

export const tableProposals = [
  {
    title: 'KuCoin listing',
    proposed: 'Labs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    verString: 'k342047294jgqg8'
  },
  {
    title: 'KuCoin listing',
    proposed: 'Labs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    verString: 'k342047294jgqg8',
    votes: 10,
    upvotedTitle: 'Labs',
    upvotedCounter: 2
  }
];