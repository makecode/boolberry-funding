import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import ObjectUtils from '../../framework/ObjectUtils';

import Container from './../Container/Container';
import Table from './../Table/Table';
import TableRow from './../Table/TableRow';
import TableCol from './../Table/TableCol';
import Button from './../Button/Button';
import Icon from './../Icon/Icon';
import Progress from './../Progress/Progress';

import { PROGRESS_MODAL, CONTRIBUTE_MODAL, VOTE_MODAL, PROPOSAL_MODAL } from '../../framework/modals';
// import { tableInProgress, tableFunding, tableProposals } from './../../framework/constants';

class Funding extends Component {
  static propTypes = {
    showModal: PropTypes.func
  };

  static defaultProps = {
    showModal: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      tableData: {}
    };
  }

  componentDidMount() {
    axios.get('https://boolberry.com/API/get_proposal.php')
      .then((response) => {
        const data = ObjectUtils.transformTableData(response.data);

        this.setState(() => ({
          tableData: data
        }))
      })
      .catch((error) => console.error(error));
  }

  onRowClick = (title, type, data) => this.props.showModal(title, type, { data });

  onProposalClick = () => {
    this.props.showModal('Create proposal', PROPOSAL_MODAL, { data: {} });
  };

  getProgressRows = (rows) => rows.map((row, index) => {
    const { title, proposed, funded, progressDevelopment, date } = row;
    const { description, progress } = progressDevelopment;

    return (
      <TableRow key={index} onClick={() => this.onRowClick('In Progress', PROGRESS_MODAL, row)}>
        <TableCol>
          <span className='table__text'>
            {title}
          </span>
        </TableCol>
        <TableCol>
          <Icon ico='man' />
          <span className='table__text'>Proposed by {proposed}</span>
        </TableCol>
        <TableCol>
          <Icon ico='check' />
          <span className='table__text'>Funded by {funded}</span>
        </TableCol>
        <TableCol>
          <Progress progress={progress} title={description} />
        </TableCol>
        <TableCol>
          <span className='table__text'>
            {date}
          </span>
        </TableCol>
      </TableRow>
    );
  });

  getFundingRows = (rows) => rows.map((row, index) => {
    const { title, propose, progressFunding } = row;
    const { description, progress } = progressFunding;

    return (
      <TableRow key={index} onClick={() => this.onRowClick('Contribute', CONTRIBUTE_MODAL, row)}>
        <TableCol>
          <span className='table__text'>
            {title}
          </span>
        </TableCol>
        <TableCol>
          <Icon ico='man' />
          <span className='table__text'>Proposed by {propose}</span>
        </TableCol>
        <TableCol>
          <Icon ico='stats' />
          <span className='table__text'>Funding in progress</span>
        </TableCol>
        <TableCol>
          <Progress className='blue' progress={progress} title={description} />
        </TableCol>
        <TableCol>
          <Button onClick={() => this.onRowClick('Contribute', CONTRIBUTE_MODAL, row)}>Contribute</Button>
        </TableCol>
      </TableRow>
    );
  });

  getProposalsRows = (rows) => rows.map((row, index) => {
    const { title, proposed, description } = row;

    return (
      <TableRow key={index} onClick={() => this.onRowClick('Vote', VOTE_MODAL, row)}>
        <TableCol>
          <span className='table__text'>
            {title}
          </span>
        </TableCol>
        <TableCol>
          <Icon ico='man' />
          <span className='table__text'>Proposed by {proposed}</span>
        </TableCol>
        <TableCol>
          <span className='table__text'>
            {description}
          </span>
        </TableCol>
        <TableCol>
          <Button className='btn-transparent' onClick={() => this.onRowClick('Vote', VOTE_MODAL, row)}>Vote</Button>
        </TableCol>
      </TableRow>
    );
  });

  renderEmpty = (context) => {
    return (
      <div className='funding__empty'>
        <p>No items in {context}</p>
      </div>
    );
  };

  render() {
    const { tableData } = this.state;
    const { progress = [], funding = [], proposals = [] } = tableData;

    return (
      <div className='funding'>
        <Container>
          <div className='funding__el' id='progress'>
            <h3 className="funding__title">
              <span className="funding__title-text">In progress/Scheduled</span>
            </h3>

            {progress.length ? (
              <Table>
                { this.getProgressRows(progress) }
              </Table>
            ) : (
              <div>
                {this.renderEmpty('Progress')}
              </div>
            )}
          </div>

          <div className='funding__el' id='funding'>
            <h3 className="funding__title">
              <span className="funding__title-text">Funding</span>
            </h3>

            {funding.length ? (
              <Table>
                { this.getFundingRows(funding) }
              </Table>
            ) : (
              <div>
                { this.renderEmpty('Funding') }
              </div>
            )}
          </div>

          <div className='funding__el'>
            <h3 className="funding__title">
              <span className="funding__title-text">Proposals</span>
              <Button
                className="funding__title-btn btn btn-transparent btn-inline"
                onClick={this.onProposalClick}>
                + Submit proposals
              </Button>
            </h3>

            {proposals.length ? (
              <Table size='four'>
                { this.getProposalsRows(proposals) }
              </Table>
            ) : (
              <div>
                { this.renderEmpty('Proposals') }
              </div>
            )}
          </div>
        </Container>
      </div>
    )
  }
}

export default Funding;
