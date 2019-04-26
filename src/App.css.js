import styled from '@emotion/styled'

export const Main = styled.div`
  width: 100vw;

  & > h4 {
    text-align: center;
  }

  & > section {
    width: 100%;
    display: flex;
    flex-flow: wrap;
    justify-content: center;

    & > div {
      flex: 0 1 30%;
      margin: 0 5px;

      & > img {
        width: 100%;
      }
    }
  }
`
