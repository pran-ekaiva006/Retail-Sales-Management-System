import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const DATA_PATH = path.join(process.cwd(), 'src', 'data', 'data.csv');

function readCSV(p){
  return new Promise((res,rej)=>{
    const out=[];
    fs.createReadStream(p)
      .on('error',rej)
      .pipe(csv())
      .on('data',r=>out.push(r))
      .on('end',()=>res(out))
  })
}

let DATA_CACHE = [];

export async function loadDataset(){
  try{
    if(!fs.existsSync(DATA_PATH)){ 
      console.warn(`Dataset not found at ${DATA_PATH}. Place your CSV there.`); 
      DATA_CACHE=[]; 
    } else { 
      DATA_CACHE = await readCSV(DATA_PATH); 
      console.log(`✅ Loaded ${DATA_CACHE.length} records from CSV`);
    }
    return { getData: ()=>DATA_CACHE };
  }catch(e){ 
    console.error('Failed to load dataset', e); 
    DATA_CACHE=[]; 
    return { getData: ()=>DATA_CACHE };
  }
}
