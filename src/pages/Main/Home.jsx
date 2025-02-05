import { HomeLayout, ContentWrapper, SearchInput } from "./HomeStyled";
import HomeAction from "../../components/HomeAction";
import HomeNav from "../../components/HomeNav";
import { Outlet } from "react-router";
import { useMediaQuery } from "react-responsive";

function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <HomeLayout>
      {!isMobile ? (
        <>
          <ContentWrapper>
            <HomeAction />
          </ContentWrapper>
          <ContentWrapper>
            <HomeNav />
          </ContentWrapper>
        </>
      ) : (
        <SearchInput type="search" placeholder="Search mail" />
      )}

      <Outlet />
    </HomeLayout>
  );
}

export default Home;
