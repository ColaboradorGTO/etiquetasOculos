function D(e="",s="",t=!0){return e=e?new Date(e):new Date,s=s?new Date(s):new Date,t&&(e.setHours(0,0,0,0),s.setHours(0,0,0,0)),Math.ceil(Math.abs(s-e)/(1e3*60*60*24))}export{D as r};
