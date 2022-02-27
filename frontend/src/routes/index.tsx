import React from 'react';
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from "@apollo/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"




const Home = React.lazy(() => import('../pages/Home'));
const Users = React.lazy(() => import('../pages/Users'));

const link = from([
    new HttpLink({ uri: "http://localhost:3001/graphql" })
  ])
  
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
  })

const AppRoutes = () => {
   return ( 
    <BrowserRouter>
        <ApolloProvider client={client}>
        <Routes>
        <Route path="/" element={
            <React.Suspense fallback={<>Loading..</>}>
                <Home />
            </React.Suspense>} 
        />
        <Route path="users" element={
            <React.Suspense fallback={<>Loading..</>}>
                <Users />
            </React.Suspense>} 
        />
        </Routes>
        </ApolloProvider>
    </BrowserRouter>
   )
}

export default AppRoutes;