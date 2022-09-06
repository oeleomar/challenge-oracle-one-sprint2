import { data } from './data.js';


const dataVerify = () => {
  const localData = localStorage.getItem('data');
  const jsonData = JSON.stringify(data);
  console.log(typeof localData)
  if(localData === 'null'){
    localStorage.setItem('data', jsonData);
  }
  if(localData !== 'null') {
    localStorage.setItem('data', localData);
  }
}

dataVerify();