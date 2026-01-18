pipeline {
    agent any

    environment {
        IMAGE_NAME = "wishit-app"
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:${BUILD_NUMBER} .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop wishit-app || true
                docker rm wishit-app || true
                docker run -d -p 4200:4200 --name wishit-app $IMAGE_NAME:${BUILD_NUMBER}
                '''
            }
        }
    }

    post {
        success {
            echo "WishIt deployed successfully 🚀"
        }
        failure {
            echo "WishIt deployment failed ❌ Check logs"
        }
    }
}
