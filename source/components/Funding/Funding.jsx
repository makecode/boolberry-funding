import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Container from './../Container/Container';
import Table from './../Table/Table';
import TableRow from './../Table/TableRow';
import TableCol from './../Table/TableCol';
import Button from './../Button/Button';
import Icon from './../Icon/Icon';
import Progress from './../Progress/Progress';

import { PROGRESS_MODAL, CONTRIBUTE_MODAL, VOTE_MODAL, PROPOSAL_MODAL } from '../../framework/modals';

@translate(['common'], {wait: true})
class Funding extends PureComponent {
  static propTypes = {
    tableData: PropTypes.object,
    showModal: PropTypes.func
  };

  static defaultProps = {
    tableData: {},
    showModal: () => {}
  };

  onRowClick = (title, type, data) => this.props.showModal(title, type, { data });

  onProposalClick = () => {
    const { t } = this.props;
    this.props.showModal(t('modal.titles.createProposal'), PROPOSAL_MODAL, {});
  };

  getProgressRows = (rows) => rows.map((row, index) => {
    const { t } = this.props;
    const { title, proposed, funded, progressDevelopment, date } = row;
    const { description, progress } = progressDevelopment;

    return (
      <TableRow key={index} onClick={() => this.onRowClick(t('modal.titles.progress'), PROGRESS_MODAL, row)}>
        <TableCol>
          <span className='table__text'>
            {title}
          </span>
        </TableCol>
        <TableCol>
          <Icon ico='man' />
          <span className='table__text'>{t('common.proposed')} {proposed}</span>
        </TableCol>
        <TableCol>
          <Icon ico='check' />
          <span className='table__text'>{t('common.funded')} {funded}</span>
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
    const { t } = this.props;
    const { title, proposed, progressFunding } = row;
    const { description, progress } = progressFunding;

    return (
      <TableRow key={index} onClick={() => this.onRowClick(t('modal.titles.contribute'), CONTRIBUTE_MODAL, row)}>
        <TableCol>
          <span className='table__text'>
            {title}
          </span>
        </TableCol>
        <TableCol>
          <Icon ico='man' />
          <span className='table__text'>{t('common.proposed')} {proposed}</span>
        </TableCol>
        <TableCol>
          <Icon ico='stats' />
          <span className='table__text'>{t('sections.funding.progress')}</span>
        </TableCol>
        <TableCol>
          <Progress className='blue' progress={progress} title={description} />
        </TableCol>
        <TableCol>
          <Button onClick={() => this.onRowClick(t('modal.titles.contribute'), CONTRIBUTE_MODAL, row)}>{t('sections.funding.buttons.contribute')}</Button>
        </TableCol>
      </TableRow>
    );
  });

  getProposalsRows = (rows) => rows.map((row) => {
    const { t } = this.props;
    const { id, title, proposed, description } = row;

    return (
      <TableRow key={id} onClick={() => this.onRowClick(t('modal.titles.vote'), VOTE_MODAL, row)}>
        <TableCol>
          <span className='table__text'>
            {title}
          </span>
        </TableCol>
        <TableCol>
          <Icon ico='man' />
          <span className='table__text'>{t('common.proposed')} {proposed}</span>
        </TableCol>
        <TableCol>
          <span className='table__text'>
            {description}
          </span>
        </TableCol>
        <TableCol>
          <Button className='btn-transparent' onClick={() => this.onRowClick(t('modal.titles.vote'), VOTE_MODAL, row)}>{t('sections.proposals.buttons.vote')}</Button>
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
    const { tableData, t } = this.props;
    const { progress = [], funding = [], proposals = [] } = tableData;

    return (
      <div className='funding'>
        <Container>
          <div className='funding__el' id='progress'>
            <h3 className="funding__title">
              <span className="funding__title-text">{t('sections.inProgress.title')}</span>
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
              <span className="funding__title-text">{t('sections.funding.title')}</span>
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
              <span className="funding__title-text">{t('sections.proposals.title')}</span>
              <Button
                className="funding__title-btn btn btn-transparent btn-inline"
                onClick={this.onProposalClick}>
                + {t('sections.proposals.buttons.add')}
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
