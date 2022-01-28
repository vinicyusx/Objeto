let eu = {
    nome: "Vinicyus",
    sobrenome: "Mascarenhas" ,
    idade: 20,
    
}
eu.cidade = "Rio de Janeiro"

delete eu.sobrenome
 console.log(eu)

 let cadastro = [
     {
         nome: "Ana clara",
         idade:22 ,
         telefone:2195676-3580,
         amigos:["Miguel", "Sophia","Davi","Alice"],
     }, 
     {
         nome: "Alex",
         idade: 27, 
         telefone: 2195428-9752,
         amigos:["Arthur", "Julia","Pedro",		"Isabella"] ,
     },
     {
         nome: "Nycole",
         idade: 20,
         telefone:2190379-4608 ,
         amigos:["Rafael", "Giovanna","Heitor","Maria Eduarda"],
     }, 
     {
         nome: "Sharon",
         idade:28 ,
         telefone: 2193548-7348,
         amigos:["Gabriel",	"Manuela","Bernardo","Laura"] ,
     }, 
     {
         nome: "Jean",
         idade: 24,
         telefone: 2198309-5867 ,
         amigos: ["Lucas", "Luiza","Matheus","Valentina"],
     }
    ]
 
    console.log(cadastro[0].amigos[0])
    console.log(cadastro[1].amigos[1])
    console.log(cadastro[2].amigos[2])
    console.log(cadastro[3].amigos[3])
    console.log(cadastro[4].amigos[2])