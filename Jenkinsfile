// This is a Jenkinsfile. It is a script that Jenkins will run when a build is triggered.
pipeline {
    // Telling Jenkins to run the pipeline on any available agent.
    agent any

    // Setting environment variables for the build.
    environment {
        MONGODB_URI = credentials('mongodb-uri')
    }

    // This is the pipeline. It is a series of stages that Jenkins will run.
    stages {
        // This state is telling Jenkins to checkout the source code from the source control management system.
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        // This stage is telling Jenkins to run the tests in the client directory.
        // stage('Client Tests') {
        //     steps {
        //         dir('client') {
        //             sh 'npm install'
        //             sh 'npm test'
        //         }
        //     }
        // }
        
        // This stage is telling Jenkins to run the tests in the server directory.
        // stage('Server Tests') {
        //     steps {
        //         dir('server') {
        //             sh 'npm install'
        //             sh 'export MONGODB_URI=$MONGODB_URI'
        //             sh 'npm test'
        //         }
        //     }
        // }
        
    }
}