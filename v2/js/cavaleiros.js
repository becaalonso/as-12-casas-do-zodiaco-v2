


function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    var texto2 = document.querySelector("h2");
    const dia = document.querySelector('#valor2').value;
    const mês = document.querySelector('#valor3').value;

    const data= "2023" + "/"+ mês+"/"+dia;

    //alert(`${data}`);
    
    
    if(data >="2023/05/21" && data <= "2023/06/20" ){

        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML= "Muito sociável, fala com todo mundo naturalmente. Aliás, essa é sua principal característica. É por meio de todo esse papo que ela demonstra o talento e a criatividade."
        
       
    }

    else if(data >="2023/10/23" && data<= "2023/11/21" ){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
        p="Reservados e profundos, os escorpianos têm a intensidade como característica marcante. São pessoas que exalam mistério e poder, e dificilmente deixam-se acessar por completo."
    }
    
    else if(data >="2023/02/21" && data<= "2023/03/20" ){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
        p="Peixes percebe o mundo por meio de uma ótica sentimentalista. Piscianos costumam ter forte intuição e guiam as ações com base nas emoções. Peixes está ligado a diversas virtudes, são compreensivos, compassivos, empáticos e humildes."
    }

    else if(data >="2023/07/23" && data<= "2023/08/22" ){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leaoo.jpg");
        imagem.setAttribute("width","300px");
        p=" Leão são expansivos, alegres e exuberantes. Os leoninos são dotados de um brilho especial e marcam presença aonde chegam com toda sua luz."
    }


    else if(data >="2023/01/21" && data<= "2023/02/18"  ){
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","300px");
        p="Os aquarianos são pessoas muito diretas e não gostam de trapaças e de coisas feitas por baixo dos panos."
    }

    else if(data >="2023/03/21" && data<= "2023/04/20" ){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","300px");
        p="O signo de Áries é o primeiro do zodíaco e as pessoas regidas por esse signo, geralmente são impulsivas, corajosas e não abaixam a cabeça quando são confrontadas. Além disso, um traço do signo Áries personalidade é valorizar a individualidade e sinceridade."
    }

    else if(data >="2023/06/21" && data<= "2023/07/22" ){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
        p="Os cancerianos são sonhadores, empáticos e sentimentais, e a imaginação deles não tem limites. Dóceis, gentis, românticos e carinhosos, são pessoas que se preocupam profundamente com seus amigos, família e lar"
    }

    else if(valor=="capricornio" | valor == capricórnio ){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
        p="Os nascidos em Capricórnio são conhecidos por serem naturalmente sérios, centrados e ligados ao trabalho e ao dinheiro. Eles pensam muito no futuro e não conseguem vislumbrar uma vida de aventuras e sem segurança."
    }

    else if(data >="2023/09/23" && data<= "2023/10/22" ){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
        p="As pessoas de Libra são conhecidas por serem naturalmente indecisas, mas a verdade é que são pessoas muito simpáticas que praticam de forma espontânea a empatia e estão sempre vendo o lado bom da vida, sendo ainda pessoas muito elegantes, alegres e muito positivas."
    }

    else if(data >="2023/11/22" && data<= "2023/12/21" ){
        texto.innerHTML = "Sargitário";
        imagem.setAttribute("src","img/sargitario.png");
        imagem.setAttribute("width","300px");
        p="As pessoas nascidas sob o signo de Sagitário estão sempre abertas a novas experiências e querendo aprender. Mente aberta e intuitiva, possuem uma personalidade inquieta e mutável. O sagitário personalidade é aquela pessoa que gosta de viver e descobrir todas as coisas que o mundo tem a oferecer."
    }


    else if(data >="2023/04/21" && data<= "2023/05/20" ){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
        p="São conhecidas por serem pragmáticas, produtivas, práticas, determinadas, perseverantes e sensuais. Além disso, fazem da realidade seu mundo, gostam de segurança, estabilidade e amam cuidar das suas coisas. Touro é um signo que gosta de desafios e luta com todas as forças para conseguir o que deseja."
    }

    else if(data >="2023/08/23" && data<= "2023/09/22" ){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
        p="Virgem também é o signo mais leal com quem ama de verdade, familiares, amigos e nos relacionamentos amorosos. O amor de Virgem signo é baseado na verdade e na maturidade, quem tem muitos planetas neste signo pode demonstrar seus sentimentos de forma mais prática."
    }

    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}