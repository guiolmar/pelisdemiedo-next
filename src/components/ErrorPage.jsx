import { Skull } from "lucide-react"; // Importamos el ícono de Skull de lucide-react
import { Button } from "@/components/ui/button"; // Importamos el botón de shadcn

export default function ErrorPage({ message }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white px-4">
      <div className="flex flex-col items-center text-center">
        <Skull className="w-20 h-20 mb-4 text-red-600" /> {/* Icono Skull */}
        <h1 className="text-5xl font-bold mb-4">¡Oh no!</h1>
        <p className="text-xl mb-8">
          {message || "Parece que esta película no existe."}
        </p>
        <Button asChild size="lg" className="mt-4">
          <a href="/"> {/* Botón estilizado con enlace */}
            Volver a la página principal
          </a>
        </Button>
      </div>
    </div>
  );
}
