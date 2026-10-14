import PHOTO from './assets/photo.jpg';

const EMAIL='ralphgalate11@gmail.com';
const socials=[['github','https://github.com/Ralph080611'],['linkedin','https://www.linkedin.com/in/ralphgalate/'],['facebook','https://www.facebook.com/share/1KCw45vkck/?mibextid=wwXIfr'],['instagram','https://www.instagram.com/xandorei']];
const roles=['BSIT Student','Web Developer','React Enthusiast','Public Relations Officer'];
const stack=['React JS','JavaScript','HTML5','CSS3','Tailwind CSS'];
const hobbies=['Coding','Gaming','Music','Photography'];
const edu=[['2024–2028','Nueva Vizcaya State University','College · Expected Graduate 2028',1],['2022–2024','Nueva Vizcaya General Comprehensive High School','Senior High School · Graduated 2024'],['2018–2022','Nueva Vizcaya General Comprehensive High School','Junior High School · Completed 2022'],['2012–2018','Bayombong Central School & SPED Center','Elementary · Graduated 2018'],['2011–2012','Nueva Vizcaya State University Daycare','Kindergarten · Completed 2012']];
const lead=[['FITS','Public Relations Officer 1','2026–2027'],['CITE SC','Public Relations Officer 2','2025–2026'],['Classroom','Mayor','2018–2019']];
const certs=[
 {t:'AWS AI Practitioner Challenge',i:'Udacity',y:'Apr 2026'},
 {t:'Generative AI Leader',i:'Google Cloud',y:'Apr 2026',id:'2USTA1WLTY5A'},
 {t:'AWS Educate Introduction to Cloud 101 - Training Badge',i:'Amazon Web Services (AWS)',y:'Apr 2026'},
 {t:'Agile Project Management Foundation',i:'HP LIFE',y:'Feb 2026',exp:'Aug 2036',id:'adedb--b-aa-fdbfb'},
 {t:'Software Engineering Job Simulation',i:'Accenture',y:'Nov 2024',exp:'Aug 2030',id:'FneNRSn5i3ixMNsuP',sk:'Software Development'},
 {t:'Technical Support Fundamentals',i:'Google',y:'Jan 2025',id:'C7U2N4IYBHOF'}]; /* add link:'https://...' to show a credential link */
const code={"React JS": "function Greeting({ name }) {\n  const [count, setCount] = useState(0);\n\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Hi {name}, clicked {count} times\n    </button>\n  );\n}", "JavaScript": "const skills = ['HTML5', 'CSS3', 'JavaScript', 'React'];\n\nconst list = skills.map((s, i) => `${i + 1}. ${s}`);\n\nconsole.log(list.join('\\n'));", "HTML5": "<section id=\"about\">\n  <h1>Ralph Andrei D. Galate</h1>\n  <p>BSIT student</p>\n  <a href=\"#contact\">Contact me</a>\n</section>", "CSS3": ".card {\n  border: 1px solid #e6e6e6;\n  padding: 1.5rem;\n  transition: transform 0.3s;\n}\n\n.card:hover {\n  transform: translateY(-4px);\n}", "Tailwind CSS": "<div class=\"flex items-center gap-4 border p-6\n            transition hover:-translate-y-1\">\n  <h2 class=\"text-xl font-medium\">Hello, world</h2>\n</div>"};const ext={"React JS": "jsx", "JavaScript": "js", "HTML5": "html", "CSS3": "css", "Tailwind CSS": "html"};
/* PROJECTS: edit this list. Set sample:true on placeholders (shows a 'Sample' tag), delete the flag once a project is real.
   t=title, d=description, cat=filter category, tags=tech, github=repo link, demo=live link (optional), y=year */
const projects=[
 {t:'Portfolio Website',d:'This responsive portfolio: monochrome theme, light/dark mode, animated loader and custom cursor.',cat:'Web',tags:['React JS','Tailwind CSS','Vite'],github:'https://github.com/Ralph080611',y:'2026'},
 {t:'Student Organization Website',d:'A landing page and announcements hub for a student organization.',cat:'Web',tags:['React JS','Tailwind CSS'],github:'https://github.com/Ralph080611',demo:'',y:'2026',sample:true},
 {t:'Event Registration Page',d:'A simple sign-up flow for school events with form validation.',cat:'Web',tags:['React JS','JavaScript','CSS3'],github:'https://github.com/Ralph080611',y:'2025',sample:true},
 {t:'Mobile-First UI Concept',d:'A clean, accessible interface concept designed for small screens first.',cat:'Design',tags:['HTML5','CSS3','Tailwind CSS'],github:'https://github.com/Ralph080611',y:'2025',sample:true}];
const nav=[['Home','home'],['Education','education'],['Leadership','leadership'],['Stack','stack'],['Projects','projects'],['Certs','certifications'],['Hobbies','hobbies'],['Contact','contact']];
export {EMAIL,socials,roles,stack,hobbies,edu,lead,certs,code,ext,nav,projects,PHOTO};
