# Validador Hash
O validador de hash é uma ferramenta web para verificar a integridade de um arquivo através do hash original de um arquivo.

- [Overview](#overview)
- [Como funciona](#como-funciona)
- [Técnologias utilizadas](#tecnologias-utilizadas)

## Overview
- Para verificar a integridade de arquivos transferidos, seja por download online ou qualquer outro meio, utilizamos o hash.

- Hash é uma função matemática que transforma dados em uma sequência de tamanho fixo. Um mesmo arquivo sempre gera o mesmo valor de hash, enquanto pequenas alterações nos dados resultam em valores completamente diferentes, tornando extremamente improvável a ocorrência de colisões.

- A vantagem de utilizar hash é que, depois de baixado, o arquivo deve conter o mesmo hash do arquivo fonte. Isso significa que qualquer alteração, por menor que seja, resultará em um valor hash completamente diferente.

## Como funciona
- Na aplicação, é utilizado o algoritmo de hash SHA-256, um dos mais utilizados para validação de arquivos atualmente.

- Esse hash é conhecido por ser altamente confiável, garantindo que a menor alteração nos bytes resulte em uma chave completamente diferente.


## Tecnologias utilizadas
Para o projeto, utilizei as seguintes tecnologias:
- HTML5 para criar a interface.
- CSS para os estilos.
- JavaScript para conectar a interface com as funcionalidades.
- Python para o backend.
- Flask para montar o servidor.  