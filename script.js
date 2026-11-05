const valorconta = prompt("informe o valor da conta");
const ValorGorjeta = prompt("Informe o valor incluido da gorjeta");
const Dividirconta = prompt(" Quantas pessoas na mesa para dividir a conta");
const Somadaconta = Number(valorconta) + Number(ValorGorjeta);
const ValorTotal = Number(Somadaconta) / Number(Dividirconta);


alert(`O valor da conta deu ${valorconta}R$ + o valor da Gorjeta ${ValorGorjeta}R$, deu o total de ${Somadaconta}, divido por ${Dividirconta} pessoas, o resultado final é: ${ValorTotal}R$`);