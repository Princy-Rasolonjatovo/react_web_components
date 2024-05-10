import PdfCard from "./components/PdfCard";
import DocumentButton from "./components/DocumentButton";

const App = () => {
  return (
    <div>
      {/* <PdfCard
        pdfurl="https://zestedesavoir.com/tutoriels/pdf/822/la-programmation-en-c-moderne.pdf"
        name="Nom du document"
        id="N° 12313"
        address="23 Rue de Liège"
      /> */}
      <DocumentButton pdfurl="https://zestedesavoir.com/tutoriels/pdf/822/la-programmation-en-c-moderne.pdf" />
    </div>
  );
};

export default App;
