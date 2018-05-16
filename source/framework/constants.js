export const LANG_KEY = 'bbr-lang';

export const languages = {
  en: {
    activeText: 'Eng',
    menuText: 'English'
  },
  zh: {
    activeText: '中文 (中国)',
    menuText: '中文 (中国)'
  }
};

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