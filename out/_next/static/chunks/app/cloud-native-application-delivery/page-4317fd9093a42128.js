(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[978],{4215:(e,t,s)=>{Promise.resolve().then(s.bind(s,9093))},7030:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(5155),o=s(7825),n=s(2051),i=s(1640);function r(){return(0,a.jsxs)("footer",{className:"mt-8 text-center text-gray-400 text-sm",children:[(0,a.jsxs)("p",{className:"mb-2",children:["Created by ",(0,a.jsx)("a",{className:"text-blue-300",target:"_blank",href:"https://www.purutuladhar.com",children:"Puru Tuladhar"})," – Sharpen your skills and keep learning!"]}),(0,a.jsxs)("a",{href:"https://tally.so/r/3N4O8W",target:"_blank",className:"text-underline",children:["Leave a ",(0,a.jsx)("span",{className:"text-blue-300",children:"feedback"})]})," | ",(0,a.jsxs)("a",{href:"https://patreon.com/puru",target:"_blank",className:"",children:["Support me on ",(0,a.jsx)("span",{className:"text-blue-300",children:"Patreon"})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"flex justify-center space-x-4",children:[(0,a.jsx)("a",{href:"https://twitter.com/ptuladhar3",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300","aria-label":"",children:(0,a.jsx)(o.A,{size:24})}),(0,a.jsx)("a",{href:"https://www.linkedin.com/in/ptuladhar3/",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300","aria-label":"",children:(0,a.jsx)(n.A,{size:24})}),(0,a.jsx)("a",{href:"https://github.com/tuladhar",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300","aria-label":"",children:(0,a.jsx)(i.A,{size:24})})]})]})}},9093:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f});var a=s(5155),o=s(8803),n=s.n(o),i=s(2115),r=s(5683),l=s(6899),c=s(3239),u=s(5340),m=s(5565),p=s(4918),d=s(7030);let h=[{question:"What is the primary purpose of GitOps in cloud-native application delivery?",options:["To automate infrastructure provisioning","To manage application deployments through Git repositories","To monitor application performance","To create container images"],correctAnswers:["To manage application deployments through Git repositories"],multipleAllowed:!1},{question:"Which of the following best describes Continuous Integration (CI)?",options:["A process to deploy applications to production environments","A method for monitoring application health","A strategy for scaling applications","A practice where developers frequently integrate code changes into a shared repository"],correctAnswers:["A practice where developers frequently integrate code changes into a shared repository"],multipleAllowed:!1},{question:"In a CI/CD pipeline, what does the 'CD' stand for?",options:["Continuous Development","Container Deployment","Continuous Delivery or Continuous Deployment","Cloud Deployment"],correctAnswers:["Continuous Delivery or Continuous Deployment"],multipleAllowed:!1},{question:"Which tool is commonly used for implementing GitOps?",options:["Jenkins","Argo CD","Terraform","Docker"],correctAnswers:["Argo CD"],multipleAllowed:!1},{question:"What role does a CI/CD tool play in cloud-native application delivery?",options:["It only builds container images","It manages Kubernetes clusters","It monitors application logs","It automates the testing and deployment of applications"],correctAnswers:["It automates the testing and deployment of applications."],multipleAllowed:!1},{question:"Which of the following is NOT a benefit of using GitOps?",options:["Improved collaboration among team members","Faster recovery from failures","Elimination of all manual processes","Version control for infrastructure changes"],correctAnswers:["Elimination of all manual processes"],multipleAllowed:!1},{question:"What is the main advantage of using CI/CD in cloud-native environments?",options:["Reduced infrastructure costs","Faster and more reliable software delivery","Simplified application architecture","Increased manual testing"],correctAnswers:["Faster and more reliable software delivery"],multipleAllowed:!1},{question:"In GitOps, how are changes to the application environment typically made?",options:["Directly in the production environment","Through a graphical user interface provided by Kubernetes","By modifying configuration files in a Git repository","By using command-line tools exclusively"],correctAnswers:["By modifying configuration files in a Git repository"],multipleAllowed:!1},{question:"'Infrastructure as Code' (IaC) is primarily associated with which aspect of cloud-native application delivery?",options:["Automating infrastructure provisioning and management","Monitoring application performance","Creating container images","Deploying applications manually"],correctAnswers:["Automating infrastructure provisioning and management"],multipleAllowed:!1},{question:"'Blue-Green Deployment' is a strategy used in which part of CI/CD?",options:["Continuous Integration phase only","Continuous Testing phase only","Continuous Delivery or Continuous Deployment phase","Infrastructure as Code phase"],correctAnswers:["Continuous Delivery or Continuous Deployment phase"],multipleAllowed:!1},{question:"'Canary Releases' are primarily used to:",options:["Rollback to previous versions quickly","Monitor system performance continuously","Test new features on a small subset of users before full deployment","Automate infrastructure setup"],correctAnswers:["Test new features on a small subset of users before full deployment"],multipleAllowed:!1},{question:"Which of the following best describes the concept of 'Infrastructure as Code' (IaC)?",options:["Using physical servers to manage infrastructure","Managing infrastructure through code and automation tools","Manually configuring servers for each deployment","Writing documentation for infrastructure setups"],correctAnswers:["Managing infrastructure through code and automation tools"],multipleAllowed:!1},{question:"What is the primary function of a Continuous Deployment (CD) pipeline?",options:["To automate code reviews","To build container images only","To deploy every change that passes tests automatically to production","To monitor application performance"],correctAnswers:["To deploy every change that passes tests automatically to production"],multipleAllowed:!1},{question:"In a GitOps workflow, what triggers the deployment of an application?",options:["Manual intervention by developers","Changes pushed to the Git repository","Scheduled jobs in Kubernetes","Monitoring alerts from the application"],correctAnswers:["Changes pushed to the Git repository"],multipleAllowed:!1}],g=["A","B","C","D","E","F","G","H"],x=1e3/h.length;function f(){let[e,t]=(0,i.useState)(0),[s,o]=(0,i.useState)(0),[f,y]=(0,i.useState)([]),[b,w]=(0,i.useState)(!1),[j,v]=(0,i.useState)([]),[A,C]=(0,i.useState)(!1),[N,D]=(0,i.useState)(0),k=t=>{let s=h[e];s.multipleAllowed?f.includes(t)?y(e=>e.filter(e=>e!==t)):f.length<(s.maxSelections||1/0)&&y(e=>[...e,t]):y([t])},z=h[e],q=z.multipleAllowed&&f.length>=(z.maxSelections||1/0),I=z.multipleAllowed?f.length!==z.maxSelections:0===f.length;return(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-4 bg-pattern",children:[(0,a.jsx)(n(),{id:"5aaa0a84c2479658",children:".bg-pattern{background-image:url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")}"}),(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 w-full max-w-2xl bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg p-4 sm:p-6 md:p-8",children:[(0,a.jsx)("div",{className:"jsx-5aaa0a84c2479658 flex justify-center mb-6",children:(0,a.jsx)(m.default,{src:"/logo.svg",alt:"Quiz Logo",width:160,height:160,className:"rounded-full bg-white p-2"})}),(0,a.jsx)("h1",{className:"jsx-5aaa0a84c2479658 text-3xl md:text-4xl font-bold text-center mb-6 text-blue-300",children:"Cloud Native Application Delivery"}),(0,a.jsx)(r.N,{mode:"wait",children:b?(0,a.jsxs)(l.P.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},className:"text-center",children:[(0,a.jsx)("h2",{className:"jsx-5aaa0a84c2479658 text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-100",children:"Quiz Completed!"}),(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 text-xl sm:text-2xl mb-4 sm:mb-6 text-blue-300",children:["Your score: ",Math.round(s)," / ",1e3]}),(0,a.jsx)("p",{className:"jsx-5aaa0a84c2479658 "+"text-xl sm:text-2xl mb-2 ".concat(A?"text-green-400":"text-red-400"),children:A?"Congratulations! You passed with ".concat(N,"%"):"Sorry, you did not pass. You scored ".concat(N,"%")}),(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 mt-6 sm:mt-8 text-left",children:[(0,a.jsx)("h3",{className:"jsx-5aaa0a84c2479658 text-lg sm:text-xl font-semibold mb-4 text-gray-100",children:"Question Summary:"}),h.map((e,t)=>(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 mb-4 sm:mb-6 bg-gray-700 bg-opacity-50 rounded-lg p-3 sm:p-4",children:[(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 font-medium mb-2 text-gray-100",children:[t+1,". ",e.question]}),(0,a.jsx)("div",{className:"jsx-5aaa0a84c2479658 mb-2",children:e.options.map((t,s)=>(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 "+"".concat(e.correctAnswers.includes(t)?"text-green-400":"text-gray-300"),children:[g[s],". ",t]},s))}),(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 "+"flex items-center ".concat(JSON.stringify(j[t].sort())===JSON.stringify(e.correctAnswers.sort())?"text-green-400":"text-red-400"),children:["Your Answer(s): ",j[t].map(t=>g[e.options.indexOf(t)]).join(", "),JSON.stringify(j[t].sort())===JSON.stringify(e.correctAnswers.sort())?(0,a.jsx)(c.A,{className:"ml-2 w-5 h-5"}):(0,a.jsx)(u.A,{className:"ml-2 w-5 h-5"})]})]},t))]}),(0,a.jsx)("button",{onClick:()=>{t(0),o(0),y([]),w(!1),v([]),C(!1),D(0)},className:"jsx-5aaa0a84c2479658 mt-4 sm:mt-6 p-3 sm:p-4 bg-orange-500 hover:bg-orange-600 rounded-lg text-lg font-semibold transition-all duration-300 text-white w-full",children:"Restart Quiz"})]},"results"):(0,a.jsxs)(l.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},children:[(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 mb-4 text-lg font-semibold text-blue-300",children:["Question ",e+1," of ",h.length]}),(0,a.jsx)("h2",{className:"jsx-5aaa0a84c2479658 text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100",children:z.question}),(0,a.jsx)("div",{className:"jsx-5aaa0a84c2479658 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6",children:z.options.map((e,t)=>(0,a.jsxs)("button",{onClick:()=>k(e),disabled:q&&!f.includes(e),className:"jsx-5aaa0a84c2479658 "+"p-3 sm:p-4 rounded-lg text-left transition-all duration-300 ".concat(f.includes(e)?"bg-green-600 text-white":q?"bg-gray-600 text-gray-400 cursor-not-allowed":"bg-gray-700 hover:bg-gray-600 text-gray-100"),children:[(0,a.jsxs)("span",{className:"jsx-5aaa0a84c2479658 font-bold mr-2",children:[g[t],"."]})," ",e]},e))}),z.multipleAllowed&&(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 text-sm text-blue-300 mb-4",children:["This question requires ",z.maxSelections," selections. You have selected ",f.length," out of ",z.maxSelections,"."]}),(0,a.jsx)("button",{onClick:()=>{let a=h[e],n=a.multipleAllowed?a.correctAnswers.every(e=>f.includes(e))&&f.length===a.correctAnswers.length:f[0]===a.correctAnswers[0];if(n&&o(s+x),v([...j,f]),e+1<h.length)t(e+1),y([]);else{let e=s+(n?x:0),t=e>=700;C(t),D(Math.round(e/1e3*100)),w(!0),t&&setTimeout(()=>{(0,p.A)({particleCount:100,spread:70,origin:{y:.6}})},500)}},disabled:I,className:"jsx-5aaa0a84c2479658 "+"w-full p-3 sm:p-4 rounded-lg text-lg font-semibold transition-all duration-300 ".concat(I?"bg-gray-600 cursor-not-allowed text-gray-400":"bg-orange-500 hover:bg-orange-600 text-white"),children:e===h.length-1?"Finish Quiz":"Next Question"})]},"question")}),(0,a.jsx)(d.A,{})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[6,379,441,517,358],()=>t(4215)),_N_E=e.O()}]);