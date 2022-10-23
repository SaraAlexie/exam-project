# Projektdokumentation

-   **Uddannelse**: Webudvikler
-   **Hold**: WU05
-   **Af**: Sara Alexie Noomi Nederskov (SaraAlexie på [Github](https://github.com/SaraAlexie))

## Jamstack

Javascript, API's og Markup. Med Jamstack begger man hele frontenden af sin applikation optimeret med statiske sider.
Det får applikationen til at køre hurtigere og mere sikkert.

_"Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup."_ Citat fra [DigitalOcean](https://www.digitalocean.com/community/tutorials/jamstack-the-what-the-why-and-the-how)

Front-end og back-end er afkoblet fra hinanden, hvilket gør udviklerens liv en del nemmere.

## Opbygning

Til at administrere min front-end bruger jeg React, som er et komponentbaseret JavaScript bibliotek. Ved at gøre det komponentbaseret kan man lave mange simple komponenter, som kan genbruges flere steder, til at opbygge en kompliceret app.
Min primære grund til at bruge React er, at det er et bibliotek jeg føler mig sikker i at bruge. Jeg har også et kendskab til Next.js, som gør dig i stand til at bygge en React app, som renderer siden i serveren i stedet for i browseren, hvilket giver bedre ydeevne og SEO (Search Engine Optimization).

## Kode fra tredje part

-   React Router: som navnet indikerer, bliver det brugt til routing i applikationen. Her bruges primert Routes, Route og Link til at definere routes. Der er også mulighed for nested routing. Ydermere kan man bruge hooks: useHistory, useLocation og useParams. Ej at forglemme Browserrouter rundt om din app, ellers virker det ikke.
-   Axios: er en simpel promise-baseret http client til browseren og node.js. Den er isomorphisk, hvilket betyder, at den kan køre både i browseren og node.js med den samme kodebase. Den transformere også automatisk til JSON data.
-   Emotion og styled components: bruges til styling af applikationen. Emotion bruges til at style et komponent i samme fil, så man kan slippe for at have en masse css filer liggende i applikationen. Styled components kan bruges til at lave et komponent, som i sig selv er stylet, og som kan wrappes om et andet komponent og på den måde overføre stylingen.
-   React Helmet Async: er et genbrugeligt komponent, som kan bruges til at behandle alle head-tags, er dermed ændre i titel, meta og lignende. Den tager html og outputter html, dejlig simpelt. Installerede react-helmet-async for at undgå bugs.
-   React Hook Form: bruges til formvalidering. Med React Form Hook registrerer man sit komponent ind i hooket, hvilket vil gøre ens værdi tilgængelig for både validering og submission. Valideringen med dette hook følger HTML standerden for formvalidering. Jeg kunne have benyttet mig af Formik, men React Hook Form kan det jeg skal bruge, og jeg føler mig mere sikker i det.
-   React icons: gør det nemt at bruge iconer i sin applikation. Den gør dig i stand til at bruge ikoner fra forskellige samlinger, men kun dem som netop din applikation skal bruge.
-   Framer motion: Er et animationsbibliotek specialt lavet til react. Biblioteket har mange forskellige props, som kan bruges til at animere indhold, bl.a. ved hover.
-   Animate-css: er et bibliotek med css animationer. Det kan bruges til at animere elementer ind på og ud fra siden, med forskellige animationstyper, som bl.a. fade og bounce. Man kan også give dem en animationslængde eller et delay.
-   React Multi Carousel: Er en carusel, som kan vise flere elementer per slide.
-   React Elastic Carousel: Er også en carusel, men har flere props, en den forrige, som bl.a. infinite loop.
-   React Responseive Carousel: Er (endnu) en carusel. Den giver mulighed for at vise mere end billeder, bl.a. videoer og lyd.
-   React Intersection Observer: Er et hook, som kan bruges til at holde øje med, hvor et givent element kommer ind i viewporten.

## Selvstændige valg

Jeg har så vidt det har været muligt og givet mening fundet npm-pakker til at løse nogle problemer for mig, så jeg kunne få løst så meget af opgaven som muligt inde for tidsrammen. Jeg har bl.a. brugt flere forskellige karuseller til slideshows og gallerier, fordi de hver især har kunne løse nogle udfordringer, som der kom med de forskellige dele af opgaven. Jeg har også afviget lidt fra stylingen på de udleverede mockups. Bl.a. har jeg tilføjet hvide borders i top og bund på kommentarene på blogindlæg, så det var nemmer at skelne mellem dem.

### Valgfri opgave:

-   **A**: blogindlæg. Sektion 7 på forsiden. Enkelt-blogindlæg og kommentare.
-   **B**: Media-afspillere. Sektion 4 og 5.

## Arbejdsgang

Dagen for opgaveudleveringen startede med at være lidt kaotisk. Jeg fik lavet et react projekt, men derefter kom jeg til at lave nogle dumme fejl og bruge for meget tid på problemer, der i sidste ende havde simple løsninger. Men sidst på eftermiddagen fik jeg styr på mig selv, og jeg fik lavet routing og Hero'en med animationer. Jeg oprettede også et komponent kaldet Sandbox.js, hvor jeg testede forskellige dele af min kode.
De næste par dage kom jeg godt i gang med landingpage, og fik lavet meget funktionalitet. Et par gange kom jeg til at fokusere for meget og for længe på mindre detaljer, der ikke var så væsentlige, men kom dog videre. Herefter kom der mere fokus på funktionalitet, mest i forbindelse med bloggen og formularer, hvilket jeg fandt meget udfordrende, hvilket da også kom til at gå ud over stylingen. Men her den sidste dag, har jeg dedikeret det meste af min tid på at få siden til at se mere færdig ud og få rettet på de mindre detaljer.
Kort sagt: jeg har gjort mit bedste, nået så meget jeg kunne og gjort en god indsats.

## Punkter til bedømmelse

### Hero.js:

```javascript
const location = useLocation();
const [visible, setVisible] = useState(true);

useEffect(() => {
    setTimeout(() => {
        setVisible(false);
    }, 2000);
}, []);

const loader = css`
    width: 100%;
    height: 100vh;
    display: ${location.pathname === "/" ? "block" : "none"};
`;
```

### HeroImage.js:

```javascript
const images = ["./assets/bg/header_bg_2.jpg", "./assets/bg/header_bg_3.jpg"];

const image = images[Math.floor(Math.random() * images.length)];
```

### StyledHeading.js:

```javascript
const StyledHeading = ({ title }) => {
    const heading = css`
        text-align: center;
    `;

    const headingH2 = css`
        margin: 0;
        font-weight: 500;
        text-transform: uppercase;
        color: #ffffff;
    `;

    return (
        <section css={heading}>
            <h2 css={headingH2}>{title}</h2>
            <img src="./assets/bottom_line2.png" alt="Underline" />
        </section>
    );
};
```

## Opdateringer:

Projektet er ved at blive opdateret..
