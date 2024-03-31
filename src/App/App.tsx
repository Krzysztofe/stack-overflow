import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { dataRoutes } from "./dataApp";
const LoadingPage = lazy(() => import("../pages/LodingPage"));

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            {dataRoutes.map(({ path, element }) => {
              return <Route key={path} path={path} element={element} />;
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
