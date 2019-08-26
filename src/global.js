import React from 'react';


let isLogin = false;

const changeStatus = () => {
    isLogin = true;
   
    console.log(isLogin);
   
}

export const lam = {isLogin, changeStatus};