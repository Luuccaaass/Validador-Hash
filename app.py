import hashlib

try:
    a = open("chave.txt", mode="rb")
    print("Arquivo aberto com sucesso!")
    content = a.read()


except:
    print("Falha ao abrir arquivo!")


m = hashlib.sha256()
m.update(content)
print(f"{m.hexdigest()} \n")
