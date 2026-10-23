pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t kandlaguntaswetha/nodejs-cicd-project:1.0 .'
            }
        }

    }
}
