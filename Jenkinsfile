pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'restau'
        DOCKER_TAG = 'latest'
        DOCKER_HUB_USERNAME = 'hasnae387'
        DOCKER_HUB_PASSWORD = credentials('password') 
    }

    stages {
        stage('Cloner le dépôt') {
            steps {
                echo 'Clonage du dépôt Git...'
                checkout scm
            }
        }

        stage('Installer les dépendances Node.js') {
            steps {
                echo 'Installation des dépendances Node.js...'
                sh 'npm install'
            }
        }

        stage('Exécuter les tests unitaires') {
            steps {
                echo 'Exécution des tests unitaires...'
                sh 'npm test'
            }
        }

        stage('Construire l\'application') {
            steps {
                echo 'Construction de l\'application...'
                sh 'npm run build'
            }
        }

        stage('Créer l\'image Docker') {
            steps {
                script {
                    echo 'Création de l\'image Docker...'
                    sh "docker build -t $DOCKER_IMAGE:$DOCKER_TAG ."
                }
            }
        }

        stage('Connexion à Docker Hub') {
            steps {
                script {
                    echo 'Connexion à Docker Hub...'
                    sh "docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD"
                }
            }
        }

        stage('Pousser l\'image Docker sur Docker Hub') {
            steps {
                script {
                    echo 'Poussée de l\'image Docker sur Docker Hub...'
                    sh "docker tag $DOCKER_IMAGE:$DOCKER_TAG $DOCKER_HUB_USERNAME/$DOCKER_IMAGE:$DOCKER_TAG"
                    sh "docker push $DOCKER_HUB_USERNAME/$DOCKER_IMAGE:$DOCKER_TAG"
                }
            }
        }

        stage('Déployer sur le serveur distant') {
            steps {
                script {
                    echo 'Déploiement de l\'application sur le serveur distant...'
                    sshagent(['remote-server-ssh']) { // Configurez cette clé dans Jenkins
                        sh """
                            ssh user@remote-server '
                                docker pull $DOCKER_HUB_USERNAME/$DOCKER_IMAGE:$DOCKER_TAG &&
                                docker stop restau-app || true &&
                                docker rm restau-app || true &&
                                docker run -d --name restau-app -p 80:80 $DOCKER_HUB_USERNAME/$DOCKER_IMAGE:$DOCKER_TAG
                            '
                        """
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline terminé avec succès.'
        }
        failure {
            echo 'Le pipeline a échoué.'
        }
    }
}
