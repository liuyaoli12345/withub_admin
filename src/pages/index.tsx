import React, { useState } from 'react';
import Dashboard from '@/components/dashboard';
import withAuth from '@/hocs/auth'


const HomePage = ()=>{

  return (
      <Dashboard/>
  );
}

export default withAuth(HomePage)
