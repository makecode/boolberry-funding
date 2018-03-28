import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './../Container/Container';
import Table from './../Table/Table';
import TableRow from './../Table/TableRow';
import TableCol from './../Table/TableCol';
import Button from './../Button/Button';
import Icon from './../Icon/Icon';
import Progress from './../Progress/Progress';

import { PROGRESS_MODAL, CONTRIBUTE_MODAL, VOTE_MODAL, VOTE_MODAL_TWO, PROPOSAL_MODAL } from '../../framework/modals';

import { tableInProgress, tableFunding, tableProposals } from './../../framework/constants';

class Funding extends Component {
  static propTypes = {
    showModal: PropTypes.func
  };

  static defaultProps = {
    showModal: () => {}
  };

  onProgressClick = () => {
    this.props.showModal('In Progress', PROGRESS_MODAL, {data: 'test'});
  };

  onProposalClick = () => {
    this.props.showModal('Create proposal', PROPOSAL_MODAL, {data: 'test'});
  };

  onContributeClick = () => {
    this.props.showModal('Contribute', CONTRIBUTE_MODAL, {data: 'test'});
  };

  onVoteClick = () => {
    this.props.showModal('VOTE', VOTE_MODAL, {data: 'test'});
  };


  getProgressRows = (rows) => rows.map((row, index) => {
    const { title, propose, funded, progress, progressDescription, date } = row;

    return (
      <TableRow key={index} onClick={this.onProgressClick}>
        <TableCol>
          <span className='table__text'>
            {title}
          </span>
        </TableCol>
        <TableCol>
          <Icon ico='man' />
          <span className='table__text'>{propose}</span>
        </TableCol>
        <TableCol>
          <Icon ico='done' />
          <span className='table__text'>{funded}</span>
        </TableCol>
        <TableCol>
          <Progress progress={progress} title={progressDescription} />
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
    const { title, propose, funded, progress, progressDescription } = row;

    return (
      <TableRow key={index} onClick={this.onContributeClick}>
        <TableCol>
          <span className='table__text'>
            {title}
          </span>
        </TableCol>
        <TableCol>
          <Icon ico='man' />
          <span className='table__text'>{propose}</span>
        </TableCol>
        <TableCol>
          <Icon ico='stats' />
          <span className='table__text'>{funded}</span>
        </TableCol>
        <TableCol>
          <Progress className='blue' progress={progress} title={progressDescription} />
        </TableCol>
        <TableCol>
          <Button onClick={this.onContributeClick}>Contribute</Button>
        </TableCol>
      </TableRow>
    );
  });

  getProposalsRows = (rows) => rows.map((row, index) => {
    const { title, propose, description } = row;

    return (
      <TableRow key={index} onClick={this.onVoteClick}>
        <TableCol>
          <span className='table__text'>
            {title}
          </span>
        </TableCol>
        <TableCol>
          <Icon ico='man' />
          <span className='table__text'>{propose}</span>
        </TableCol>
        <TableCol>
          <span className='table__text'>
            {description}
          </span>
        </TableCol>
        <TableCol>
          <Button className='btn-transparent' onClick={this.onVoteClick}>Vote</Button>
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
              <Button className="funding__title-btn btn btn-transparent btn-inline" onClick={this.onProposalClick}>+ Submit proposals</Button>
            </h3>
            <Table size='four'>
              {this.getProposalsRows(tableProposals)}
            </Table>
          </div>

          {/*<Progress title='1 of 10 milestones' progress={94} />*/}
        </Container>
      </div>
    )
  }
}

export default Funding;
