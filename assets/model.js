(function(root){
'use strict';
const strategies={conservative:{mean:.069,sd:.078,growth:.30},balanced:{mean:.084,sd:.091,growth:.68},growth:{mean:.078,sd:.072,growth:.835},high:{mean:.078,sd:.081,growth:.955}};
function random(seed){return function(){let t=seed+=0x6D2B79F5;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return ((t^t>>>14)>>>0)/4294967296;};}
function normal(rng){return Math.sqrt(-2*Math.log(1-rng()))*Math.cos(2*Math.PI*rng());}
function quantile(a,p){const x=(a.length-1)*p,i=Math.floor(x);return a[i]+(a[Math.min(i+1,a.length-1)]-a[i])*(x-i);}
function stats(a){const sorted=[...a].sort((x,y)=>x-y),mean=a.reduce((x,y)=>x+y,0)/a.length;return {mean,sd:Math.sqrt(a.reduce((s,x)=>s+(x-mean)**2,0)/(a.length-1)),p10:quantile(sorted,.1),median:quantile(sorted,.5),p90:quantile(sorted,.9)};}
function simulate(p){
 if(![25,50].includes(p.age)||![p.balance,p.salary,p.contribution,p.shock,p.shockAge].every(Number.isFinite)||p.balance<0||p.balance>1e7||p.salary<0||p.salary>1e6||p.contribution<0||p.contribution>.3||p.shock<-.8||p.shock>0||![59,65].includes(p.shockAge))throw new Error('请检查输入范围。');
 const n=p.n||1000;if(n<2||n>10000)throw new Error('模拟次数超出范围。');
 const years=67-p.age,rng=random(p.seed??2023),out=[[],[],[],[]],paths=[Array(years+1).fill(0),Array(years+1).fill(0)],ages=Array.from({length:years+1},(_,i)=>p.age+i);
 for(let i=0;i<n;i++){
  let balances=[p.balance,p.balance,p.balance,p.balance],salary=p.salary;
  paths[0][0]+=p.balance/n;paths[1][0]+=p.balance/n;
  const shockAt=Math.max(p.age,p.shockAge)+Math.floor(rng()*(67-Math.max(p.age,p.shockAge)));
  for(let y=0;y<years;y++){
   const age=p.age+y,z=normal(rng),life=age<50?strategies.high:age<55?strategies.growth:age<65?strategies.balanced:strategies.conservative;
   [life,life,strategies.balanced,strategies.balanced].forEach((s,k)=>{
    const nominal=(p.shock<0&&k%2===0&&age===shockAt)?p.shock*s.growth:Math.max(-1,s.mean+s.sd*z);
    balances[k]=balances[k]*(1+nominal)/1.025+salary*p.contribution;
   });
   paths[0][y+1]+=balances[0]/n;paths[1][y+1]+=balances[2]/n;
   salary*=1+(age<55?.038:.024);
  }
  balances.forEach((v,k)=>out[k].push(v));
 }
 return {stats:out.map(stats),paths,ages,parameters:{...p,n,seed:p.seed??2023}};
}
root.LifecycleModel={simulate,strategies};if(typeof module!=='undefined')module.exports=root.LifecycleModel;
})(typeof window!=='undefined'?window:globalThis);
