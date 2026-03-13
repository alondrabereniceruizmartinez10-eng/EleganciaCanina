import { Specie } from "@prisma/client";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();
// seed
async function main() {
// $2a$12$LPIFysp8Ct5RdrlR8U0B4O8rUN9w43LfiB9ykD9eW4zeJhcje19aS

  await prisma.breed.createMany({
    data: [

      // PERROS
      { species: Specie.DOG, name: "Labrador Retriever" },
      { species: Specie.DOG, name: "Pastor Alemán" },
      { species: Specie.DOG, name: "Golden Retriever" },
      { species: Specie.DOG, name: "Bulldog" },
      { species: Specie.DOG, name: "Beagle" },
      { species: Specie.DOG, name: "Caniche (Poodle)" },
      { species: Specie.DOG, name: "Rottweiler" },
      { species: Specie.DOG, name: "Yorkshire Terrier" },
      { species: Specie.DOG, name: "Boxer" },
      { species: Specie.DOG, name: "Dachshund (Salchicha)" },
      { species: Specie.DOG, name: "Husky Siberiano" },
      { species: Specie.DOG, name: "Gran Danés" },
      { species: Specie.DOG, name: "Chihuahua" },
      { species: Specie.DOG, name: "Pomerania" },
      { species: Specie.DOG, name: "Pug" },
      { species: Specie.DOG, name: "Dálmata" },
      { species: Specie.DOG, name: "Samoyedo" },
      { species: Specie.DOG, name: "Doberman" },
      { species: Specie.DOG, name: "Alaskan Malamute" },
      { species: Specie.DOG, name: "Mestizo" },

      // GATOS
      { species: Specie.CAT, name: "Carey (Tricolor)" },
      { species: Specie.CAT, name: "Siamés" },
      { species: Specie.CAT, name: "Persa" },
      { species: Specie.CAT, name: "Birmano" },
      { species: Specie.CAT, name: "Maine Coon" },
      { species: Specie.CAT, name: "Esfinge" },
      { species: Specie.CAT, name: "Bengalí" },
      { species: Specie.CAT, name: "Bombay" },
      { species: Specie.CAT, name: "Angora" },
      { species: Specie.CAT, name: "Ruso Azul" },
      { species: Specie.CAT, name: "Oriental" },
      { species: Specie.CAT, name: "Ginger (Naranja)" },
      { species: Specie.CAT, name: "Atigrado (Tabby)" },
      { species: Specie.CAT, name: "Esmoquin (Tuxedo)" }
    ]
  });

  console.log("Razas insertadas correctamente");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });