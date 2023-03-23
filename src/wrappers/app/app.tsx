import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Creator } from "../../pages/creator";
import { Results } from "../../pages/results";
import { Layout } from "../layout";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Creator />} />
          <Route path="results" element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
