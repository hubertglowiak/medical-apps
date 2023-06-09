import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1280px) {
    max-width: 1242px;
  }
`;
