import styled from "styled-components";

export const CardStyled = styled.div`
  display: grid;
  grid-template-rows: 150px auto 3rem;
  padding: 0.5rem 1rem 0.8rem;
  gap: 0.9rem;
  background-color: var(--theme_bg_04);
  box-shadow: 0px 7px 22px 2px rgba(0,0,0,0.1), 0 10px 10px -2px rgba(0,0,0,0.04);
  /* box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); */
  text-align: center;
  justify-content: center;
  border-radius: 3px;
`;

export const Title = styled.h4`
  margin: 0;
`;

export const Email = styled.p((props) => {
  return `
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    
  `;
});

export const Actions = styled.footer((props) => {
  return `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `;
});

export const Body = styled.section((props) => {
  return `
    padding: 0.5rem;
  `;
});

export const CardSkeletonStyled = styled(CardStyled)(() => {
  return `
    animation: cardSkeleton 1.6s infinite linear;

    img{
      animation: cardSkeletonImage 1.6s infinite linear;
    }
    
    p, h4, span {
      background-color: #d0d0d0;
      animation: cardSkeletonLabels 1.6s infinite linear;
    }
    h4 {
      margin-bottom: 0.5rem;
    }
    span {
      margin: 0 0.5rem;
    }

    @keyframes cardSkeletonImage {
      0% {
        opacity: 0.3;
      }
      40%, 60% {
        opacity: 0.2;
      }
      100% {
        opacity: 0.3;
      }
    }

    @keyframes cardSkeletonLabels {
      0% {
        background-color: #dbdbdb;
      }
      40%, 60% {
        background-color: #d0d0d0;
      }
      100% {
        background-color: #dbdbdb;
      }
    }

    @keyframes cardSkeleton {
      0% {
        background-color: #f1f1f1;
      }
      40%, 60% {
        background-color: #ededed;
      }
      100% {
        background-color: #f1f1f1;
      }
    }
  `
})