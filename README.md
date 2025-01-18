COMMANDE :
py -3 -m venv .venv
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
.venv\Scripts\activate
pip install flask
python app.py

pip freeze > requirements.txt
pip install -r requirements.txt


TECHNIQUE UTILISE : HASH
Le hachage est une technique couramment utilisée pour la reconnaissance d’images. Elle consiste à prendre une image en entrée, à la transformer en une empreinte unique à l’aide d’une fonction de hachage et à stocker cette empreinte dans une base de données. Lorsque l’on souhaite identifier une image, on utilise la même fonction de hachage pour créer une empreinte à partir de l’image à identifier, puis on compare cette empreinte à celles stockées dans la base de données. Si une empreinte correspond, cela signifie que l’image a été identifiée avec succès.