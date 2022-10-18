import React from 'react';
import classes from './NoundersPage.module.css';
import Section from '../../layout/Section';
import { Col, Row, Card } from 'react-bootstrap';
import pfpSminert from '../../assets/nounder-pfps/sminert.jpg';
import pfp0xd2 from '../../assets/nounder-pfps/0xd2_eth.jpg';
import pfp0xjoshua from '../../assets/nounder-pfps/0xjoshua.jpg';
import pfpAbbey from '../../assets/nounder-pfps/abbey.jpg';
import pfpAuryn from '../../assets/nounder-pfps/auryn.jpg';
import pfpBinji from '../../assets/nounder-pfps/binji.jpg';
import pfpIzk from '../../assets/nounder-pfps/isaacpatka.png';
import pfpMz from '../../assets/nounder-pfps/mZargham.jpg';
import pfpNotscott from '../../assets/nounder-pfps/notscott.jpg';
import pfpSimpop from '../../assets/nounder-pfps/sim_pop.jpg';
import { Trans } from '@lingui/macro';
import Link from '../../components/Link';

const bios = [
  {
    name: 'sminert',
    image: pfpSminert,
    description: undefined,
    handle: 'sminert',
  },
  {
    name: 'isaacpatka',
    image: pfpIzk,
    description: undefined,
    handle: 'isaacpatka',
  },
  {
    name: 'mZargham',
    image: pfpMz,
    description: undefined,
    handle: 'mZargham',
  },
  {
    name: '0xd2_eth',
    image: pfp0xd2,
    description: undefined,
    handle: '0xd2_eth',
  },
  {
    name: '0xJoshuaSL',
    image: pfp0xjoshua,
    description: undefined,
    handle: '0xJoshuaSL',
  },
  {
    name: 'Sim_Pop',
    image: pfpSimpop,
    description: undefined,
    handle: 'Sim_Pop',
  },
  {
    name: 'notscottmoore',
    image: pfpNotscott,
    description: undefined,
    handle: 'notscottmoore',
  },
  {
    name: 'auryn_macmillan',
    image: pfpAuryn,
    description: undefined,
    handle: 'auryn_macmillan',
  },
  {
    name: 'abbey_titcomb',
    image: pfpAbbey,
    description: undefined,
    handle: 'abbey_titcomb',
  },
  {
    name: 'binji_x',
    image: pfpBinji,
    description: undefined,
    handle: 'binji_x',
  },
];

const BioCard: React.FC<{
  name: string;
  description?: string | undefined;
  image: string;
  handle?: string | undefined;
}> = props => {
  const { name, description, image, handle } = props;
  return (
    <>
      <Card.Img variant="top" src={image} />
      <Card.Title>
        {handle && (
          <a href={`https://twitter.com/${handle}`} target="_blank" rel="noreferrer">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
              className={classes.twitterIcon}
              data-v-6cab4e66=""
            >
              <path
                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                data-v-6cab4e66=""
              ></path>
            </svg>
            {name}
          </a>
        )}

        {!handle && name}
      </Card.Title>
      {description && <Card.Text>{description}</Card.Text>}
    </>
  );
};

const BioCards: React.FC<{ min: number; max: number }> = props => {
  const { min, max } = props;
  return (
    <>
      {bios.slice(min, max).map(bio => (
        <Col xs={6} md={3} lg={3} className={classes.bioGroup}>
          <BioCard {...bio} />
        </Col>
      ))}
    </>
  );
};

const NoundersPage = () => {
  return (
    <Section fullWidth={true} className={classes.noundersPage}>
      <Col lg={{ span: 6, offset: 3 }}>
        <h2 style={{ marginBottom: '2rem' }}>
          <Trans>The pNounders</Trans>
        </h2>
        <h3 style={{ marginBottom: '2rem' }}>
          <Trans>Coalition of public goods enjoyers.</Trans>
        </h3>
        <Row style={{ marginBottom: '0rem' }}>
          <BioCards min={0} max={5} />
          <BioCards min={5} max={10} />
        </Row>
        <h3>
          <Trans>pNounders & Rewards</Trans>
        </h3>
        <p>
                  'pNounders' is the coalition of public good enjoyers from the following orgs that formed to launch Public Nouns together, and help steward early governance.
        </p>
        <ul>
          <li>
            <Link
              text="MetaCartel"
              url="https://twitter.com/meta_cartel"
              leavesPage={true}
            />
          </li>
          <li>
            <Link text="Panvala" url="https://twitter.com/panvalahq" leavesPage={true} />
          </li>
          <li>
            <Link text="Radicle" url="https://twitter.com/radicle" leavesPage={true} />
          </li>
          <li>
            <Link text="Optimism" url="https://twitter.com/optimismFND" leavesPage={true} />
          </li>
          <li>
            <Link text="Clr.fund" url="https://twitter.com/clrfund" leavesPage={true} />
          </li>
          <li>
            <Link text="Gitcoin" url="https://twitter.com/gitcoin" leavesPage={true} />
          </li>
          <li>
            <Link text="Moloch" url="https://twitter.com/molochDAO" leavesPage={true} />
          </li>
        </ul>
        <p>
          <Trans>
            Rewards: 
          </Trans>
        </p>
        <p>
          Every 30th Public Noun for the first year of the project (Public Noun ids #0, #30, #60, and so on) will be automatically sent to the pNounder's multisig to be vested and shared among the coalition to help steward early governance.
        </p>
        <p>
            Every 30th Public Noun for the first year of the project (Public Noun ids #10, #40, #70, and so on) will be automatically sent to the
            NounsDAO, for building such an amazing foundation that we could fork.
        </p>
        <p>
            Every 30th Public Noun for the first year of the project (Public Noun ids #20, #50, #80, and so on) will be automatically sent to the
            Public Nouns DAO, for rewards.
        </p>
        <p>
            These distributions don't interfere with the cadence of the 12 hour auctions. Public Nouns
            are sent directly to the recipient, and auctions continue on schedule
            with the next available Public Noun ID.
        </p>
      </Col>
    </Section>
  );
};

export default NoundersPage;
