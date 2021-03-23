import React from 'react';
import { Page } from '../components';
import { Typography } from 'antd';
import AboutUsImg from '../assets/images/sarnellihousebackground.png';

export const AboutUs = () => {
  const { Title, Text, Link } = Typography;

  return (
    <Page img={AboutUsImg} title='About Us'>
      <Title>Sarnelli House</Title>
      <Title level={2} style={{ marginTop: 10 }}>
        <Link href='http://sarnellihouse.org/' target='_blank'>
          Visit Sarnelli House's official website.
        </Link>
      </Title>
      <Title level={3}>How did Sarnelli House begin?</Title>
      <Text>
        Michael Shea and other Redemptorists saw the need for care in northeast
        Thailand. They focused on outcasts, incurably ill patients, elderly, and
        orphans. Shea began by working with victims of AIDs in 1998. Patients
        who were diagnosed with AIDs were banished from their village, forcing
        them to live in hovels in the jungle. Shea and other Redemptorists
        brought these victims food, medicine, compassion, and love.
      </Text>
      <Title level={3}>How did HIV/AIDs affect people?</Title>
      <Text>
        Many women lost their husbands to the disease, which left them with no
        way to support themselves and their children, as employers refused to
        employ them. Additionally, due to their fragile and weak state, they
        were too weak to work in field or factory jobs.
        <br />
        When children lost their parents to AIDs, they were left behind.
        Extended families, even grandparents, did not want to be associated with
        the children. Many orphaned children arrived at Shea’s house seeking
        shelter, resulting in him founding Sarnelli house.
      </Text>
      <Title level={3}>Where do the children come from?</Title>
      <Text>
        Many HIV positive or AIDs positive children were brought to Shea. They
        were brought by dying mothers, family members, or Social Services. Some
        children were born in prison, while others were orphans in the street,
        begging for food. Babies were even found along the road, or in trash
        cans. Sarnelli House was a shock for these victims at first, however,
        with love and care, they began to become comfortable in their new home.
      </Text>
      <Title level={3}>What does Sarnelli House do?</Title>
      <Text>
        <ol>
          <li>
            Sarnelli House strives to provide a safe home and basic needs for
            children living there.{' '}
          </li>
          <li>
            They help children and adults living with HIV/AIDS to help them
            access proper health care and treatment.{' '}
          </li>
          <li>
            They provide education or vocational training for children, so that
            they can become members in society, as well as fulfill their full
            potential.{' '}
          </li>
        </ol>
      </Text>
    </Page>
  );
};
