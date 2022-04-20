import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  overflow:hidden;
  transition: 1s ease;

  img{
    transition: 0.5s ease;
  }

  img:hover{
    transform: scale(1.05);
  }

  button {
    border-radius: 0 0 20px 20px;
    background-color: #222222;
    color:#f4f4f4;
  }

  button:hover {
    border-radius: 0 0 20px 20px;
    background-color: #f4f4f4;
    color:#222222;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    cursor:pointer;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;


