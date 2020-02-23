import styled from 'styled-components'


export const ButtonGroup = styled.div`
  margin-top: 1.5rem;
  text-align: center;

  .back-btn {
    margin-right: 10px;
  }

  .next-btn {
    margin-left: 10px;
  }
`

export const CircleButton = styled.div`
  padding: 5px 10px;
  border-radius: 15px;
  background: white;
  color: rgba(0,0,0,.6);
  border: 1px solid rgba(0,0,0,.3);
  transition: .1s ease-in-out;
  text-align: center;
  display: inline-block;
  margin-right: 4px;
  cursor: pointer;  

  &.active {
    color: rgba(0,0,0,.9);
    border: 1px solid rgba(0,0,0,.6);
    transition: .1s ease-in-out;
  }
`