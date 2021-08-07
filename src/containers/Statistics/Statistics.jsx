import React from 'react'
import { Feature } from '../../components'
import {
  Container,
  Description,
  FeaturesContainer,
  HeadingContainer,
  Line,
  StatisticsContainer,
  Title,
} from './StatisticsStyles'

const Statistics = () => {
  const data = [
    {
      path: 'icon-brand-recognition',
      title: 'Brand Recognition',
      description:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      path: 'icon-detailed-records',
      title: 'Detailed Records',
      description:
        'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better  decisions.',
    },
    {
      path: 'icon-fully-customizable',
      title: 'Fully Customizable',
      description:
        'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    },
  ]
  return (
    <StatisticsContainer>
      <Container>
        <HeadingContainer>
          <Title>Advanced Statistics</Title>
          <Description>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </Description>
        </HeadingContainer>
        <FeaturesContainer>
          <Line />
          {data.map((item, index) => (
            <Feature
              path={item.path}
              title={item.title}
              description={item.description}
              key={item.path}
              index={index}
            />
          ))}
        </FeaturesContainer>
      </Container>
    </StatisticsContainer>
  )
}

export default Statistics
