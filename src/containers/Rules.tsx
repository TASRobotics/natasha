import React from 'react';
import { NavBar, Container } from '../components';
import { Layout, Typography } from 'antd';

export const Rules = () => {
  const { Content } = Layout;
  const { Title, Link } = Typography;

  return (
    <Layout>
      <NavBar />
      <Content>
        <Container>
          <Title>Tournament Rules</Title>
          <Title level={3}>Global Rules</Title>
          <ol>
            <li>
              Tournament administrators have the final say in how rules are to
              be arbitrated and interpreted, even those that extend beyond the
              general rules.
              <ol type='a'>
                <li>
                  Repeated failure to follow rules will result in the player, or
                  players team, from being disqualified from the tournament.
                </li>
              </ol>
            </li>
            <li>
              Participants must not engage in harassment or hate speech{' '}
              <strong>in any form</strong>.
              <ol type='a'>
                <li>
                  Depending on the severity of the behaviour, the players will
                  either be immediately disqualified or given a one time
                  warning.
                </li>
                <li>
                  These behaviours includes, but is not limited to:
                  <ol type='i'>
                    <li>
                      Hate speech, offensive behavior, or verbal abuse related
                      to sex, gender identity and expression, sexual
                      orientation, race, ethnicity, disability, physical
                      appearance, body size, age, or religion.
                    </li>
                    <li>Intimidation (physically or online).</li>
                    <li>
                      Spamming, raiding, hijacking, or inciting disruption of
                      streams or social media.
                    </li>
                    <li>
                      Advocating for, or encouraging, any of the above behavior.
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>
                    ANY BEHAVIOUR DEEMED INAPPROPRIATE IN A SCHOOL SETTING WILL
                    BE REPORTED TO THE SCHOOL ADMINS.
                  </strong>
                </li>
              </ol>
            </li>
            <li>
              Participants will use <strong>discord</strong> and in game chats
              to communicate with staff in order to confirm your team is ready.
              <ol type='a'>
                <li>
                  This is a requirement and failure to join the discord voice
                  channel before the match will result in disqualification
                </li>
                <li>
                  Discord will also allow games such as Valorant to have map
                  bans and such
                </li>
                <li>
                  <strong>
                    You are allowed to leave the discord voice call once you
                    have confirmed your attendance
                  </strong>
                  , and are allowed to use your own means of communication
                  during the game
                </li>
              </ol>
            </li>
          </ol>
          <Title level={3}>Fraud and Deception</Title>
          <ol>
            <li>
              Any attempt made to deceive admins or other players with wrong or
              fake statements, information or data will not be tolerated
              <ol type='a'>
                <li>
                  This will result in immediate disqualification from the
                  tournament.
                </li>
              </ol>
            </li>
            <li>
              Any form of cheating in any game is strictly forbidden and will be
              monitored for inside and outside of games.{' '}
              <ol type='a'>
                <li>
                  Any teams or players found engaged in any cheating will be
                  immediately disqualified from the tournament.
                </li>
              </ol>
            </li>
            <li>
              <strong>
                A player is responsible for any actions done under their
                account.
              </strong>
              <ol type='a'>
                <li>
                  If a participant is <strong>sharing</strong> their account
                  with another person, they will be disqualified
                  <ol type='i'>
                    <li>
                      If the person using the shared account infringes upon the
                      rules, the holder of the account is still responsible for
                      their actions and will be disqualified from the
                      tournament.
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Match fixing done by any teams or players will result in
              disqualification.
            </li>
            <li>
              Watching the stream or using any form of communication to relay or
              receive outside information gained through watching the stream
              while participating is strictly forbidden, and will result in
              disqualification.
              <ol type='a'>
                <li>
                  To ensure this doesn’t affect the game too much, there will be
                  a delay in the stream to prevent people from using it to their
                  advantage since we will be unable to monitor your activity
                </li>
              </ol>
            </li>
          </ol>
          <Title level={3}>Pre-match lobby lock in</Title>
          <ol>
            <li>
              If participants are unable to enter the lobby and{' '}
              <strong>
                discord server voice chat 5 minutes in advance to the game
              </strong>
              , the player will not be allowed to participate in that round of
              the tournament.
              <ol type='a'>
                <li>
                  I.e. a Valorant team’s 3rd member fails to lock in on time,
                  and doesn’t play that round, however the team advances to the
                  next round, they can play provided they lock in on time.
                </li>
                <li>
                  You must use your real name on the discord server as your
                  nickname, otherwise you will not be able to participate. This
                  is so we can verify who you are before the match
                  <ol type='i'>
                    <li>
                      Lying about your name will result in disqualification from
                      the tournament
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
          <Title level={3}>Payments</Title>
          <ol>
            <li>
              Payments will be made through a direct transfer from your school
              lunch card ID. You will need to fill out the sign up form which
              will require you to give your consent, as well as your ID number.
              This fee will be <strong>non-refundable</strong>, and cannot be
              withdrawn.
            </li>
            <li>
              If however, there is not enough space to accommodate for a surplus
              of players for certain games, namely Valorant and League which
              require less flexible brackets, you and your teammates will be
              refunded and informed.
            </li>
          </ol>
          <Title level={3}>Prize Pool</Title>
          If it isn’t clear already, this is primarily a charity event so a
          majority of the proceeds will be going towards Sarnelli house. You can
          find this information on the{' '}
          <Link href='https://www.tas-gaming.com/aboutus' target='_blank'>
            About Us
          </Link>{' '}
          section of our website. Because of this, the only prize for winning is
          bragging rights.
          <Title level={3}>Sign Ups</Title>
          <ol>
            <li>
              <strong>ONLY TAS HIGHSCHOOL STUDENTS CAN SIGN UP</strong>
            </li>
            <li>
              Since there is a possibility of not enough teams or players or
              vice versa, of signing up for the games, games which have less
              flexible amounts of players like League and Valorant will have a
              cap for the number of teams which can sign up.
              <ol type='a'>
                <li>
                  Ie. There are enough teams for 8 teams for a single
                  elimination bracket, but only 12 teams signed up. The 4 teams
                  who signed up last will not be considered for the tournament
                  and will have their money refunded.
                </li>
                <li>
                  Teams will be chosen through a first come first serve basis,
                  so if you sign up late, you will not be considered
                </li>
              </ol>
            </li>
            <li>
              For duos and teams of 5. In order for your team to be recognized
              and validated, all your teammates must sign up with the correct
              information.
              <ol type='a'>
                <li>
                  <strong>
                    If one of your teammates has not signed up yet, then your
                    team will not be validated
                  </strong>
                </li>
              </ol>
            </li>
            <li>
              If you do not have a team, you can sign up individually and leave
              the area for teammates blank, however premade teams will be given
              priority over random teams. This is mostly for the 5 person teams,
              Brawl stars, and the bedwars duos
            </li>
            <li>
              Similar to the team sign up process, randoms who sign up first
              will be given priority if there is room to accommodate for randoms
              teams
            </li>
            <li>
              When signing up please use <strong>correct information</strong>{' '}
              for your name, otherwise you will not be allowed to participate
              <ol type='a'>
                <li>
                  Use your <strong>school email</strong> when signing up for a
                  game
                </li>
              </ol>
            </li>
            <li>
              If you want to add subs to your team in case any of the original
              team players don’t show up, please contact us directly either
              through email or discord. The addition of subs will only be
              allowed before the tournament starts.
            </li>
            <li>
              In order to participate, you will need to agree to all the rules
              listed above.
            </li>
          </ol>
          <Title level={3}>Schedules</Title>
          Times and schedules are subject depending on the number of players
          which sign up. Our goal is to accommodate as many players as we can so
          we may need to add rounds or subtract them to have the smoothest
          experience possible. Please know this is the first time we have hosted
          this, so expect delays, however be prepared by the the provided time.
        </Container>
      </Content>
    </Layout>
  );
};
