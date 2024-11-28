const Profile = require("../src/models/profileModel");
const Contract = require("../src/models/contractModel");
const Job = require("../src/models/jobModel");

async function seedData() {
  try {
    // Verificar se o perfil já existe
    let profile = await Profile.findOne({ where: { firstName: "John", lastName: "Doe" } });

    if (!profile) {
      profile = await Profile.create({
        firstName: "John",
        lastName: "Doe",
        profession: "Developer",
        balance: 2000.0,
        type: "Client",
      });
      console.log("Perfil criado com sucesso!");
    } else {
      console.log("Perfil já existe!");
    }

    // Verificar se o contrato já existe
    let contract = await Contract.findOne({ where: { clientId: profile.id } });

    if (!contract) {
      contract = await Contract.create({
        terms: "Termos do contrato X",
        clientId: profile.id,
        operationDate: new Date(),
        status: "Ativo",
      });
      console.log("Contrato criado com sucesso!");
    } else {
      console.log("Contrato já existe!");
    }

    // Verificar se os jobs já existem
    const existingJobs = await Job.findAll({ where: { contractId: contract.id } });

    if (existingJobs.length === 0) {
      await Job.create({
        contractId: contract.id,
        description: "Desenvolvimento de Software",
        operationDate: new Date(),
        price: 1500.0,
        paid: false,
      });

      await Job.create({
        contractId: contract.id,
        description: "Testes de Software",
        operationDate: new Date(),
        price: 500.0,
        paid: false,
      });
      console.log("Jobs criados com sucesso!");
    } else {
      console.log("Jobs já existem!");
    }
  } catch (error) {
    console.error("Erro ao inserir dados de exemplo:", error);
  }
}

module.exports = { seedData };
