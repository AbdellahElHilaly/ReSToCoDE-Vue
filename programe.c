#include <stdio.h>
#include <string.h>

#define MAX_COMMANDES 100

// Définition de la structure de la commande
typedef struct {
    char nom[50];
    char prenom[50];
    char telephone[20];
    char adresse[100];
    char article[50];
    char taille[10];
    char couleur[20];
    char motif[50];
    int quantite;
} Commande;

// Définition de la structure de la liste de commandes
typedef struct {
    Commande commandes[MAX_COMMANDES];
    int nb_commandes;
} ListeCommandes;

// Procédure pour saisir une commande
void saisir_commande(Commande *commande) {
    printf("Saisir les informations de la commande :\n");
    printf("Nom et prénom : ");
    scanf("%s %s", commande->nom, commande->prenom);
    printf("Numéro de téléphone : ");
    scanf("%s", commande->telephone);
    printf("Adresse : ");
    scanf(" %[^\n]s", commande->adresse);
    printf("Article : ");
    scanf("%s", commande->article);
    printf("Taille : ");
    scanf("%s", commande->taille);
    printf("Couleur : ");
    scanf("%s", commande->couleur);
    printf("Motif : ");
    scanf("%s", commande->motif);
    printf("Quantité : ");
    scanf("%d", &commande->quantite);
}

// Fonction pour chercher une commande par nom et prénom ou article
int chercher_commande(ListeCommandes *liste_commandes, char *nom_prenom, char *article) {
    int i;
    for (i = 0; i < liste_commandes->nb_commandes; i++) {
        Commande commande = liste_commandes->commandes[i];
        if (strcmp(commande.nom, nom_prenom) == 0 || strcmp(commande.article, article) == 0) {
            return i;
        }
    }
    return -1;
}

// Procédure pour ajouter une commande
void ajouter_commande(ListeCommandes *liste_commandes) {
    if (liste_commandes->nb_commandes >= MAX_COMMANDES) {
        printf("La liste de commandes est pleine.\n");
        return;
    }
    Commande commande;
    saisir_commande(&commande);
    liste_commandes->commandes[liste_commandes->nb_commandes] = commande;
    liste_commandes->nb_commandes++;
    printf("La commande a été ajoutée avec succès.\n");
}

// Procédure pour supprimer une commande
void supprimer_commande(ListeCommandes *liste_commandes) {
    char nom_prenom[100];
    char article[50];
    printf("Saisir le nom et prénom ou l'article de la commande à supprimer : ");
    scanf("%s", nom_prenom);
    int index = chercher_commande(liste_commandes, nom_prenom, nom_prenom);
    if (index == -1) {
        printf("Aucune commande n'a été trouvée.\n");
        return;
    }
    Commande commande = liste_commandes->commandes[index];
    printf("La commande suivante va être supprimée :\n");
    printf("Nom et prénom : %s %s\n", commande.nom, commande.prenom);
    printf("Numéro de téléphone : %s\n", commande.telephone);
    printf("Adresse : %s\n", commande.adresse);
    printf("Article : %s\n", commande.article);
    printf("Taille : %s\n", commande.taille);
    printf("Couleur : %s\n", commande.couleur);
    printf("Motif : %s\n", commande.motif);
    printf("Quantité : %d\n", commande.quantite);
    printf("Êtes-vous sûr de vouloir supprimer cette commande ? (O/N) ");
    char reponse;
    scanf(" %c", &reponse);
    if (reponse == 'O' || reponse == 'o') {
        int i;
        for (i = index; i < liste_commandes->nb_commandes - 1; i++) {
            liste_commandes->commandes[i] = liste_commandes->commandes[i + 1];
        }
        liste_commandes->nb_commandes--;
        printf("La commande a été supprimée avec succès.\n");
    } else {
        printf("La commande n'a pas été supprimée.\n");
    }
}

// Procédure pour afficher toutes les commandes
void afficher_commandes(ListeCommandes *liste_commandes) {
int i;
printf("Liste des commandes :\n");
for (i = 0; i < liste_commandes->nb_commandes; i++) {
Commande commande = liste_commandes->commandes[i];
printf("Nom et prénom : %s %s\n", commande.nom, commande.prenom);
printf("Numéro de téléphone : %s\n", commande.telephone);
printf("Adresse : %s\n", commande.adresse);
printf("Article : %s\n", commande.article);
printf("Taille : %s\n", commande.taille);
printf("Couleur : %s\n", commande.couleur);
printf("Motif : %s\n", commande.motif);
printf("Quantité : %d\n\n", commande.quantite);
}
}

// Procédure pour afficher le menu
void afficher_menu() {
printf("Menu :\n");
printf("1. Afficher toutes les commandes\n");
printf("2. Chercher une commande par nom et prénom ou article\n");
printf("3. Ajouter une commande\n");
printf("4. Supprimer une commande\n");
printf("5. Quitter\n");
printf("Saisir le numéro de l'option choisie : ");
}

// Fonction principale
int main() {
    ListeCommandes liste_commandes = { {}, 0 };

    // Initialisation de trois commandes
    Commande commande1 = { "Dupont", "Jean", "01 23 45 67 89", "10 rue de la Paix, Paris", "Chemise", "L", "Bleu", "Rayures", 2 };
    Commande commande2 = { "Martin", "Sophie", "02 34 56 78 90", "5 avenue des Champs-Elysées, Paris", "Pantalon", "M", "Noir", "Uni", 1 };
    Commande commande3 = { "Dubois", "Pierre", "03 45 67 89 01", "20 rue Saint-Honoré, Paris", "Jupe", "S", "Vert", "Fleurs", 3 };
    liste_commandes.commandes[0] = commande1;
    liste_commandes.commandes[1] = commande2;
    liste_commandes.commandes[2] = commande3;
    liste_commandes.nb_commandes = 3;

    int choix;
    do {
        afficher_menu();
        scanf("%d", &choix);
        switch (choix) {
            case 1:
                afficher_commandes(&liste_commandes);
                break;
            case 2:
                // ...
                break;
            case 3:
                ajouter_commande(&liste_commandes);
                break;
            case 4:
                supprimer_commande(&liste_commandes);
                break;
            case 5:
                printf("Au revoir !\n");
                break;
            default:
                printf("Option invalide.\n");
                break;
        }
    } while (choix != 5);

    return 0;
}


/* 
    ===> testing the code :
    if you want to test this code you can use this link : https://www.onlinegdb.com/online_c_compiler


    ===> explanation of the code :
    * definition how this code functioned :

    - the first thing we did was to create a structure called "Commande" which contains all the information of a command
    
    - then we created a structure called "ListeCommandes" which contains an array of "Commande" and the number of commands

    - then we created a function called "saisir_commande" which allows us to enter the information of a command

    - then we created a function called "chercher_commande" which allows us to search for a command by name and first name or by article

    - then we created a function called "ajouter_commande" which allows us to add a command

    - then we created a function called "supprimer_commande" which allows us to delete a command

    - then we created a function called "afficher_commandes" which allows us to display all the commands

    - then we created a function called "afficher_menu" which allows us to display the menu

    - finally we created a function called "main" which is the main function of the program

    * the code is in french but you can translate it with google translate

    ===> about me :

    * my name is Abdellah El Hilaly full stack developer web and mobile (android and ios) 

    * if you have any questions you can contact me in linkedin : https://www.linkedin.com/in/abdellah-el-hilaly/
    * whatsapp : +212 6 81870852
    *github : https://github.com/AbdellahElHilaly

*/






