import React from "react";
import "./errorPage.scss";
import ContentWrapper from "../components/ContentWrapper";

export default function ErrorPage() {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </ContentWrapper>
    </div>
  );
}
