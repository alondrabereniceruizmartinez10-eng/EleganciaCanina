import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();
// seed
async function main() {
// $2a$12$LPIFysp8Ct5RdrlR8U0B4O8rUN9w43LfiB9ykD9eW4zeJhcje19aS

  await prisma.breed.createMany({
    data: [

      // PERROS
      { species: Specie.DOG, name: "Labrador Retriever" },
      { species: "dog", name: "Pastor Alemán" },
      { species: "dog", name: "Golden Retriever" },
      { species: "dog", name: "Bulldog" },
      { species: "dog", name: "Beagle" },
      { species: "dog", name: "Caniche (Poodle)" },
      { species: "dog", name: "Rottweiler" },
      { species: "dog", name: "Yorkshire Terrier" },
      { species: "dog", name: "Boxer" },
      { species: "dog", name: "Dachshund (Salchicha)" },
      { species: "dog", name: "Husky Siberiano" },
      { species: "dog", name: "Gran Danés" },
      { species: "dog", name: "Chihuahua" },
      { species: "dog", name: "Pomerania" },
      { species: "dog", name: "Pug" },
      { species: "dog", name: "Dálmata" },
      { species: "dog", name: "Samoyedo" },
      { species: "dog", name: "Doberman" },
      { species: "dog", name: "Alaskan Malamute" },
      { species: "dog", name: "Mestizo" },

      // GATOS
      { species: "cat", name: "Carey (Tricolor)" },
      { species: "cat", name: "Siamés" },
      { species: "cat", name: "Persa" },
      { species: "cat", name: "Birmano" },
      { species: "cat", name: "Maine Coon" },
      { species: "cat", name: "Esfinge" },
      { species: "cat", name: "Bengalí" },
      { species: "cat", name: "Bombay" },
      { species: "cat", name: "Angora" },
      { species: "cat", name: "Ruso Azul" },
      { species: "cat", name: "Oriental" },
      { species: "cat", name: "Ginger (Naranja)" },
      { species: "cat", name: "Atigrado (Tabby)" },
      { species: "cat", name: "Esmoquin (Tuxedo)" }
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