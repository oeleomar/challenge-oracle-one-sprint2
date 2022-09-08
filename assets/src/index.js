import { data } from './data.js';


export const dataVerify = () => {
  const localData = localStorage.getItem('data');
  const jsonData = JSON.stringify(data);
  if(localData === 'null' || !localData){
    localStorage.setItem('data', jsonData);
    return;
  }
  localStorage.setItem('data', localData);
}

dataVerify();