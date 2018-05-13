import { OBJECT_KEY_PROGRESS, OBJECT_KEY_FUNDING, OBJECT_KEY_PROPOSALS } from '../framework/constants';

class ObjectUtils {

  transformMilestones = (milestones) => {
    let doneCounter = 0;
    let newMilestones = [];

    for (let i = 0; i < milestones.length; i += 1) {
      const milestone = milestones[i];

      if (milestone.status === '1') {
        doneCounter += 1;
      }

      newMilestones.push({
        status: milestone.status === '1' ? 'done' : 'progress',
        title: milestone.title,
        description: milestone.description
      })
    }

    return {
      milestones: newMilestones,
      all: newMilestones.length,
      done: doneCounter,
      progress: 100 / newMilestones.length * doneCounter

    }
  };

  transformProgressTable = (rows) => rows.map((row) => {
    const milestones = row.milestones.length ? this.transformMilestones(row.milestones) : [];
    // debugger;
    return {
      milestones: milestones.milestones,
      title: row.title,
      proposed: row.alias,
      funded: row.funded,
      contributorsTitle: row.contributorsTitle,
      contributorsCounter: row.contributorsCounter,
      description: row.description,
      progressFunding: {
        description: `${row.bbr} out of ${row.bbr} BBR`,
        progress: 100 / row.bbr * row.bbr
      },
      progressDevelopment: {
        description: `${milestones.done} of ${milestones.all} milestones`,
        progress: milestones.progress
      },
      date: row.roadmap_date,
      slackUrl: row.slackUrl
    }
  });

  transformFundingTable = (rows) => rows.map((row) => {
    return {
      id: row.id,
      title: row.title,
      proposed: row.alias,
      contributorsCounter: row.contributorsCounter,
      contributorsTitle: row.contributorsTitle,
      description: row.description,
      progressFunding: {
        description: `${row.bbr} out of ${row.bbr_max} BBR`,
        progress: 100 / row.bbr * row.bbr
      },
      address: row.address,
      paymentId: row.paymentId
    };
  });

  transformProposalsTable = (rows) => rows.map((row) => {


    return {
      id: row.id,
      title: row.title,
      proposed: row.alias,
      description: row.description,
      verString: row.ver_string,
      upvotedBy: row.upvoted,
      votes: row.votes,
    }
  });

  transformTableData = (data) => {
    const dataTable = data;
    let progress = dataTable.progress;
    let funding = dataTable.funding;
    let proposals = dataTable.proposals;

    if (progress.length) {
      progress = this.transformProgressTable(progress);
      dataTable[OBJECT_KEY_PROGRESS] = progress;
    }

    if (funding.length) {
      funding = this.transformFundingTable(funding);
      dataTable[OBJECT_KEY_FUNDING] = funding;
    }

    if (proposals.length) {
      proposals = this.transformProposalsTable(proposals);
      dataTable[OBJECT_KEY_PROPOSALS] = proposals;
    }

    return dataTable;
  };
}

export default new ObjectUtils();