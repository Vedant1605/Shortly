import { useState } from 'react'
import { UrlInput, ShortLink } from '../../components'
import { ShortenerContainer, Container } from './ShortenerStyles'

const Shortener = () => {
  const [data, setData] = useState([])
  return (
    <ShortenerContainer>
      <Container>
        <UrlInput data={data} setData={setData} />
        {data.map(link => (
          <ShortLink link={link} key={link.code} />
        ))}
      </Container>
    </ShortenerContainer>
  )
}

export default Shortener
