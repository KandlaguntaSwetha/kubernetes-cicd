pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "kandlaguntaswetha/nodejs-cicd-project:build-${BUILD_NUMBER}"
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Docker Login') {
            steps {
                sh '''
                    echo "$DOCKERHUB_CREDENTIALS_PSW" | docker login -u "$DOCKERHUB_CREDENTIALS_USR" --password-stdin
                '''
            }
        }

        stage('Docker Push') {
            steps {
                sh 'docker push $DOCKER_IMAGE'
            }
        }
       stage('Kubernetes Deploy') {
    steps {
        sh '''
            kubectl apply -f k8s/service.yaml
            kubectl set image deployment/kubernetes-cicd-app kubernetes-cicd-app=$DOCKER_IMAGE
            kubectl annotate deployment/kubernetes-cicd-app kubernetes.io/change-cause="Jenkins build ${BUILD_NUMBER} - ${DOCKER_IMAGE}" --overwrite
            kubectl rollout status deployment/kubernetes-cicd-app
        '''
    }
}
    }
}
