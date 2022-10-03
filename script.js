
      var limpa = false

      function calcular(tipo, valor){
        if(tipo === "acao"){
          if(valor === "c"){
            document.getElementById("resultado").value = ""
            }
          if(valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === "." ){
            document.getElementById("resultado").value += valor
            limpa = false
            } 
          if(valor === "="){
            var valor_campo = eval(document.getElementById("resultado").value)
            document.getElementById("resultado").value = valor_campo
            limpa = true
            }
          }

          else if(tipo === "valor"){
              if(limpa){
                document.getElementById("resultado").value = ""
              }
            document.getElementById("resultado").value += valor
            limpa = false
          }
       }
       console.log(calcular)
