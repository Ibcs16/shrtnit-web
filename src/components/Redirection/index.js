import React, { Suspense, useEffect, Link } from 'react';
import api from '../../services/api';

export default function Redirection({ history }) {
  // console.log(history);
  const [_, code] = history.location.pathname.split('/');
  console.log(code);
  useEffect(()=> {

    async function redirectToPage(code){

      const res = await api.get(`http://localhost:3000/redirect/${code}`)
        .catch(error => {
          if(error && error.response){
            const { longUrl } = error.response.data;

            if(error.response.status===404) {
              history.push('/page-not-found');
            }else if(error.response.status===401) {
              history.push(`/auth/${code}`);
            }else if(error.response.status===302) {
              window.location.replace(error.response.data.longUrl);
            }
          }else{
            history.push('/page-not-found');
          }

        });

    }

    redirectToPage(code);
  },[])

  return (
    <Suspense fallback={<div>Loading...</div>}/>
  );
}
