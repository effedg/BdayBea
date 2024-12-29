#!/bin/bash

echo "Backup del file .zshrc esistente..."
if [ -f ~/.zshrc ]; then
    cp ~/.zshrc ~/.zshrc_backup_$(date +%Y%m%d_%H%M%S)
    echo "Backup salvato come ~/.zshrc_backup_<data>"
else
    echo "Nessun file .zshrc trovato, nessun backup necessario."
fi

echo "Creazione di un nuovo file .zshrc minimale..."
cat <<EOF > ~/.zshrc
# Alias utili
alias ll='ls -la'
alias gs='git status'

# Prompt semplice
export PS1="%n@%m:%~%# "

# Caricamento di Oh My Zsh se disponibile
if [ -f ~/.oh-my-zsh/oh-my-zsh.sh ]; then
    source ~/.oh-my-zsh/oh-my-zsh.sh
fi
EOF

echo "File .zshrc ripristinato con successo!"
echo "Puoi aggiungere nuovamente le tue personalizzazioni dopo aver verificato che funzioni correttamente."

echo "Ricarico il nuovo .zshrc..."
source ~/.zshrc

echo "Operazione completata. Apri un nuovo terminale per verificare che tutto funzioni!"
