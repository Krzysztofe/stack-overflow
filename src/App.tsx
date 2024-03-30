import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const LoadingPage = lazy(() => import("./pages/LodingPage"));
const IndexTags = lazy(() => import("./pages/tags/IndexTags"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<IndexTags />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
