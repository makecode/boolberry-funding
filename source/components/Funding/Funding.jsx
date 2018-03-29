import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './../Container/Container';
import Table from './../Table/Table';
import TableRow from './../Table/TableRow';
import TableCol from './../Table/TableCol';
import Button from './../Button/Button';
import Icon from './../Icon/Icon';
import Progress from './../Progress/Progress';

import { PROGRESS_MODAL, CONTRIBUTE_MODAL, VOTE_MODAL, PROPOSAL_MODAL } from '../../framework/modals';

import { tableInProgress, tableFunding, tableProposals } from './../../framework/constants';

class Funding extends Component {
  static propTypes = {
    showModal: PropTypes.func
  };

  static defaultProps = {
    showModal: () => {}
  };

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

  render() {
    const {} = this.props;

    return (
      <div className='funding'>
        <Container>
          <div className='funding__el'>
            <h3 className="funding__title">
              <span className="funding__title-text">In progress/Scheduled</span>
            </h3>
            <Table>
              {this.getProgressRows(tableInProgress)}
            </Table>
          </div>

          <div className='funding__el'>
            <h3 className="funding__title">
              <span className="funding__title-text">Funding</span>
            </h3>
            <Table>
              {this.getFundingRows(tableFunding)}
            </Table>
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
            <Table size='four'>
              {this.getProposalsRows(tableProposals)}
            </Table>
          </div>
        </Container>
      </div>
    )
  }
}

export default Funding;
