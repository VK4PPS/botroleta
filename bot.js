const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login("Nzc1ODYxMjM1Njg1NTIzNDg2.X6sfFQ.DVoZfDc4RJfe8tVDqj7989nGp3Q")

IDdojogo = 0
fasedojogo = ""          
users = []                  // Recebe as informações do jogadores
mentions = ""               // Recebe as informações necessarias para criar mentions dos jogadores
iniciador = ""              // Recebe as infromações do usuario que digite o comando ;roleta
modoBan = false             // Define se o Bot ira banir ou não o perdedor
narutosasuke = false        // Define se o menino Danilo ira perder toda vez
mensagem = ""
var urlRoleta = ["https://i.imgur.com/5Y7OjdO.gif", "https://i.imgur.com/gpWKg0d.gif", "https://i.imgur.com/0gKTlL7.mp4", "https://i.imgur.com/nRDsw5J.gif" ];
var urlClick = ["https://imgur.com/P8UtzuZ", "https://imgur.com/d7am1hy", "https://imgur.com/tga4MBW", "https://imgur.com/8XKhoQV" ];
var urlBang = ["Image1", "Image2", "Image3", "Image4" ];

bot.once('ready', () => {   //
    console.log("🔫")      // Executado quando o bot fica online, sinaliza que o mesmo está operacional 
});                         //



bot.on('message', msg =>{
    if (msg.content === ';ban off'){                               // Quando o comando ;ban off é detectado
    if (modoBan === false){                                         // checa se o modoBan é falso
        msg.reply("```O modo de segurança já está ligado```")       // se sim, comunica isso
    }else{
    modoBan = false;                                                // se não, torna ele falso e comunica
    msg.reply("```O MODO DE SEGURANÇA FOI ATIVADO, A ROLETA NÃO IRA BANIR O PERDEDOR```")    
    }}

    if (msg.content === ';ban on'){                                 // Quando o comando ;ban on é detectado
    if (modoBan === true){                                          // checa se o modoBan é verdadeiro
        msg.reply("```O modo de segurança já está desligado```")    // se sim, comunica isso
    }else{
    modoBan = true;                                                 // se não, torna ele positivo e comunica
    msg.reply("```O MODO DE SEGURANÇA FOI DESATIVADO, A ROLETA IRA BANIR O PERDEDOR```")
    }

}

})

bot.on('message', msg =>{

    if (msg.content === ';narutosasuke on'){                    // Quando o comando ;narutosasuke on é detectado
    
    if (narutosasuke === true){                                // checa se o narutosasuke é verdadeiro
        msg.reply("```O modo Naruto Sasuke já está ligado```")  // se sim, comunica isso  
    }else{
    narutosasuke = true;                                       // se não, torna ele verdadeiro e comunica
    msg.reply("```O modo Naruto Sasuke foi ativado```")    
    }}

    if (msg.content === ';narutosasuke off'){                   // Quando o comando ;narutosasuke off é detectado

    if (narutosasuke === false){                                // checa se o narutosasuke é falso
        msg.reply("```O modo Naruto Sasuke já está desligado```") // se sim, comunica isso    
    }else{
    narutosasuke = false;                                         // se não, torna ele falso e comunica
    msg.reply("```O modo Naruto Sasuke foi desativado```")
    }

}

})

bot.on('message', msg =>{

        if (msg.content === ';roleta')  {                      //Quando o comando ;roleta é detectado
            if (fasedojogo === ""){        //checa se roleta = false e roletando = false
                IDdojogo++
                fasedojogo = ";roleta" 
                msg.react('✅');
            const Embed1 = new Discord.MessageEmbed()           //se sim para as duas, cria e envia um embeded
            .setColor("RED")
            .setTitle(msg.author.username+" Iniciou uma Rodada de Roleta Russa.")
            .setDescription("digite `;entrar` para participar. Quando houverem jogadores suficientes, digite `;iniciar` para começar.")
            msg.channel.send(Embed1);
            
            if(modoBan === true){
                msg.channel.send("```AVISO, O MODO DE SEGURANÇA ESTÁ DESATIVADO, A ROLETA IRA EXPULSAR O PERDEDOR```")  //se o modoBan for true, comunica isso
            }

                                                                             //torna a variavel roleta = true, para impedir duplicatas do comando ;roleta

            iniciador = msg.author;                                                     //guarda as informações de quem usou o comando ;roleta na variavel iniciador 

            users.push(msg.member)                                                      //Insere as informações de quem usou o comando ;roleta no conjunto users
            entrar();   
                                                                             //Chama a função do comando ;entrar

            setTimeout(cooldown, 240000,)                                                //setTimeout que serve para bloquear as fazes ;roleta e ;entrar
            
            function cooldown(){
                contando(IDdojogo)
            }

            function contando(x){              
               if (fasedojogo !== ";iniciar" && fasedojogo !== "" && x === IDdojogo){    
                console.log("xx")                                                  
                console.log("-Contado()-")
                console.log("fase do jogo: "+fasedojogo)
                console.log("x: "+x)
                console.log("Id: "+IDdojogo)
                console.log("xx")   
                restart()
                }
            }
            }else{
                msg.reply("Uma rodada já foi iniciada.")  
            }
        }
    
})

function entrar(){
    bot.on('message', msg =>{
        if (msg.content === ';entrar'){    
            if (fasedojogo === ";roleta"){  
 
                                                                  //Quando o comando ;entrar é detectado           
                                              
            if (users.includes(msg.member) != true){                                                        //checa se quem usou o comando ;entrar não é a mesma pessoa que usou o comando ;roleta
                msg.react('✅');                                                                // se tudo estiver certo reage com ✅ ao comando ;entrar e
                users.push(msg.member);                                                          //insere as informações do usuario no conjunto users 
            }else{
                msg.reply("Você já está participando.")                                        
            }

                
           
            
            
        }}   
    })
}

bot.on('message', msg =>{

    if (msg.content === ';iniciar')  { 
                                                                                                         //Quando o comando ;iniciar é detectado  
        if (fasedojogo === ";roleta"){                                                                //Checa a fase do jogo
            fasedojogo === ";iniciar"                                                        //Desliga o comando ;entrar
            msg.react('✅');                                     
            //
            if (msg.author != iniciador){                                                   //Checa se quem usou o comadno ;iniciar é o mesmo que usou o ;roleta      
                msg.reply(" Apenas o Jogador que começou a roleta russa pode usar `;iniciar`");      //se não, comunica isso

   //         }else if (users.length === 1){ 
     //               msg.reply("É necessario mais de 1 jogador")
                }else{
            
            
       
    const Embed2 = new Discord.MessageEmbed()                                               //Cria e envia um embeded comunicando que a rodade vai começar
	.setColor("RED")                                                                        //
	.setTitle('Rodada Iniciada.')                                                           //
	.addFields(                                                                             //
		{ name: users.length+" Jogadores", value: mentionPlayers(), inline: true },         //Diz a quantidade de jogadores e menciona os mesmos
	)
    .setImage(urlRoleta[randomTrue(0, urlRoleta.length)])
    msg.channel.send(Embed2);



var numeroBan = random(1, users.length);                                                    //Pega o numero index no conjunto users do jogador que ira perder
var i = users.length;                                                                       


function mentionPlayers(){                                                                  //Função que pega o descriminator do discord de cada jogador e edita 
                                                                                            //para o formato de menções
for (i = users.length; i>0 ;i-- ){
    mentions += ' <@'+users[i-1].user.id+'> '

}
return(mentions)

}

            
function roletar() {                                                   //Função que passa por todos os jogadores do users, até chegar no que tem o numero index perdedor
  setTimeout(function() {                                               // esse função chama a si mesma, para poder usar o setTimou para gerar um delay 
                                                                        // não achei uma forma melhor de fazer isso


mensagem = msg.channel.lastMessage   

if (i != numeroBan) {                                                   //caso não seja o numero do perdedor, Diz "click"
    //msg.channel.send("<@"+users[i-1].user.id+">"+" click.") ;      
    try {
        
    
     mensagem.edit(
        Embed2.fields = [],
        Embed2.setTitle('').setDescription("Mirando em "+"<@"+users[i-1].user.id+">...")
        .setImage("https://media1.giphy.com/media/RiEW6mSQqjRiDy51MI/giphy.gif")
        ) 
        var x = users[i-1]        
        setTimeout(click, 4100, x)


    function click(x){

        mensagem.edit(
            Embed2.setTitle('').setDescription("<@"+x.user.id+">... click")
            .setImage(urlClick[randomTrue(0, urlClick.length)])
            )
    }

} catch (error) {
        
}

}else{
    //msg.channel.send("<@"+users[i-1].user.id+">"+" BANG!")   
    mensagem.edit(
        
        Embed2.fields = [],
        Embed2.setTitle('').setDescription("Mirando em "+"<@"+users[i-1].user.id+">...")
        .setImage("https://media0.giphy.com/media/RiEW6mSQqjRiDy51MI/giphy.gif")
        )
    var x = users[i-1]
    setTimeout(BANG, 4100, x)



    function BANG(x){

        mensagem.edit(
            Embed2.setTitle('').setDescription("<@"+x.user.id+">... BANG!")
            .setImage("https://thumbs.gfycat.com/PossibleGloriousAtlasmoth-size_restricted.gif")
            )
    
    x.user.send(Embed2)       
    x.voice.kick()
    if(modoBan === true){
        x.kick()
    }
    i = 0
    restart()
    }

}
    i--;        
    if (i > 0) {   
      roletar();   
    }            
  }, 10100)
}
roletar();  
}}}
})


function restart(){                                           //Função que zera as variaveis
    fasedojogo = ""
    users = []
    mentions = ""
    IDdojogo++

    console.log("xx")                                                  
                console.log("-Restart()-")
                console.log("fase do jogo: "+fasedojogo)
                console.log("Users: "+users)
                console.log("Mentions: "+mentions)
                console.log("xx")   
}

function random(min, max) {                                     //Função que gera um numero aleatorio               

    for (i = users.length; i>0 ;i-- ){                                   //Circula pelo conjunto users
                                                                            //
        if (users[i-1].user.discriminator === "2263" && narutosasuke === true){     //Caso o descriminator do menino Danilo esteja entre no users             
                                                                                      //Faz com que o numero usado para definir o perdedor, seja o numero                                                              
            return(i)                                                               //do menino Danilo
        }else{
    return Math.floor(Math.random() * (max - min)) + min;
        }
  }}                                                                                //Fim :)

  function randomTrue(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
  }