import styled from "styled-components";

export default function Loading() {
  return (
    <StyledLoading>
      <div></div>
    </StyledLoading>
  );
}

const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: calc(100vh - 70px); //70px is the hight of the header.

  & > div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(farthest-side, #9eadba 94%, #0000) top/8px 8px
        no-repeat,
      conic-gradient(#0000 30%, #9eadba);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 8px),
      #000 0
    );
    animation: s3 1s infinite linear;
  }

  @keyframes s3 {
    100% {
      transform: rotate(1turn);
    }
  }
`;
